# The Whole Genome Sequencing Coverage Plot

## Introduction

**The Whole Genome Sequencing Coverage Plot (wgscovplot)** is a tool to generate HTML Interactive Coverage Plot given coverage depth information, variants and DNA Gene features

## Dependencies

### Software Version

- The current version is ```0.1.0```

### Limitation

- The tool is currently designed for SARS-COV-2 virus. The supports for other virus such as Avian Influenza, African Swine Fever Virus (ASFV), Foot and Mouth Disease (FMD) will be added soon.

### Programming Languages

- Python (>=3.7)
- HTML/CSS/Javascript

### Tools/libraries

- [Echarts]
- Python libraries: Biopython, rich, typer, pandas, requests
- [select2]
- [jinja2]

## Installation

### Install from source
Clone the `wgscovplot` repository.

```
git clone https://github.com/nhhaidee/wgscovplot.git
```

Then change directory to `wgscovplot` and install.

```
cd wgscovplot
python setup.py install
```

### Install by pip

```
pip install wgscovplot
```

### Install by conda

```
conda install -c bioconda wgscovplot
```

If the installation was successful, you should be able to type `wgscovplot --help` and get a help message on how to use the tool.

## Features

- Interactively view coverage plot in the browser
- Accept Nextflow workflow results folder as ```input-dir``` which are generated by [nf-core/viralrecon] or [peterk87/nf-virontus]
- Parse variants information from popular variant callers such as iVar, Nanopolish, Longshot, Medaka
- Variant calling information ([SnpEff] and [SnpSift] results, VCF file information)
- Parse depths information (```*.per-base.bed.gz``` and ```*.regions.bed.gz```) generated by [Mosdepth]
- Provide user the full control of charts display


## Usage

```
Usage: wgscovplot [OPTIONS]

Options:
  --input-dir PATH                Nextflow workflow results directory
                                  [required]
  --output-html PATH              Output File of Interactive HTML Coverage
                                  Plot  [default: wgscovplot.html]
  --ref-seq PATH                  Path to reference sequences
  --genbank PATH                  Genbank file contains gene features
  --ncbi-accession-id TEXT        NCBI accession id to fetch gene features
                                  and/or reference sequences
  --amplicon / --no-amplicon      Plot Amplicon Coverage Depth  [default: no-
                                  amplicon]
  --gene-feature / --no-gene-feature
                                  Plot Gene Features  [default: no-gene-
                                  feature]
  --gene-misc-feature / --no-gene-misc-feature
                                  Plot Miscellaneous Features  [default: no-
                                  gene-misc-feature]
  --verbose / --no-verbose        Verbose logs  [default: no-verbose]
  --version / --no-version        Print wgscovplot version and exit
  --install-completion [bash|zsh|fish|powershell|pwsh]
                                  Install completion for the specified shell.
  --show-completion [bash|zsh|fish|powershell|pwsh]
                                  Show completion for the specified shell, to
                                  copy it or customize the installation.
  --help                          Show this message and exit.
```

### Other data:

- Reference Sequences (reference.fasta)
- Genbank file contains gene features (sequence_genbank.gb)

### Output:
The tool will generate the Coverage Plot for samples in HTML file. <a href="https://nhhaidee.github.io/index.html">Click here for an example</a>

<img width="765" alt="wgscovplot" src="https://raw.githubusercontent.com/nhhaidee/nhhaidee.github.io/master/wgscovplot.png">

### Command

```
wgscovplot --input-dir /path/to/nextflow_results_folder --ref-seq reference.fasta --genbank sequence_genbank.gb --gene-feature
```
#### With NCBI Accession ID
```
wgscovplot --input-dir /path/to/nextflow_results_folder --ncbi-accession-id MN908947.3 --gene-feature
```
#### For amplicon coverage plot
```
wgscovplot --input-dir /path/to/nextflow_results_folder --ref-seq reference.fasta --genbank sequence_genbank.gb --gene-feature --amplicon
```

## Authors

* Development Lead: [Peter Kruczkiewicz]
* Software Developer: [Hai Nguyen]

## License

Copyright 2021 Canadian Food Inspection Agency of Canada, Government of Canada.

WGSCOVPLOT is available under the Apache License V2.

<!-- TODO nf-core: Add bibliography of tools and data used in your pipeline -->


[Peter Kruczkiewicz]: https://github.com/peterk87/
[Hai Nguyen]: https://github.com/nhhaidee/
[Echarts]: https://echarts.apache.org/en/index.html
[select2]: https://select2.org/
[jinja2]: https://jinja.palletsprojects.com/en/3.0.x/
[SnpEff]: https://pcingola.github.io/SnpEff/se_introduction/
[SnpSift]: https://pcingola.github.io/SnpEff/ss_introduction/
[Mosdepth]: https://github.com/brentp/mosdepth
[nf-core/viralrecon]: https://github.com/nf-core/viralrecon
[peterk87/nf-virontus]: https://github.com/peterk87/nf-virontus/
[Canadian Food Inspection Agency of Canada]: https://inspection.canada.ca/science-and-research/our-laboratories/ncfad-winnipeg/eng/1549576575939/1549576643836