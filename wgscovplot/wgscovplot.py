import logging
import requests
import pandas as pd
import os
import numpy as np
from typing import Tuple, Dict, List
from pathlib import Path
from jinja2 import Environment, FileSystemLoader
from Bio import SeqIO
from itertools import cycle

color_pallete = ['#A6CEE3', '#1F78B4', '#B2DF8A', '#33A02C', '#FB9A99', '#E31A1C', '#fDBF6F', '#FF7F00',
                 '#CAB2D6',
                 '#6A3D9A', '#FF33D3', '#B15928', '#0006FC', '#2FB0EC', '#F3D742', '#2E9CE1', '#273D63',
                 '#980B92',
                 '#BBB873', '#EEC678', '#47E10B', '#E3139B', '#151179', '#293948', '#5F6005', '#FE24BE',
                 '#A7C36B',
                 '#D454DD', '#A68E2D', '#DB5AAC', '#405425', '#A608E4', '#533551', '#367521', '#64B875',
                 '#6DB011',
                 '#F5DD11', '#8A8517', '#F8E541', '#2D2A50', '#AAC3CC', '#C5D840', '#B79619', '#BBB2FE',
                 '#E37B03',
                 '#AFBB3E', '#74A110', '#E9877E', '#973F28', '#AFCA57', '#6E5EDE', '#B95FC3', '#C10AC8',
                 '#A59B67',
                 '#624F98', '#57A6AF', '#2650FB', '#94AAD1', '#5C1662', '#B8A1A1', '#104DB7', '#C6CBEE',
                 '#AA694D',
                 '#9B67DA', '#8DE7BC', '#866D49', '#72CEDC', '#574B7C', '#CD4474', '#593A60', '#2A6BB7',
                 '#286028',
                 '#6965EB', '#14CB29', '#956709', '#EB6D76', '#7A9A21', '#692C3C', '#AABBB5', '#1989AE',
                 '#D78DCC',
                 '#C43AAA', '#BBC863', '#E55F9D', '#741B13', '#6A7675', '#221A53', '#1804EC', '#D61D88',
                 '#1D50B3',
                 '#CF0E24', '#D791A9', '#0892FE', '#F5A865', '#91EBC2', '#9F650D', '#1B0A0F', '#1E9E88',
                 '#B42E38',
                 '#9710C9']

resources = {
    'echarts_js': 'https://cdn.jsdelivr.net/npm/echarts@5.2.1/dist/echarts.min.js',
    'jquery_js': 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    'select2_css': 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css',
    'select2_js': 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js',
    'popper_js': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js',
    'bootstrap_js': 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js',
    'bootstrap_css': 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css',
    'lodash_js': 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'
}

gene_feature_properties = {
    'max_grid_height': 80,
    'rec_items_height': 12,
    'plus_strand_level': 0,
    'minus_strand_level': 55,
    'grid_height': "15%"
}

depth_zero_workaround = 1E-10


def get_region_amplicon(bedfile: Path) -> pd.DataFrame:
    df_amplicon = pd.read_table(bedfile,
                                names=['reference', 'start', 'end', 'amplicon', 'depth'],
                                header=None)
    amplicon_dict = {row.amplicon: [row.start, row.end] for row in df_amplicon.itertuples()}
    return amplicon_dict


def get_depth_amplicon(df_samples_amplicon: pd.DataFrame) -> Dict[str, List]:
    depth_amplicon_data = {}
    for sample in df_samples_amplicon.index:
        amplicon_depth_file = df_samples_amplicon.loc[sample, 'amplicon_region_file'].strip()
        df_amplicon_depth = pd.read_table(amplicon_depth_file, names=['reference', 'start', 'end', 'amplicon', 'depth'])
        depth_amplicon_data[sample] = []
        for row in df_amplicon_depth.itertuples():
            pool_id = int(row.amplicon.split('_')[-1])
            if pool_id % 2:
                depth_amplicon_data[sample].append(dict(
                    value=[row.start, row.end, row.depth, row.amplicon],
                    itemStyle={"color": "violet"}))
            else:
                depth_amplicon_data[sample].append(dict(
                    value=[row.start, row.end, row.depth, row.amplicon],
                    itemStyle={"color": "skyblue"}))
    return depth_amplicon_data


def get_coverage_stat(sample: str, df: pd.DataFrame, low=10) -> List:
    low_depth = (df.depth < 10)
    zero_depth = (df.depth == depth_zero_workaround)
    mean_cov = f'{df.depth.mean():.1f}X'
    median_cov = f'{df.depth.median():.1f}X'
    genome_cov = "{:.2%}".format((df.depth >= low).sum() / df.shape[0])
    pos_low_cov = low_depth.sum()
    pos_no_cov = zero_depth.sum()
    region_low_cov = get_interval_coords(df, low - 1)
    region_no_cov = get_interval_coords(df, depth_zero_workaround)
    return [sample, mean_cov, median_cov, genome_cov, pos_low_cov, pos_no_cov, region_low_cov, region_no_cov]


def read_regular_depths(fpath: Path) -> pd.DataFrame:
    df = pd.read_table(fpath,
                       names=['sample_name', 'reference', 'pos', 'depth'],
                       header=None)
    return df


def parse_vcf(vcf_file: Path) -> Tuple[str, pd.DataFrame]:
    """Read VCF file into a DataFrame"""
    # https://github.com/peterk87/xlavir/blob/fbe11b4cef38bc291500c69d62b8599912c45887/xlavir/tools/variants.py#L211
    gzipped = vcf_file.endswith('.gz')
    with os.popen(f'zcat < {vcf_file}') if gzipped else open(vcf_file) as fh:
        vcf_cols = []
        variant_caller = ''
        for line in fh:
            if line.startswith('##source='):
                variant_caller = line.strip().replace('##source=', '')
            if line.startswith('##nanopolish'):
                variant_caller = 'nanopolish'
            if line.startswith('#CHROM'):
                vcf_cols = line[1:].strip().split('\t')
                break
        df = pd.read_table(fh,
                           comment='#',
                           header=None,
                           names=vcf_cols)
        df = df[~df.duplicated(['CHROM', 'POS', 'ID', 'REF', 'ALT', 'FILTER'], keep='first')]
    return variant_caller, df


def get_interval_coords(df: pd.DataFrame, threshold=0):
    pos = df[df.depth <= threshold].pos
    coords = []
    for i, x in enumerate(pos):
        if coords:
            last = coords[-1][-1]
            if x == last + 1:
                coords[-1].append(x)
            else:
                coords.append([x])
        else:
            coords.append([x])
    return '; '.join([f'{xs[0]}-{xs[-1]}' for xs in coords])


def overlap(start1, end1, start2, end2):
    return start1 <= start2 <= end1 or start1 <= end2 <= end1


def get_gene_feature(annotation: Path) -> List:
    gene_feature = []
    colour_cycle = cycle(color_pallete)
    minus_strains_list = [0, 0, 0]
    plus_strains_list = [0, 0, 0]
    for seq_record in SeqIO.parse(annotation, "genbank"):
        index = 0  # the index must be continuous for data handling with Echarts
        for seq_feature in seq_record.features:
            if seq_feature.type in ["CDS", "source"]:
                continue
            if seq_feature.type in ["5'UTR", "3'UTR"]:
                feature_name = seq_feature.type
            else:
                if seq_feature.qualifiers.get('gene'):
                    feature_name = seq_feature.qualifiers['gene'][0]
                elif seq_feature.qualifiers.get('locus_tag'):
                    feature_name = seq_feature.qualifiers['locus_tag'][0]
            start_pos = int(seq_feature.location.start) + 1
            end_pos = int(seq_feature.location.end)
            strand = seq_feature.strand
            if strand == 1:
                if overlap(plus_strains_list[0], plus_strains_list[1], start_pos, end_pos):
                    level = gene_feature_properties['plus_strand_level'] + gene_feature_properties[
                        'rec_items_height'] + 3
                    if plus_strains_list[2] == gene_feature_properties['plus_strand_level'] + gene_feature_properties[
                        'rec_items_height'] + 3:
                        level = gene_feature_properties['plus_strand_level']
                        gene_feature.append(
                            dict(name=feature_name,
                                 value=[index, start_pos, end_pos, level, strand, 'gene_feature'],
                                 itemStyle={"color": next(colour_cycle)})
                        )
                    else:
                        gene_feature.append(
                            dict(name=feature_name,
                                 value=[index, start_pos, end_pos, level, strand, 'gene_feature'],
                                 itemStyle={"color": next(colour_cycle)})
                        )

                else:
                    level = gene_feature_properties['plus_strand_level']
                    gene_feature.append(
                        dict(name=feature_name,
                             value=[index, start_pos, end_pos, level, strand, 'gene_feature'],
                             itemStyle={"color": next(colour_cycle)})
                    )
                plus_strains_list = [start_pos, end_pos, level]
            else:
                if overlap(minus_strains_list[0], minus_strains_list[1], start_pos, end_pos):
                    level = gene_feature_properties['minus_strand_level'] + gene_feature_properties[
                        'rec_items_height'] + 3
                    if minus_strains_list[2] == gene_feature_properties['minus_strand_level'] + \
                            gene_feature_properties['rec_items_height'] + 3:
                        level = gene_feature_properties['minus_strand_level']
                        gene_feature.append(
                            dict(name=feature_name,
                                 value=[index, start_pos, end_pos, level, strand, 'gene_feature'],
                                 itemStyle={"color": next(colour_cycle)})
                        )
                    else:
                        gene_feature.append(
                            dict(name=feature_name,
                                 value=[index, start_pos, end_pos, level, strand, 'gene_feature'],
                                 itemStyle={"color": next(colour_cycle)})
                        )
                else:
                    level = gene_feature_properties['minus_strand_level']
                    gene_feature.append(
                        dict(name=feature_name,
                             value=[index, start_pos, end_pos, level, strand, 'gene_feature'],
                             itemStyle={"color": next(colour_cycle)})
                    )
                minus_strains_list = [start_pos, end_pos, level]
            index = index + 1
    return gene_feature


def write_html_coverage_plot(samples_name: dict,
                             depth_data: dict,
                             variant_data: dict,
                             ref_seq: str,
                             coverage_stat: list,
                             gene_feature: dict,
                             about_html: str,
                             output_html: Path,
                             amplicon: bool = False,
                             amplicon_data: dict = {},
                             ) -> None:
    render_env = Environment(
        keep_trailing_newline=True,
        trim_blocks=True,
        lstrip_blocks=True,
        loader=FileSystemLoader(Path.joinpath(Path(__file__).resolve().parent, "tmpl")),
    )

    template_file = render_env.get_template("covplot_template.html")
    with open(output_html, "w+", encoding="utf-8") as fout:
        logging.info('Retrieving JS and CSS resources for Coverage Plot')
        scripts_css = {}
        for k, v in resources.items():
            logging.info(f'Getting HTML resource "{k}" from "{v}"')
            scripts_css[k] = requests.get(v).text
        fout.write(template_file.render(gene_feature_properties=gene_feature_properties,
                                        gene_feature=gene_feature,
                                        amplicon_data=amplicon_data,
                                        amplicon=amplicon,
                                        samples_name=samples_name,
                                        depth_data=depth_data,
                                        variant_data=variant_data,
                                        coverage_stat=coverage_stat,
                                        ref_seq=ref_seq,
                                        ref_seq_length=len(ref_seq),
                                        about_html=about_html,
                                        **scripts_css))


def get_samples_name(df_samples: pd.DataFrame) -> Dict[int, str]:
    samples_dict = {}
    for i, sample in enumerate(df_samples.index):
        logging.info(f'Preparing data for sample "{sample}"')
        samples_dict[i] = sample
    return samples_dict


def get_depth_data(df_samples: pd.DataFrame, amplicon: bool = False, ref_len: int = 29903) -> Dict[str, List]:
    depth_data = {}
    if amplicon:
        for sample in df_samples.index:
            # get regular depth
            depth_perbase_data = np.zeros(ref_len)
            depth_file = df_samples.loc[sample, 'amplicon_perbase_file'].strip()
            df_perbase_depth = pd.read_table(depth_file, names=['reference', 'start', 'end', 'depth'], header=None)
            df_perbase_depth.loc[df_perbase_depth.depth == 0, 'depth'] = depth_zero_workaround
            for row in df_perbase_depth.itertuples():
                if row.depth == 0:
                    depth_perbase_data[row.start:row.end] = depth_zero_workaround
                else:
                    depth_perbase_data[row.start:row.end] = row.depth
            depth_data[sample] = depth_perbase_data.tolist()
        return depth_data
    else:
        for sample in df_samples.index:
            df_coverage_depth = read_regular_depths(df_samples.loc[sample, 'coverage_depth_file'].strip())
            df_coverage_depth.loc[df_coverage_depth.depth == 0, 'depth'] = depth_zero_workaround
            depth_data[sample] = df_coverage_depth.loc[:, 'depth'].to_list()
    return depth_data


def get_variant_data(df_samples: pd.DataFrame) -> Dict[str, List]:
    variants_data = {}
    for sample in df_samples.index:
        variant_info = {}
        if df_samples.loc[sample, 'vcf_file']:
            df_vcf = parse_vcf(df_samples.loc[sample, 'vcf_file'].strip())[1]
            variant_info = {row.POS: (row.REF, row.ALT) for row in df_vcf.itertuples()}
        variants_data[sample] = variant_info
    return variants_data
