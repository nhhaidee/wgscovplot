!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.wgscovplot=e():t.wgscovplot=e()}(this,(function(){return(()=>{var t={8552:(t,e,r)=>{var n=r(852)(r(5639),"DataView");t.exports=n},1989:(t,e,r)=>{var n=r(1789),o=r(401),a=r(7667),i=r(1327),u=r(1866);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=u,t.exports=s},8407:(t,e,r)=>{var n=r(7040),o=r(4125),a=r(2117),i=r(7529),u=r(4705);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=u,t.exports=s},7071:(t,e,r)=>{var n=r(852)(r(5639),"Map");t.exports=n},3369:(t,e,r)=>{var n=r(4785),o=r(1285),a=r(6e3),i=r(9916),u=r(5265);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=u,t.exports=s},3818:(t,e,r)=>{var n=r(852)(r(5639),"Promise");t.exports=n},8525:(t,e,r)=>{var n=r(852)(r(5639),"Set");t.exports=n},8668:(t,e,r)=>{var n=r(3369),o=r(619),a=r(2385);function i(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new n;++e<r;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},6384:(t,e,r)=>{var n=r(8407),o=r(7465),a=r(3779),i=r(7599),u=r(4758),s=r(4309);function c(t){var e=this.__data__=new n(t);this.size=e.size}c.prototype.clear=o,c.prototype.delete=a,c.prototype.get=i,c.prototype.has=u,c.prototype.set=s,t.exports=c},2705:(t,e,r)=>{var n=r(5639).Symbol;t.exports=n},1149:(t,e,r)=>{var n=r(5639).Uint8Array;t.exports=n},577:(t,e,r)=>{var n=r(852)(r(5639),"WeakMap");t.exports=n},6874:t=>{t.exports=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}},4963:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,a=[];++r<n;){var i=t[r];e(i,r,t)&&(a[o++]=i)}return a}},4636:(t,e,r)=>{var n=r(2545),o=r(5694),a=r(1469),i=r(4144),u=r(5776),s=r(6719),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=a(t),p=!r&&o(t),f=!r&&!p&&i(t),l=!r&&!p&&!f&&s(t),v=r||p||f||l,h=v?n(t.length,String):[],d=h.length;for(var y in t)!e&&!c.call(t,y)||v&&("length"==y||f&&("offset"==y||"parent"==y)||l&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||u(y,d))||h.push(y);return h}},9932:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},2488:t=>{t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},2908:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}},8470:(t,e,r)=>{var n=r(7813);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},9881:(t,e,r)=>{var n=r(7816),o=r(9291)(n);t.exports=o},760:(t,e,r)=>{var n=r(9881);t.exports=function(t,e){var r=[];return n(t,(function(t,n,o){e(t,n,o)&&r.push(t)})),r}},1078:(t,e,r)=>{var n=r(2488),o=r(7285);t.exports=function t(e,r,a,i,u){var s=-1,c=e.length;for(a||(a=o),u||(u=[]);++s<c;){var p=e[s];r>0&&a(p)?r>1?t(p,r-1,a,i,u):n(u,p):i||(u[u.length]=p)}return u}},8483:(t,e,r)=>{var n=r(5063)();t.exports=n},7816:(t,e,r)=>{var n=r(8483),o=r(3674);t.exports=function(t,e){return t&&n(t,e,o)}},7786:(t,e,r)=>{var n=r(1811),o=r(327);t.exports=function(t,e){for(var r=0,a=(e=n(e,t)).length;null!=t&&r<a;)t=t[o(e[r++])];return r&&r==a?t:void 0}},8866:(t,e,r)=>{var n=r(2488),o=r(1469);t.exports=function(t,e,r){var a=e(t);return o(t)?a:n(a,r(t))}},4239:(t,e,r)=>{var n=r(2705),o=r(9607),a=r(2333),i=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},13:t=>{t.exports=function(t,e){return null!=t&&e in Object(t)}},9454:(t,e,r)=>{var n=r(4239),o=r(7005);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},939:(t,e,r)=>{var n=r(2492),o=r(7005);t.exports=function t(e,r,a,i,u){return e===r||(null==e||null==r||!o(e)&&!o(r)?e!=e&&r!=r:n(e,r,a,i,t,u))}},2492:(t,e,r)=>{var n=r(6384),o=r(7114),a=r(8351),i=r(6096),u=r(4160),s=r(1469),c=r(4144),p=r(6719),f="[object Arguments]",l="[object Array]",v="[object Object]",h=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,d,y,x){var g=s(t),b=s(e),_=g?l:u(t),j=b?l:u(e),m=(_=_==f?v:_)==v,w=(j=j==f?v:j)==v,O=_==j;if(O&&c(t)){if(!c(e))return!1;g=!0,m=!1}if(O&&!m)return x||(x=new n),g||p(t)?o(t,e,r,d,y,x):a(t,e,_,r,d,y,x);if(!(1&r)){var S=m&&h.call(t,"__wrapped__"),A=w&&h.call(e,"__wrapped__");if(S||A){var P=S?t.value():t,z=A?e.value():e;return x||(x=new n),y(P,z,r,d,x)}}return!!O&&(x||(x=new n),i(t,e,r,d,y,x))}},2958:(t,e,r)=>{var n=r(6384),o=r(939);t.exports=function(t,e,r,a){var i=r.length,u=i,s=!a;if(null==t)return!u;for(t=Object(t);i--;){var c=r[i];if(s&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++i<u;){var p=(c=r[i])[0],f=t[p],l=c[1];if(s&&c[2]){if(void 0===f&&!(p in t))return!1}else{var v=new n;if(a)var h=a(f,l,p,t,e,v);if(!(void 0===h?o(l,f,3,a,v):h))return!1}}return!0}},8458:(t,e,r)=>{var n=r(3560),o=r(5346),a=r(3218),i=r(346),u=/^\[object .+?Constructor\]$/,s=Function.prototype,c=Object.prototype,p=s.toString,f=c.hasOwnProperty,l=RegExp("^"+p.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(n(t)?l:u).test(i(t))}},8749:(t,e,r)=>{var n=r(4239),o=r(1780),a=r(7005),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!i[n(t)]}},7206:(t,e,r)=>{var n=r(1573),o=r(6432),a=r(6557),i=r(1469),u=r(9601);t.exports=function(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?i(t)?o(t[0],t[1]):n(t):u(t)}},280:(t,e,r)=>{var n=r(5726),o=r(6916),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))a.call(t,r)&&"constructor"!=r&&e.push(r);return e}},9199:(t,e,r)=>{var n=r(9881),o=r(8612);t.exports=function(t,e){var r=-1,a=o(t)?Array(t.length):[];return n(t,(function(t,n,o){a[++r]=e(t,n,o)})),a}},1573:(t,e,r)=>{var n=r(2958),o=r(1499),a=r(2634);t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(r){return r===t||n(r,t,e)}}},6432:(t,e,r)=>{var n=r(939),o=r(7361),a=r(9095),i=r(5403),u=r(9162),s=r(2634),c=r(327);t.exports=function(t,e){return i(t)&&u(e)?s(c(t),e):function(r){var i=o(r,t);return void 0===i&&i===e?a(r,t):n(e,i,3)}}},9787:(t,e,r)=>{var n=r(7762);t.exports=function(t,e){var r=null==t?0:t.length;return r?n(t,e)/r:NaN}},2689:(t,e,r)=>{var n=r(9932),o=r(7786),a=r(7206),i=r(9199),u=r(1131),s=r(7518),c=r(5022),p=r(6557),f=r(1469);t.exports=function(t,e,r){e=e.length?n(e,(function(t){return f(t)?function(e){return o(e,1===t.length?t[0]:t)}:t})):[p];var l=-1;e=n(e,s(a));var v=i(t,(function(t,r,o){return{criteria:n(e,(function(e){return e(t)})),index:++l,value:t}}));return u(v,(function(t,e){return c(t,e,r)}))}},371:t=>{t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},9152:(t,e,r)=>{var n=r(7786);t.exports=function(t){return function(e){return n(e,t)}}},5976:(t,e,r)=>{var n=r(6557),o=r(5357),a=r(61);t.exports=function(t,e){return a(o(t,e,n),t+"")}},6560:(t,e,r)=>{var n=r(5703),o=r(8777),a=r(6557),i=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:n(e),writable:!0})}:a;t.exports=i},4259:t=>{t.exports=function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var a=Array(o);++n<o;)a[n]=t[n+e];return a}},1131:t=>{t.exports=function(t,e){var r=t.length;for(t.sort(e);r--;)t[r]=t[r].value;return t}},7762:t=>{t.exports=function(t,e){for(var r,n=-1,o=t.length;++n<o;){var a=e(t[n]);void 0!==a&&(r=void 0===r?a:r+a)}return r}},2545:t=>{t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},531:(t,e,r)=>{var n=r(2705),o=r(9932),a=r(1469),i=r(3448),u=n?n.prototype:void 0,s=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return s?s.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},7561:(t,e,r)=>{var n=r(7990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(o,""):t}},7518:t=>{t.exports=function(t){return function(e){return t(e)}}},4757:t=>{t.exports=function(t,e){return t.has(e)}},1811:(t,e,r)=>{var n=r(1469),o=r(5403),a=r(5514),i=r(9833);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:a(i(t))}},6393:(t,e,r)=>{var n=r(3448);t.exports=function(t,e){if(t!==e){var r=void 0!==t,o=null===t,a=t==t,i=n(t),u=void 0!==e,s=null===e,c=e==e,p=n(e);if(!s&&!p&&!i&&t>e||i&&u&&c&&!s&&!p||o&&u&&c||!r&&c||!a)return 1;if(!o&&!i&&!p&&t<e||p&&r&&a&&!o&&!i||s&&r&&a||!u&&a||!c)return-1}return 0}},5022:(t,e,r)=>{var n=r(6393);t.exports=function(t,e,r){for(var o=-1,a=t.criteria,i=e.criteria,u=a.length,s=r.length;++o<u;){var c=n(a[o],i[o]);if(c)return o>=s?c:c*("desc"==r[o]?-1:1)}return t.index-e.index}},4429:(t,e,r)=>{var n=r(5639)["__core-js_shared__"];t.exports=n},9291:(t,e,r)=>{var n=r(8612);t.exports=function(t,e){return function(r,o){if(null==r)return r;if(!n(r))return t(r,o);for(var a=r.length,i=e?a:-1,u=Object(r);(e?i--:++i<a)&&!1!==o(u[i],i,u););return r}}},5063:t=>{t.exports=function(t){return function(e,r,n){for(var o=-1,a=Object(e),i=n(e),u=i.length;u--;){var s=i[t?u:++o];if(!1===r(a[s],s,a))break}return e}}},8777:(t,e,r)=>{var n=r(852),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},7114:(t,e,r)=>{var n=r(8668),o=r(2908),a=r(4757);t.exports=function(t,e,r,i,u,s){var c=1&r,p=t.length,f=e.length;if(p!=f&&!(c&&f>p))return!1;var l=s.get(t),v=s.get(e);if(l&&v)return l==e&&v==t;var h=-1,d=!0,y=2&r?new n:void 0;for(s.set(t,e),s.set(e,t);++h<p;){var x=t[h],g=e[h];if(i)var b=c?i(g,x,h,e,t,s):i(x,g,h,t,e,s);if(void 0!==b){if(b)continue;d=!1;break}if(y){if(!o(e,(function(t,e){if(!a(y,e)&&(x===t||u(x,t,r,i,s)))return y.push(e)}))){d=!1;break}}else if(x!==g&&!u(x,g,r,i,s)){d=!1;break}}return s.delete(t),s.delete(e),d}},8351:(t,e,r)=>{var n=r(2705),o=r(1149),a=r(7813),i=r(7114),u=r(8776),s=r(1814),c=n?n.prototype:void 0,p=c?c.valueOf:void 0;t.exports=function(t,e,r,n,c,f,l){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!f(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var v=u;case"[object Set]":var h=1&n;if(v||(v=s),t.size!=e.size&&!h)return!1;var d=l.get(t);if(d)return d==e;n|=2,l.set(t,e);var y=i(v(t),v(e),n,c,f,l);return l.delete(t),y;case"[object Symbol]":if(p)return p.call(t)==p.call(e)}return!1}},6096:(t,e,r)=>{var n=r(8234),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,a,i,u){var s=1&r,c=n(t),p=c.length;if(p!=n(e).length&&!s)return!1;for(var f=p;f--;){var l=c[f];if(!(s?l in e:o.call(e,l)))return!1}var v=u.get(t),h=u.get(e);if(v&&h)return v==e&&h==t;var d=!0;u.set(t,e),u.set(e,t);for(var y=s;++f<p;){var x=t[l=c[f]],g=e[l];if(a)var b=s?a(g,x,l,e,t,u):a(x,g,l,t,e,u);if(!(void 0===b?x===g||i(x,g,r,a,u):b)){d=!1;break}y||(y="constructor"==l)}if(d&&!y){var _=t.constructor,j=e.constructor;_==j||!("constructor"in t)||!("constructor"in e)||"function"==typeof _&&_ instanceof _&&"function"==typeof j&&j instanceof j||(d=!1)}return u.delete(t),u.delete(e),d}},1957:(t,e,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=n},8234:(t,e,r)=>{var n=r(8866),o=r(9551),a=r(3674);t.exports=function(t){return n(t,a,o)}},5050:(t,e,r)=>{var n=r(7019);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},1499:(t,e,r)=>{var n=r(9162),o=r(3674);t.exports=function(t){for(var e=o(t),r=e.length;r--;){var a=e[r],i=t[a];e[r]=[a,i,n(i)]}return e}},852:(t,e,r)=>{var n=r(8458),o=r(7801);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},9607:(t,e,r)=>{var n=r(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=n?n.toStringTag:void 0;t.exports=function(t){var e=a.call(t,u),r=t[u];try{t[u]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(e?t[u]=r:delete t[u]),o}},9551:(t,e,r)=>{var n=r(4963),o=r(479),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,u=i?function(t){return null==t?[]:(t=Object(t),n(i(t),(function(e){return a.call(t,e)})))}:o;t.exports=u},4160:(t,e,r)=>{var n=r(8552),o=r(7071),a=r(3818),i=r(8525),u=r(577),s=r(4239),c=r(346),p="[object Map]",f="[object Promise]",l="[object Set]",v="[object WeakMap]",h="[object DataView]",d=c(n),y=c(o),x=c(a),g=c(i),b=c(u),_=s;(n&&_(new n(new ArrayBuffer(1)))!=h||o&&_(new o)!=p||a&&_(a.resolve())!=f||i&&_(new i)!=l||u&&_(new u)!=v)&&(_=function(t){var e=s(t),r="[object Object]"==e?t.constructor:void 0,n=r?c(r):"";if(n)switch(n){case d:return h;case y:return p;case x:return f;case g:return l;case b:return v}return e}),t.exports=_},7801:t=>{t.exports=function(t,e){return null==t?void 0:t[e]}},222:(t,e,r)=>{var n=r(1811),o=r(5694),a=r(1469),i=r(5776),u=r(1780),s=r(327);t.exports=function(t,e,r){for(var c=-1,p=(e=n(e,t)).length,f=!1;++c<p;){var l=s(e[c]);if(!(f=null!=t&&r(t,l)))break;t=t[l]}return f||++c!=p?f:!!(p=null==t?0:t.length)&&u(p)&&i(l,p)&&(a(t)||o(t))}},1789:(t,e,r)=>{var n=r(4536);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:t=>{t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},7667:(t,e,r)=>{var n=r(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},1327:(t,e,r)=>{var n=r(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},1866:(t,e,r)=>{var n=r(4536);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},7285:(t,e,r)=>{var n=r(2705),o=r(5694),a=r(1469),i=n?n.isConcatSpreadable:void 0;t.exports=function(t){return a(t)||o(t)||!!(i&&t&&t[i])}},5776:t=>{var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,r){var n=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&e.test(t))&&t>-1&&t%1==0&&t<r}},6612:(t,e,r)=>{var n=r(7813),o=r(8612),a=r(5776),i=r(3218);t.exports=function(t,e,r){if(!i(r))return!1;var u=typeof e;return!!("number"==u?o(r)&&a(e,r.length):"string"==u&&e in r)&&n(r[e],t)}},5403:(t,e,r)=>{var n=r(1469),o=r(3448),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||i.test(t)||!a.test(t)||null!=e&&t in Object(e)}},7019:t=>{t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},5346:(t,e,r)=>{var n,o=r(4429),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!a&&a in t}},5726:t=>{var e=Object.prototype;t.exports=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||e)}},9162:(t,e,r)=>{var n=r(3218);t.exports=function(t){return t==t&&!n(t)}},7040:t=>{t.exports=function(){this.__data__=[],this.size=0}},4125:(t,e,r)=>{var n=r(8470),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},2117:(t,e,r)=>{var n=r(8470);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},7529:(t,e,r)=>{var n=r(8470);t.exports=function(t){return n(this.__data__,t)>-1}},4705:(t,e,r)=>{var n=r(8470);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},4785:(t,e,r)=>{var n=r(1989),o=r(8407),a=r(7071);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},1285:(t,e,r)=>{var n=r(5050);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},6e3:(t,e,r)=>{var n=r(5050);t.exports=function(t){return n(this,t).get(t)}},9916:(t,e,r)=>{var n=r(5050);t.exports=function(t){return n(this,t).has(t)}},5265:(t,e,r)=>{var n=r(5050);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},8776:t=>{t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}},2634:t=>{t.exports=function(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}}},4523:(t,e,r)=>{var n=r(8306);t.exports=function(t){var e=n(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}},4536:(t,e,r)=>{var n=r(852)(Object,"create");t.exports=n},6916:(t,e,r)=>{var n=r(5569)(Object.keys,Object);t.exports=n},1167:(t,e,r)=>{t=r.nmd(t);var n=r(1957),o=e&&!e.nodeType&&e,a=o&&t&&!t.nodeType&&t,i=a&&a.exports===o&&n.process,u=function(){try{return a&&a.require&&a.require("util").types||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=u},2333:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5569:t=>{t.exports=function(t,e){return function(r){return t(e(r))}}},5357:(t,e,r)=>{var n=r(6874),o=Math.max;t.exports=function(t,e,r){return e=o(void 0===e?t.length-1:e,0),function(){for(var a=arguments,i=-1,u=o(a.length-e,0),s=Array(u);++i<u;)s[i]=a[e+i];i=-1;for(var c=Array(e+1);++i<e;)c[i]=a[i];return c[e]=r(s),n(t,this,c)}}},5639:(t,e,r)=>{var n=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},619:t=>{t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},2385:t=>{t.exports=function(t){return this.__data__.has(t)}},1814:t=>{t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}},61:(t,e,r)=>{var n=r(6560),o=r(1275)(n);t.exports=o},1275:t=>{var e=Date.now;t.exports=function(t){var r=0,n=0;return function(){var o=e(),a=16-(o-n);if(n=o,a>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}},7465:(t,e,r)=>{var n=r(8407);t.exports=function(){this.__data__=new n,this.size=0}},3779:t=>{t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},7599:t=>{t.exports=function(t){return this.__data__.get(t)}},4758:t=>{t.exports=function(t){return this.__data__.has(t)}},4309:(t,e,r)=>{var n=r(8407),o=r(7071),a=r(3369);t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var i=r.__data__;if(!o||i.length<199)return i.push([t,e]),this.size=++r.size,this;r=this.__data__=new a(i)}return r.set(t,e),this.size=r.size,this}},5514:(t,e,r)=>{var n=r(4523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=n((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,r,n,o){e.push(n?o.replace(a,"$1"):r||t)})),e}));t.exports=i},327:(t,e,r)=>{var n=r(3448);t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},346:t=>{var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},7990:t=>{var e=/\s/;t.exports=function(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}},5703:t=>{t.exports=function(t){return function(){return t}}},7813:t=>{t.exports=function(t,e){return t===e||t!=t&&e!=e}},3105:(t,e,r)=>{var n=r(4963),o=r(760),a=r(7206),i=r(1469);t.exports=function(t,e){return(i(t)?n:o)(t,a(e,3))}},7361:(t,e,r)=>{var n=r(7786);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},9095:(t,e,r)=>{var n=r(13),o=r(222);t.exports=function(t,e){return null!=t&&o(t,e,n)}},6557:t=>{t.exports=function(t){return t}},5694:(t,e,r)=>{var n=r(9454),o=r(7005),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,s=n(function(){return arguments}())?n:function(t){return o(t)&&i.call(t,"callee")&&!u.call(t,"callee")};t.exports=s},1469:t=>{var e=Array.isArray;t.exports=e},8612:(t,e,r)=>{var n=r(3560),o=r(1780);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},4144:(t,e,r)=>{t=r.nmd(t);var n=r(5639),o=r(5062),a=e&&!e.nodeType&&e,i=a&&t&&!t.nodeType&&t,u=i&&i.exports===a?n.Buffer:void 0,s=(u?u.isBuffer:void 0)||o;t.exports=s},3560:(t,e,r)=>{var n=r(4239),o=r(3218);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},1780:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},3448:(t,e,r)=>{var n=r(4239),o=r(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},6719:(t,e,r)=>{var n=r(8749),o=r(7518),a=r(1167),i=a&&a.isTypedArray,u=i?o(i):n;t.exports=u},3674:(t,e,r)=>{var n=r(4636),o=r(280),a=r(8612);t.exports=function(t){return a(t)?n(t):o(t)}},8659:(t,e,r)=>{var n=r(9787),o=r(6557);t.exports=function(t){return n(t,o)}},8306:(t,e,r)=>{var n=r(3369);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(o.Cache||n),r}o.Cache=n,t.exports=o},9601:(t,e,r)=>{var n=r(371),o=r(9152),a=r(5403),i=r(327);t.exports=function(t){return a(t)?n(i(t)):o(t)}},2571:(t,e,r)=>{var n=r(4259),o=r(6612),a=r(554);t.exports=function(t,e,r){var i=null==t?0:t.length;return i?(r&&"number"!=typeof r&&o(t,e,r)?(e=0,r=i):(e=null==e?0:a(e),r=void 0===r?i:a(r)),n(t,e,r)):[]}},9734:(t,e,r)=>{var n=r(1078),o=r(2689),a=r(5976),i=r(6612),u=a((function(t,e){if(null==t)return[];var r=e.length;return r>1&&i(t,e[0],e[1])?e=[]:r>2&&i(e[0],e[1],e[2])&&(e=[e[0]]),o(t,n(e,1),[])}));t.exports=u},479:t=>{t.exports=function(){return[]}},5062:t=>{t.exports=function(){return!1}},8601:(t,e,r)=>{var n=r(4841);t.exports=function(t){return t?Infinity===(t=n(t))||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},554:(t,e,r)=>{var n=r(8601);t.exports=function(t){var e=n(t),r=e%1;return e==e?r?e-r:e:0}},4841:(t,e,r)=>{var n=r(7561),o=r(3218),a=r(3448),i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(a(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var r=u.test(t);return r||s.test(t)?c(t.slice(2),r?2:8):i.test(t)?NaN:+t}},9833:(t,e,r)=>{var n=r(531);t.exports=function(t){return null==t?"":n(t)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,loaded:!1,exports:{}};return t[n](a,a.exports,r),a.loaded=!0,a.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var n={};return(()=>{"use strict";r.r(n),r.d(n,{genomeCoverage:()=>u,getCoverageChartOption:()=>O,meanCoverage:()=>i,median:()=>s,medianCoverage:()=>c});const t=r(2571),e=r(3105),o=r(9734),a=r(8659);function i(e,r,n,o){var i=t(e[o],r-1,n);return a(i)}function u(r,n,o,a,i){var u=t(r[a],n-1,o);return e(u,(function(t){return t>=i})).length/(o-n+1)*100}function s(t){var e=o(t),r=Math.floor(e.length/2);return e.length%2?e[r]:(e[r-1]+e[r])/2}function c(e,r,n,o){return s(t(e[o],r-1,n))}function p(t,e){var r=[];for(var[n,o]of t.entries())r.push({dimensions:[{name:"depth",type:"float"},{name:"position",type:"int"}],source:{position:e,depth:o}});return r}function f(t,e){var r=[];for(var[n,o]of t.entries())r.push({type:"value",gridIndex:n,min:1,max:e,axisLabel:{interval:"auto"}});return"True"!==amplicon&&"True"!==geneFeature||r.push({type:"value",gridIndex:t.length,min:1,max:e,axisLabel:{interval:"auto"}}),r}function l(t,e,r){var n=[];for(var[o,a]of t.entries())n.push({type:e,gridIndex:o,name:a,nameTextStyle:{fontStyle:"normal",fontWeight:"bolder"},nameLocation:"end",min:"log"===e?1:0,max:r,minorSplitLine:{show:!0}});return"True"!==amplicon&&"True"!==geneFeature||n.push({max:geneFeatureProperties.max_grid_height,gridIndex:t.length,show:!1}),n}function v(t){var e=[];for(var[r,n]of t.entries())e.push({type:"line",xAxisIndex:r,yAxisIndex:r,areaStyle:{color:"#666"},encode:{x:"position",y:"depth"},symbol:"none",datasetIndex:r,lineStyle:{color:"#666",opacity:0},large:!0});return e}const h={A:"#ea5e48",C:"#eaca48",G:"#6ad82b",T:"#2b87d8"};function d(t,e){var r=[];for(var[n,o]of t.entries())!function(t,n){r.push({type:"bar",xAxisIndex:t,yAxisIndex:t,data:Object.values(n).map((r=>[parseInt(r.POS),e[t][r.POS]])),barWidth:2,itemStyle:{color:function(t){var e=t.data[0],r=window.refSeq[e-1];return h.hasOwnProperty(r)?h[r]:"#333"}}})}(n,o);return r}function y(t){var e=[];if("True"===amplicon)for(var[r,n]of t.entries())e.push({type:"custom",xAxisIndex:r,yAxisIndex:r,renderItem:function(t,e){var r=e.coord([e.value(0),e.value(2)]),n=e.coord([e.value(1),1]),o=echarts.graphic.clipRectByRect({x:r[0],y:r[1],width:n[0]-r[0],height:n[1]-r[1]},{x:t.coordSys.x,y:t.coordSys.y,width:t.coordSys.width,height:t.coordSys.height});return o&&{type:"rect",shape:o,style:e.style({})}},label:{show:!1,position:"top",distance:25,rotate:60},labelLayout:{hideOverlap:!1},encode:{x:[0,1],y:2},data:ampliconData[n]});return e}var x=function(){};function g(t,e){var r,n,o,a,i,u,s=t.dataIndex,c=geneFeatureData[s];return o=e.coord([c.value.start,s]),0===s&&(x=o[1]),a=e.coord([c.value.end,s]),i=geneFeatureProperties.rec_items_height,u=a[0]-o[0],r=function(t,e,r,n,o,a){return"gene_feature"===a?1===o?[[t,e],[t+r-r/100,e],[t+r,e-n/2],[t+r-r/100,e-n],[t,e-n]]:[[t,e-n/2],[t+r/100,e],[t+r,e],[t+r,e-n],[t+r/100,e-n]]:"amplicon_feature"===a?[[t,e],[t+r,e],[t+r,e-n],[t,e-n]]:null}(o[0],x-i/2-c.value.level,u,i,c.value.strand,c.value.type),"gene_feature"===c.value.type?(n=1===c.value.strand?.7:-.7,{type:"polygon",shape:{points:echarts.graphic.clipPointsByRect(r,{x:t.coordSys.x,y:t.coordSys.y,width:t.coordSys.width,height:t.coordSys.height})},style:e.style({}),textContent:{type:"text",invisible:!showGeneLabel,style:{text:geneFeatureData[s].name,fill:geneFeatureData[s].itemStyle.color,fontStyle:"normal",fontSize:10,fontWeight:"bolder"}},textConfig:{position:"top",distance:20,rotation:n,local:!0}}):"amplicon_feature"===c.value.type?{type:"polygon",shape:{points:echarts.graphic.clipPointsByRect(r,{x:t.coordSys.x,y:t.coordSys.y,width:t.coordSys.width,height:t.coordSys.height})},style:e.style(),textContent:{},textConfig:{}}:null}function b(t,e,r){var n='<table class="'+_.defaultTo(r,"table")+'"><thead>';return n+=_.join(_.map(t,(function(t){return"<strong>"+t+"</strong>"})),""),n+="</thead><tbody>",(n+=_.join(_.map(e,(function(t){return"<tr>"+_.join(_.map(t,(function(t,e){return"<td "+(0===e?'scope="row"':"")+">"+t+"</td>"})),"")+"</tr>"})),""))+"</tbody></table>"}function j(t){var e,r,n=t.length+1,o=Object.keys(t).map((function(t){return e=1/n*100-6,2==n?(e=70,{show:!0,height:"70%"}):{show:!0,height:1/n*100-6+"%"}}));return o.forEach((function(t,e){r=e/n*100+4,t.top=e/n*100+4+"%",t.left="8%",t.right="8%"})),"True"!==amplicon&&"True"!==geneFeature||o.push({show:!0,height:geneFeatureProperties.grid_height,top:e+r+3+"%",left:"8%",right:"8%"}),o}function m(t,e,r){return[{trigger:"axis",enterable:!0,appendToBody:!0,renderMode:"html",showContent:!0,position:function(t,e,r,n,o){var a={top:5};return a[["left","right"][+(t[0]<o.viewSize[0]/2)]]=5,a},formatter:function(n){var o="",a=n[0],s=a.axisIndex;if(s>t.length)return o;var p=t[s],f=a.data[1],l=a.data[0],v=Math.floor(chart.getOption().dataZoom[0].startValue),h=Math.floor(chart.getOption().dataZoom[0].endValue),d=i(e,v,h,s).toFixed(2),y=c(e,v,h,s).toFixed(2),x=u(e,v,h,s,10).toFixed(2);o+="<h5>"+p+"</h5>";var g=[["Position",f.toLocaleString()],["Depth",l.toLocaleString()]];return n.length>1?Object.values(r[s]).forEach((t=>{if(t.POS===f)for(const[e,r]of Object.entries(t))"POS"!==e&&"sample"!==e&&g.push([e,r])})):g.push(["Sequence",window.refSeq[f-1]]),(o+=b(["Position Info",""],g,"table small"))+b(["Coverage View Stats",""],g=[["Range",v.toLocaleString()+" - "+h.toLocaleString()],["Mean Coverage",d+"X"],["Median Coverage",y+"X"],["Genome Coverage ( >= 10x)",x+"%"]],"table small")}}]}var w=function(){};function O(t,e,r){var n,o;return w=t.length,{title:{},dataset:p(e,positions),xAxis:f(t,refSeqLength),yAxis:l(t,"log",maxDepth),series:[...v(t),...d(r,e),...y(t),...(n=w,o=[],"True"!==amplicon&&"True"!==geneFeature||o.push({type:"custom",xAxisIndex:n,yAxisIndex:n,renderItem:g,labelLayout:{hideOverlap:!1},data:geneFeatureData,tooltip:{trigger:"item",enterable:!0,appendToBody:!0,renderMode:"html",borderRadius:6,borderWidth:2,showContent:"true",position:"top",textStyle:{fontSize:15,fontWeight:"bolder"},formatter:function(t){var e="",r=[["Range",t.value.start.toLocaleString()+" - "+t.value.end.toLocaleString()],["Length",(t.value.end-t.value.start+1).toLocaleString()],["Strand",t.value.strand]];return e+b([t.name,""],r,"table small")}}}),o)],tooltip:m(t,e,r),toolbox:{show:"true",feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{name:"wgscovplot"}}},dataZoom:[{type:"inside",filterMode:"none",xAxisIndex:[...Array(w+1).keys()],zoomLock:!1},{show:!0,filterMode:"none",xAxisIndex:[...Array(w+1).keys()],type:"slider",zoomLock:!1}],grid:j(t)}}})(),n})()}));