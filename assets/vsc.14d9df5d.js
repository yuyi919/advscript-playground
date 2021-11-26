import{a as e,m as t,b as r}from"./lsp.289540be.js";import{g as n,c as o}from"./parser.d5d33482.js";var i,s,a=function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},c=function(){function e(e,t,r,n){this._uri=e,this._languageId=t,this._version=r,this._content=n,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),r=this.offsetAt(e.end);return this._content.substring(t,r)}return this._content},e.prototype.update=function(t,r){for(var n=0,o=t;n<o.length;n++){var i=o[n];if(e.isIncremental(i)){var s=g(i.range),c=this.offsetAt(s.start),u=this.offsetAt(s.end);this._content=this._content.substring(0,c)+i.text+this._content.substring(u,this._content.length);var d=Math.max(s.start.line,0),h=Math.max(s.end.line,0),p=this._lineOffsets,f=l(i.text,!1,c);if(h-d===f.length)for(var m=0,v=f.length;m<v;m++)p[m+d+1]=f[m];else f.length<1e4?p.splice.apply(p,a([d+1,h-d],f,!1)):this._lineOffsets=p=p.slice(0,d+1).concat(f,p.slice(h+1));var D=i.text.length-(u-c);if(0!==D)for(m=d+1+f.length,v=p.length;m<v;m++)p[m]=p[m]+D}else{if(!e.isFull(i))throw new Error("Unknown change event received");this._content=i.text,this._lineOffsets=void 0}}this._version=r},e.prototype.getLineOffsets=function(){return void 0===this._lineOffsets&&(this._lineOffsets=l(this._content,!0)),this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),r=0,n=t.length;if(0===n)return{line:0,character:e};for(;r<n;){var o=Math.floor((r+n)/2);t[o]>e?n=o:r=o+1}var i=r-1;return{line:i,character:e-t[i]}},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var r=t[e.line],n=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(r+e.character,n),r)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e.isIncremental=function(e){var t=e;return null!=t&&"string"==typeof t.text&&void 0!==t.range&&(void 0===t.rangeLength||"number"==typeof t.rangeLength)},e.isFull=function(e){var t=e;return null!=t&&"string"==typeof t.text&&void 0===t.range&&void 0===t.rangeLength},e}();function u(e,t){if(e.length<=1)return e;var r=e.length/2|0,n=e.slice(0,r),o=e.slice(r);u(n,t),u(o,t);for(var i=0,s=0,a=0;i<n.length&&s<o.length;){var c=t(n[i],o[s]);e[a++]=c<=0?n[i++]:o[s++]}for(;i<n.length;)e[a++]=n[i++];for(;s<o.length;)e[a++]=o[s++];return e}function l(e,t,r){void 0===r&&(r=0);for(var n=t?[r]:[],o=0;o<e.length;o++){var i=e.charCodeAt(o);13!==i&&10!==i||(13===i&&o+1<e.length&&10===e.charCodeAt(o+1)&&o++,n.push(r+o+1))}return n}function g(e){var t=e.start,r=e.end;return t.line>r.line||t.line===r.line&&t.character>r.character?{start:r,end:t}:e}function d(e){var t=g(e.range);return t!==e.range?{newText:e.newText,range:t}:e}(s=i||(i={})).create=function(e,t,r,n){return new c(e,t,r,n)},s.update=function(e,t,r){if(e instanceof c)return e.update(t,r),e;throw new Error("TextDocument.update: document must be created by TextDocument.create")},s.applyEdits=function(e,t){for(var r=e.getText(),n=0,o=[],i=0,s=u(t.map(d),(function(e,t){var r=e.range.start.line-t.range.start.line;return 0===r?e.range.start.character-t.range.start.character:r}));i<s.length;i++){var a=s[i],c=e.offsetAt(a.range.start);if(c<n)throw new Error("Overlapping edit");c>n&&o.push(r.substring(n,c)),a.newText.length&&o.push(a.newText),n=e.offsetAt(a.range.end)}return o.push(r.substr(n)),o.join("")};var h,p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",get TextDocument(){return i}}),f={};h=(()=>{var e={470:e=>{function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",o=0,i=-1,s=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else{if(47===r)break;r=47}if(47===r){if(i===a-1||1===s);else if(i!==a-1&&2===s){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var c=n.lastIndexOf("/");if(c!==n.length-1){-1===c?(n="",o=0):o=(n=n.slice(0,c)).length-1-n.lastIndexOf("/"),i=a,s=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=a,s=0;continue}t&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),o=a-i-1;i=a,s=0}else 46===r&&-1!==s?++s:s=-1}return n}var n={resolve:function(){for(var e,n="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var s;i>=0?s=arguments[i]:(void 0===e&&(e=process.cwd()),s=e),t(s),0!==s.length&&(n=s+"/"+n,o=47===s.charCodeAt(0))}return n=r(n,!o),o?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&o&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var o=arguments[r];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=n.resolve(e))===(r=n.resolve(r)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var i=e.length,s=i-o,a=1;a<r.length&&47===r.charCodeAt(a);++a);for(var c=r.length-a,u=s<c?s:c,l=-1,g=0;g<=u;++g){if(g===u){if(c>u){if(47===r.charCodeAt(a+g))return r.slice(a+g+1);if(0===g)return r.slice(a+g)}else s>u&&(47===e.charCodeAt(o+g)?l=g:0===g&&(l=0));break}var d=e.charCodeAt(o+g);if(d!==r.charCodeAt(a+g))break;47===d&&(l=g)}var h="";for(g=o+l+1;g<=i;++g)g!==i&&47!==e.charCodeAt(g)||(0===h.length?h+="..":h+="/..");return h.length>0?h+r.slice(a+l):(a+=l,47===r.charCodeAt(a)&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,o=-1,i=!0,s=e.length-1;s>=1;--s)if(47===(r=e.charCodeAt(s))){if(!i){o=s;break}}else i=!1;return-1===o?n?"/":".":n&&1===o?"//":e.slice(0,o)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,o=0,i=-1,s=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var a=r.length-1,c=-1;for(n=e.length-1;n>=0;--n){var u=e.charCodeAt(n);if(47===u){if(!s){o=n+1;break}}else-1===c&&(s=!1,c=n+1),a>=0&&(u===r.charCodeAt(a)?-1==--a&&(i=n):(a=-1,i=c))}return o===i?i=c:-1===i&&(i=e.length),e.slice(o,i)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!s){o=n+1;break}}else-1===i&&(s=!1,i=n+1);return-1===i?"":e.slice(o,i)},extname:function(e){t(e);for(var r=-1,n=0,o=-1,i=!0,s=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===o&&(i=!1,o=a+1),46===c?-1===r?r=a:1!==s&&(s=1):-1!==r&&(s=-1);else if(!i){n=a+1;break}}return-1===r||-1===o||0===s||1===s&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return r=(t=e).dir||t.root,n=t.base||(t.name||"")+(t.ext||""),r?r===t.root?r+n:r+"/"+n:n;var t,r,n},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,o=e.charCodeAt(0),i=47===o;i?(r.root="/",n=1):n=0;for(var s=-1,a=0,c=-1,u=!0,l=e.length-1,g=0;l>=n;--l)if(47!==(o=e.charCodeAt(l)))-1===c&&(u=!1,c=l+1),46===o?-1===s?s=l:1!==g&&(g=1):-1!==s&&(g=-1);else if(!u){a=l+1;break}return-1===s||-1===c||0===g||1===g&&s===c-1&&s===a+1?-1!==c&&(r.base=r.name=0===a&&i?e.slice(1,c):e.slice(a,c)):(0===a&&i?(r.name=e.slice(1,s),r.base=e.slice(1,c)):(r.name=e.slice(a,s),r.base=e.slice(a,c)),r.ext=e.slice(s,c)),a>0?r.dir=e.slice(0,a-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n},447:(e,t,r)=>{var n;if(r.r(t),r.d(t,{URI:()=>p,Utils:()=>x}),"object"==typeof process)n="win32"===process.platform;else if("object"==typeof navigator){var o=navigator.userAgent;n=o.indexOf("Windows")>=0}var i,s,a=(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),c=/^\w[\w\d+.-]*$/,u=/^\//,l=/^\/\//,g="",d="/",h=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,p=function(){function e(e,t,r,n,o,i){var s,a;void 0===i&&(i=!1),"object"==typeof e?(this.scheme=e.scheme||g,this.authority=e.authority||g,this.path=e.path||g,this.query=e.query||g,this.fragment=e.fragment||g):(this.scheme=(a=i,(s=e)||a?s:"file"),this.authority=t||g,this.path=function(e,t){switch(e){case"https":case"http":case"file":t?t[0]!==d&&(t=d+t):t=d}return t}(this.scheme,r||g),this.query=n||g,this.fragment=o||g,function(e,t){if(!e.scheme&&t)throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "'+e.authority+'", path: "'+e.path+'", query: "'+e.query+'", fragment: "'+e.fragment+'"}');if(e.scheme&&!c.test(e.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(e.path)if(e.authority){if(!u.test(e.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(l.test(e.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}(this,i))}return e.isUri=function(t){return t instanceof e||!!t&&"string"==typeof t.authority&&"string"==typeof t.fragment&&"string"==typeof t.path&&"string"==typeof t.query&&"string"==typeof t.scheme&&"function"==typeof t.fsPath&&"function"==typeof t.with&&"function"==typeof t.toString},Object.defineProperty(e.prototype,"fsPath",{get:function(){return b(this,!1)},enumerable:!1,configurable:!0}),e.prototype.with=function(e){if(!e)return this;var t=e.scheme,r=e.authority,n=e.path,o=e.query,i=e.fragment;return void 0===t?t=this.scheme:null===t&&(t=g),void 0===r?r=this.authority:null===r&&(r=g),void 0===n?n=this.path:null===n&&(n=g),void 0===o?o=this.query:null===o&&(o=g),void 0===i?i=this.fragment:null===i&&(i=g),t===this.scheme&&r===this.authority&&n===this.path&&o===this.query&&i===this.fragment?this:new m(t,r,n,o,i)},e.parse=function(e,t){void 0===t&&(t=!1);var r=h.exec(e);return r?new m(r[2]||g,P(r[4]||g),P(r[5]||g),P(r[7]||g),P(r[9]||g),t):new m(g,g,g,g,g)},e.file=function(e){var t=g;if(n&&(e=e.replace(/\\/g,d)),e[0]===d&&e[1]===d){var r=e.indexOf(d,2);-1===r?(t=e.substring(2),e=d):(t=e.substring(2,r),e=e.substring(r)||d)}return new m("file",t,e,g,g)},e.from=function(e){return new m(e.scheme,e.authority,e.path,e.query,e.fragment)},e.prototype.toString=function(e){return void 0===e&&(e=!1),C(this,e)},e.prototype.toJSON=function(){return this},e.revive=function(t){if(t){if(t instanceof e)return t;var r=new m(t);return r._formatted=t.external,r._fsPath=t._sep===f?t.fsPath:null,r}return t},e}(),f=n?1:void 0,m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._formatted=null,t._fsPath=null,t}return a(t,e),Object.defineProperty(t.prototype,"fsPath",{get:function(){return this._fsPath||(this._fsPath=b(this,!1)),this._fsPath},enumerable:!1,configurable:!0}),t.prototype.toString=function(e){return void 0===e&&(e=!1),e?C(this,!0):(this._formatted||(this._formatted=C(this,!1)),this._formatted)},t.prototype.toJSON=function(){var e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=f),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e},t}(p),v=((s={})[58]="%3A",s[47]="%2F",s[63]="%3F",s[35]="%23",s[91]="%5B",s[93]="%5D",s[64]="%40",s[33]="%21",s[36]="%24",s[38]="%26",s[39]="%27",s[40]="%28",s[41]="%29",s[42]="%2A",s[43]="%2B",s[44]="%2C",s[59]="%3B",s[61]="%3D",s[32]="%20",s);function D(e,t){for(var r=void 0,n=-1,o=0;o<e.length;o++){var i=e.charCodeAt(o);if(i>=97&&i<=122||i>=65&&i<=90||i>=48&&i<=57||45===i||46===i||95===i||126===i||t&&47===i)-1!==n&&(r+=encodeURIComponent(e.substring(n,o)),n=-1),void 0!==r&&(r+=e.charAt(o));else{void 0===r&&(r=e.substr(0,o));var s=v[i];void 0!==s?(-1!==n&&(r+=encodeURIComponent(e.substring(n,o)),n=-1),r+=s):-1===n&&(n=o)}}return-1!==n&&(r+=encodeURIComponent(e.substring(n))),void 0!==r?r:e}function y(e){for(var t=void 0,r=0;r<e.length;r++){var n=e.charCodeAt(r);35===n||63===n?(void 0===t&&(t=e.substr(0,r)),t+=v[n]):void 0!==t&&(t+=e[r])}return void 0!==t?t:e}function b(e,t){var r;return r=e.authority&&e.path.length>1&&"file"===e.scheme?"//"+e.authority+e.path:47===e.path.charCodeAt(0)&&(e.path.charCodeAt(1)>=65&&e.path.charCodeAt(1)<=90||e.path.charCodeAt(1)>=97&&e.path.charCodeAt(1)<=122)&&58===e.path.charCodeAt(2)?t?e.path.substr(1):e.path[1].toLowerCase()+e.path.substr(2):e.path,n&&(r=r.replace(/\//g,"\\")),r}function C(e,t){var r=t?y:D,n="",o=e.scheme,i=e.authority,s=e.path,a=e.query,c=e.fragment;if(o&&(n+=o,n+=":"),(i||"file"===o)&&(n+=d,n+=d),i){var u=i.indexOf("@");if(-1!==u){var l=i.substr(0,u);i=i.substr(u+1),-1===(u=l.indexOf(":"))?n+=r(l,!1):(n+=r(l.substr(0,u),!1),n+=":",n+=r(l.substr(u+1),!1)),n+="@"}-1===(u=(i=i.toLowerCase()).indexOf(":"))?n+=r(i,!1):(n+=r(i.substr(0,u),!1),n+=i.substr(u))}if(s){if(s.length>=3&&47===s.charCodeAt(0)&&58===s.charCodeAt(2))(g=s.charCodeAt(1))>=65&&g<=90&&(s="/"+String.fromCharCode(g+32)+":"+s.substr(3));else if(s.length>=2&&58===s.charCodeAt(1)){var g;(g=s.charCodeAt(0))>=65&&g<=90&&(s=String.fromCharCode(g+32)+":"+s.substr(2))}n+=r(s,!0)}return a&&(n+="?",n+=r(a,!1)),c&&(n+="#",n+=t?c:D(c,!1)),n}function w(e){try{return decodeURIComponent(e)}catch(t){return e.length>3?e.substr(0,3)+w(e.substr(3)):e}}var S=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function P(e){return e.match(S)?e.replace(S,(function(e){return w(e)})):e}var x,E,O=r(470),T=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)n[o]=i[s];return n},k=O.posix||O;(E=x||(x={})).joinPath=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return e.with({path:k.join.apply(k,T([e.path],t))})},E.resolvePath=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=e.path||"/";return e.with({path:k.resolve.apply(k,T([n],t))})},E.dirname=function(e){var t=k.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)?e:e.with({path:t})},E.basename=function(e){return k.basename(e.path)},E.extname=function(e){return k.extname(e.path)}}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(447)})();const{URI:m,Utils:v}=h;var D=n(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",URI:m,Utils:v})),y={},b={},C=n(p);!function(n){var i=o&&o.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),s=o&&o.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(n,"__esModule",{value:!0}),n.SemanticTokens=n.SelectionRange=n.CodeAction=n.DocumentSymbol=n.DocumentFilter=n.FoldingRange=n.ColorPresentation=n.ColorInformation=n.TextDocumentContentChangeEvent=n.TextDocumentSaveReason=n.DocumentLink=n.WorkspaceEdit=n.TextEdit=n.CodeLens=n.Command=n.SymbolInformation=n.DocumentHighlight=n.Location=n.Hover=n.CompletionList=n.CompletionItem=n.Diagnostic=n.MessageType=n.DocumentSelector=n.ConfigurationTarget=n.DocumentIdentifier=n.VsCodeDiagnosticSeverity=n.SignatureHelpTriggerKind=n.isDocumentSelector=n.Services=n.TextDocument=n.Emitter=n.Event=n.CancellationToken=n.Disposable=void 0;const a=t;Object.defineProperty(n,"DocumentSelector",{enumerable:!0,get:function(){return a.DocumentSelector}}),Object.defineProperty(n,"MessageType",{enumerable:!0,get:function(){return a.MessageType}}),Object.defineProperty(n,"Diagnostic",{enumerable:!0,get:function(){return a.Diagnostic}}),Object.defineProperty(n,"CompletionItem",{enumerable:!0,get:function(){return a.CompletionItem}}),Object.defineProperty(n,"CompletionList",{enumerable:!0,get:function(){return a.CompletionList}}),Object.defineProperty(n,"Hover",{enumerable:!0,get:function(){return a.Hover}}),Object.defineProperty(n,"Location",{enumerable:!0,get:function(){return a.Location}}),Object.defineProperty(n,"DocumentHighlight",{enumerable:!0,get:function(){return a.DocumentHighlight}}),Object.defineProperty(n,"SymbolInformation",{enumerable:!0,get:function(){return a.SymbolInformation}}),Object.defineProperty(n,"Command",{enumerable:!0,get:function(){return a.Command}}),Object.defineProperty(n,"CodeLens",{enumerable:!0,get:function(){return a.CodeLens}}),Object.defineProperty(n,"TextEdit",{enumerable:!0,get:function(){return a.TextEdit}}),Object.defineProperty(n,"WorkspaceEdit",{enumerable:!0,get:function(){return a.WorkspaceEdit}}),Object.defineProperty(n,"DocumentLink",{enumerable:!0,get:function(){return a.DocumentLink}}),Object.defineProperty(n,"TextDocumentSaveReason",{enumerable:!0,get:function(){return a.TextDocumentSaveReason}}),Object.defineProperty(n,"TextDocumentContentChangeEvent",{enumerable:!0,get:function(){return a.TextDocumentContentChangeEvent}}),Object.defineProperty(n,"ColorInformation",{enumerable:!0,get:function(){return a.ColorInformation}}),Object.defineProperty(n,"ColorPresentation",{enumerable:!0,get:function(){return a.ColorPresentation}}),Object.defineProperty(n,"FoldingRange",{enumerable:!0,get:function(){return a.FoldingRange}}),Object.defineProperty(n,"DocumentFilter",{enumerable:!0,get:function(){return a.DocumentFilter}}),Object.defineProperty(n,"DocumentSymbol",{enumerable:!0,get:function(){return a.DocumentSymbol}}),Object.defineProperty(n,"CodeAction",{enumerable:!0,get:function(){return a.CodeAction}}),Object.defineProperty(n,"SelectionRange",{enumerable:!0,get:function(){return a.SelectionRange}}),Object.defineProperty(n,"SemanticTokens",{enumerable:!0,get:function(){return a.SemanticTokens}});const c=C;Object.defineProperty(n,"TextDocument",{enumerable:!0,get:function(){return c.TextDocument}});const u=r;var l,g,d;Object.defineProperty(n,"Disposable",{enumerable:!0,get:function(){return u.Disposable}}),Object.defineProperty(n,"CancellationToken",{enumerable:!0,get:function(){return u.CancellationToken}}),Object.defineProperty(n,"Event",{enumerable:!0,get:function(){return u.Event}}),Object.defineProperty(n,"Emitter",{enumerable:!0,get:function(){return u.Emitter}}),s(e,n),function(e){const t=globalThis,r=Symbol.for("Services");e.get=()=>{const e=t[r];if(!e)throw new Error("Language Client services has not been installed");return e},e.install=function(e){return t[r]&&console.warn("Language Client services have been overridden"),t[r]=e,u.Disposable.create((()=>t[r]=void 0))}}(n.Services||(n.Services={})),n.isDocumentSelector=function(e){return!(!e||!Array.isArray(e))&&e.every((e=>"string"==typeof e||a.DocumentFilter.is(e)))},(l=n.SignatureHelpTriggerKind||(n.SignatureHelpTriggerKind={}))[l.Invoke=1]="Invoke",l[l.TriggerCharacter=2]="TriggerCharacter",l[l.ContentChange=3]="ContentChange",(g=n.VsCodeDiagnosticSeverity||(n.VsCodeDiagnosticSeverity={}))[g.Error=0]="Error",g[g.Warning=1]="Warning",g[g.Information=2]="Information",g[g.Hint=3]="Hint",(n.DocumentIdentifier||(n.DocumentIdentifier={})).is=function(e){return!!e&&"uri"in e&&"languageId"in e},(d=n.ConfigurationTarget||(n.ConfigurationTarget={}))[d.Global=1]="Global",d[d.Workspace=2]="Workspace",d[d.WorkspaceFolder=3]="WorkspaceFolder"}(b),function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DisposableCollection=e.Disposable=void 0;const t=b;Object.defineProperty(e,"Disposable",{enumerable:!0,get:function(){return t.Disposable}});e.DisposableCollection=class{constructor(){this.disposables=[]}dispose(){for(;0!==this.disposables.length;)this.disposables.pop().dispose()}push(e){const t=this.disposables;return t.push(e),{dispose(){const r=t.indexOf(e);-1!==r&&t.splice(r,1)}}}}}(y),Object.defineProperty(f,"__esModule",{value:!0}),f.createVSCodeApi=void 0;const w=k,S=t,P=D,x=y,E=b,O=b;f.createVSCodeApi=function(e){const t=()=>{throw new Error("unsupported")},r=class extends P.URI{static joinPath(e,...r){return t()}};class n{constructor(e){this.value=e,this.contains=t,this.intersects=t}append(e){return new n(this.value?this.value+n.sep+e:e)}}n.sep=".",n.Empty=new n(""),n.QuickFix=new n("quickfix"),n.Refactor=new n("refactor"),n.RefactorExtract=n.Refactor.append("extract"),n.RefactorInline=n.Refactor.append("inline"),n.RefactorRewrite=n.Refactor.append("rewrite"),n.Source=new n("source"),n.SourceOrganizeImports=n.Source.append("organizeImports"),n.SourceFixAll=n.Source.append("fixAll");const o={fs:new class{isWritableFileSystem(e){return!1}stat(e){throw new Error("Method not implemented.")}readDirectory(e){return Promise.resolve([])}createDirectory(e){return Promise.resolve()}readFile(e){return Promise.resolve(new Uint8Array(0))}writeFile(e,t){return Promise.resolve()}delete(e,t){return Promise.resolve()}rename(e,t,r){return Promise.resolve()}copy(e,t,r){return Promise.resolve()}},workspaceFile:void 0,createFileSystemWatcher(t,r,n,o){const i=e();if("string"!=typeof t)throw new Error("unsupported");if(i.workspace.createFileSystemWatcher){const e=i.workspace.createFileSystemWatcher(t,r,n,o);return Object.assign(e,{ignoreCreateEvents:!!r,ignoreChangeEvents:!!n,ignoreDeleteEvents:!!o})}return{ignoreCreateEvents:!!r,ignoreChangeEvents:!!n,ignoreDeleteEvents:!!o,onDidCreate:O.Event.None,onDidChange:O.Event.None,onDidDelete:O.Event.None,dispose:()=>{}}},applyEdit:async t=>{const r=e();if(O.WorkspaceEdit.is(t))return r.workspace.applyEdit(t);throw new Error("unsupported")},getConfiguration(r,n){const{workspace:o}=e(),i=o.configurations?o.configurations.getConfiguration(r,n?n.toString():void 0):void 0,s={get:(e,t)=>i?i.get(e,t):t,has:e=>!!i&&i.has(e),inspect:t,update:t};return Object.assign(s,{toJSON:()=>i?i.toJSON():void 0})},get onDidChangeConfiguration(){const t=e();return t.workspace.configurations?t.workspace.configurations.onDidChangeConfiguration:O.Event.None},get workspaceFolders(){const t=e();if("workspaceFolders"in t.workspace)return t.workspace.workspaceFolders;const n=t.workspace.rootUri;if(!n)return;const o=r.parse(n);return[{uri:o,index:0,name:o.toString()}]},get onDidChangeWorkspaceFolders(){return e().workspace.onDidChangeWorkspaceFolders||O.Event.None},get textDocuments(){return e().workspace.textDocuments},get onDidOpenTextDocument(){return e().workspace.onDidOpenTextDocument},get onDidCloseTextDocument(){return e().workspace.onDidCloseTextDocument},get onDidChangeTextDocument(){const t=e();return(e,r,n)=>t.workspace.onDidChangeTextDocument((({textDocument:t,contentChanges:n})=>{e.bind(r)({document:t,contentChanges:n})}),void 0,n)},get onWillSaveTextDocument(){const t=e().workspace.onWillSaveTextDocument;return t?(e,r,n)=>t((({textDocument:t,reason:n,waitUntil:o})=>{e.bind(r)({document:t,reason:n,waitUntil:e=>{o&&o(e)}})}),void 0,n):O.Event.None},get onDidSaveTextDocument(){return e().workspace.onDidSaveTextDocument||O.Event.None},get onWillCreateFiles(){return O.Event.None},get onDidCreateFiles(){return O.Event.None},get onWillDeleteFiles(){return O.Event.None},get onDidDeleteFiles(){return O.Event.None},get onWillRenameFiles(){return O.Event.None},get onDidRenameFiles(){return O.Event.None},getWorkspaceFolder:t,asRelativePath:t,updateWorkspaceFolders:t,findFiles:t,saveAll:t,openTextDocument:t,registerTextDocumentContentProvider:t,registerTaskProvider:t,registerFileSystemProvider:t,rootPath:void 0,name:void 0};class i{constructor(t){this.name=t||"default",this.services=e(),this.collection=this.services.languages.createDiagnosticCollection?this.services.languages.createDiagnosticCollection(t):void 0}entries(){}set(e,t){e instanceof P.URI!==void 0?this.collection&&(t?this.collection.set(e.toString(),t.map((e=>{return{range:e.range,code:(t=e.code,null!=t&&"object"==typeof t?t.value:t),source:e.source,message:e.message,tags:e.tags,relatedInformation:void 0,severity:e.severity};var t}))):this.collection.set(e.toString(),[])):e.forEach((e=>{this.set(e[0],e[1])}))}dispose(){this.collection&&this.collection.dispose()}delete(e){}clear(){}forEach(e,t){}get(e){}has(e){return!1}}const s={match(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));if(!O.DocumentIdentifier.is(r))throw new Error("unexpected document: "+JSON.stringify(r));return e().languages.match(t,r)?1:0},registerCallHierarchyProvider:(e,t)=>({dispose(){}}),createDiagnosticCollection:e=>new i(e),registerCompletionItemProvider(t,r,...n){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:o}=e();if(!o.registerCompletionItemProvider)return x.Disposable.create((()=>{}));const i=r.resolveCompletionItem;return o.registerCompletionItemProvider(t,{provideCompletionItems:({textDocument:e,position:t,context:n},o)=>r.provideCompletionItems(e,t,o,n||{triggerKind:O.CompletionTriggerKind.Invoked}),resolveCompletionItem:i?(e,t)=>i(e,t):void 0},...n)},registerCodeActionsProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerCodeActionsProvider?n.registerCodeActionsProvider(t,{provideCodeActions:({textDocument:e,range:t,context:n},o)=>r.provideCodeActions(e,t,n,o)}):x.Disposable.create((()=>{}))},registerCodeLensProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();if(!n.registerCodeLensProvider)return x.Disposable.create((()=>{}));const o=r.resolveCodeLens;return n.registerCodeLensProvider(t,{provideCodeLenses:({textDocument:e},t)=>r.provideCodeLenses(e,t),resolveCodeLens:o?(e,t)=>o(e,t):void 0})},registerDefinitionProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerDefinitionProvider?n.registerDefinitionProvider(t,{provideDefinition:({textDocument:e,position:t},n)=>r.provideDefinition(e,t,n)}):x.Disposable.create((()=>{}))},registerImplementationProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerImplementationProvider?n.registerImplementationProvider(t,{provideImplementation:({textDocument:e,position:t},n)=>r.provideImplementation(e,t,n)}):x.Disposable.create((()=>{}))},registerTypeDefinitionProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerTypeDefinitionProvider?n.registerTypeDefinitionProvider(t,{provideTypeDefinition:({textDocument:e,position:t},n)=>r.provideTypeDefinition(e,t,n)}):x.Disposable.create((()=>{}))},registerDeclarationProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerDeclarationProvider?n.registerDeclarationProvider(t,{provideDeclaration:({textDocument:e,position:t},n)=>r.provideDeclaration(e,t,n)}):x.Disposable.create((()=>{}))},registerHoverProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerHoverProvider?n.registerHoverProvider(t,{provideHover:({textDocument:e,position:t},n)=>r.provideHover(e,t,n)}):x.Disposable.create((()=>{}))},registerDocumentHighlightProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerDocumentHighlightProvider?n.registerDocumentHighlightProvider(t,{provideDocumentHighlights:({textDocument:e,position:t},n)=>r.provideDocumentHighlights(e,t,n)}):x.Disposable.create((()=>{}))},registerDocumentSymbolProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerDocumentSymbolProvider?n.registerDocumentSymbolProvider(t,{provideDocumentSymbols:({textDocument:e},t)=>r.provideDocumentSymbols(e,t)}):x.Disposable.create((()=>{}))},registerWorkspaceSymbolProvider(t){const{languages:r}=e();return r.registerWorkspaceSymbolProvider?r.registerWorkspaceSymbolProvider({provideWorkspaceSymbols:({query:e},r)=>t.provideWorkspaceSymbols(e,r)}):x.Disposable.create((()=>{}))},registerReferenceProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerReferenceProvider?n.registerReferenceProvider(t,{provideReferences:({textDocument:e,position:t,context:n},o)=>r.provideReferences(e,t,n,o)}):x.Disposable.create((()=>{}))},registerRenameProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerRenameProvider?n.registerRenameProvider(t,{provideRenameEdits:({textDocument:e,position:t,newName:n},o)=>r.provideRenameEdits(e,t,n,o)}):x.Disposable.create((()=>{}))},registerDocumentFormattingEditProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerDocumentFormattingEditProvider?n.registerDocumentFormattingEditProvider(t,{provideDocumentFormattingEdits:({textDocument:e,options:t},n)=>r.provideDocumentFormattingEdits(e,t,n)}):x.Disposable.create((()=>{}))},registerDocumentRangeFormattingEditProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerDocumentRangeFormattingEditProvider?n.registerDocumentRangeFormattingEditProvider(t,{provideDocumentRangeFormattingEdits:({textDocument:e,range:t,options:n},o)=>r.provideDocumentRangeFormattingEdits(e,t,n,o)}):x.Disposable.create((()=>{}))},registerOnTypeFormattingEditProvider(t,r,n,...o){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:i}=e();return i.registerOnTypeFormattingEditProvider?i.registerOnTypeFormattingEditProvider(t,{provideOnTypeFormattingEdits:({textDocument:e,position:t,ch:n,options:o},i)=>r.provideOnTypeFormattingEdits(e,t,n,o,i)},n,...o):x.Disposable.create((()=>{}))},registerSignatureHelpProvider(t,r,n,...o){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:i}=e();if(!i.registerSignatureHelpProvider)return x.Disposable.create((()=>{}));let s,a;return"string"==typeof n?s=[n,...o]:n&&(s=n.triggerCharacters,a=n.retriggerCharacters),i.registerSignatureHelpProvider(t,{triggerCharacters:s,retriggerCharacters:a,provideSignatureHelp:({textDocument:e,position:t},n,o)=>r.provideSignatureHelp(e,t,n,o)})},registerDocumentLinkProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();if(!n.registerDocumentLinkProvider)return x.Disposable.create((()=>{}));const o=r.resolveDocumentLink;return n.registerDocumentLinkProvider(t,{provideDocumentLinks:({textDocument:e},t)=>r.provideDocumentLinks(e,t),resolveDocumentLink:o?(e,t)=>o(e,t):void 0})},registerColorProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerColorProvider?n.registerColorProvider(t,{provideDocumentColors:({textDocument:e},t)=>r.provideDocumentColors(e,t),provideColorPresentations:({textDocument:e,color:t,range:n},o)=>r.provideColorPresentations(t,{document:e,range:n},o)}):x.Disposable.create((()=>{}))},registerFoldingRangeProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerFoldingRangeProvider?n.registerFoldingRangeProvider(t,{provideFoldingRanges:({textDocument:e},t)=>r.provideFoldingRanges(e,{},t)}):x.Disposable.create((()=>{}))},registerSelectionRangeProvider(t,r){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:n}=e();return n.registerSelectionRangeProvider?n.registerSelectionRangeProvider(t,{provideSelectionRanges:({textDocument:e,positions:t},n)=>r.provideSelectionRanges(e,t,n)}):x.Disposable.create((()=>{}))},registerEvaluatableExpressionProvider:t,registerDocumentSemanticTokensProvider(t,r,n){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:o}=e();return o.registerDocumentSemanticTokensProvider?o.registerDocumentSemanticTokensProvider(t,{provideDocumentSemanticTokens:({textDocument:e},t)=>r.provideDocumentSemanticTokens(e,t),provideDocumentSemanticTokensEdits:r.provideDocumentSemanticTokensEdits&&(({textDocument:e,previousResultId:t},n)=>r.provideDocumentSemanticTokensEdits(e,t,n))},n):x.Disposable.create((()=>{}))},registerDocumentRangeSemanticTokensProvider(t,r,n){if(!O.isDocumentSelector(t))throw new Error("unexpected selector: "+JSON.stringify(t));const{languages:o}=e();return o.registerDocumentRangeSemanticTokensProvider?o.registerDocumentRangeSemanticTokensProvider(t,{provideDocumentRangeSemanticTokens:({textDocument:e,range:t},n)=>r.provideDocumentRangeSemanticTokens(e,t,n)},n):x.Disposable.create((()=>{}))},getLanguages:t,setTextDocumentLanguage:t,getDiagnostics:t,setLanguageConfiguration:t,onDidChangeDiagnostics:t,registerLinkedEditingRangeProvider:t};function a(t,r,...n){if("string"!=typeof r)throw new Error("unexpected message: "+JSON.stringify(r));const o=r;if(void 0!==n&&!Array.isArray(n))throw new Error("unexpected actions: "+JSON.stringify(n));const i=n||[],{window:s}=e();return s?s.showMessage(t,o,...i):Promise.resolve(void 0)}const c={showInformationMessage:a.bind(void 0,O.MessageType.Info),showWarningMessage:a.bind(void 0,O.MessageType.Warning),showErrorMessage:a.bind(void 0,O.MessageType.Error),createOutputChannel(r){const{window:n}=e(),o=n?n.createOutputChannel:void 0,i=o?o.bind(n)(r):void 0;return{name:r,append:i?i.append.bind(i):()=>{},appendLine:i?i.appendLine.bind(i):()=>{},clear:t,show:e=>{if(void 0!==e&&"boolean"!=typeof e)throw new Error("unexpected preserveFocus argument: "+JSON.stringify(e,void 0,4));return i?i.show(e):()=>{}},hide:t,dispose:i?i.dispose.bind(i):()=>{}}},withProgress:(t,r)=>{const{window:n}=e();return n&&n.withProgress?n.withProgress(t,r):r({report:()=>{}},(new w.CancellationTokenSource).token)},showTextDocument:t,createTextEditorDecorationType:t,showQuickPick:t,showWorkspaceFolderPick:t,showOpenDialog:t,showSaveDialog:t,showInputBox:t,createWebviewPanel:t,setStatusBarMessage:t,withScmProgress:t,createStatusBarItem:t,createTerminal:t,registerTreeDataProvider:t,createTreeView:t,registerWebviewPanelSerializer:t,get activeTextEditor(){return t()},get visibleTextEditors(){return t()},onDidChangeActiveTextEditor:t,onDidChangeVisibleTextEditors:t,onDidChangeTextEditorSelection:t,onDidChangeTextEditorVisibleRanges:t,onDidChangeTextEditorOptions:t,onDidChangeTextEditorViewColumn:t,get terminals(){return t()},get activeTerminal(){return t()},onDidChangeActiveTerminal:t,onDidOpenTerminal:t,onDidCloseTerminal:t,get state(){return t()},onDidChangeWindowState:t,createQuickPick:t,createInputBox:t,registerUriHandler:t,registerWebviewViewProvider:t,registerCustomEditorProvider:t,registerTerminalLinkProvider:t,get activeColorTheme(){return t()},onDidChangeActiveColorTheme:t,registerFileDecorationProvider:t},u={registerCommand(t,r,n){const{commands:o}=e();return o?o.registerCommand(t,r,n):x.Disposable.create((()=>{}))},registerTextEditorCommand:t,executeCommand:t,getCommands:t};class l{constructor(e){this.callOnDispose=e}static from(...e){let t=e;return new l((function(){if(t){for(const e of t)e&&"function"==typeof e.dispose&&e.dispose();t=void 0}}))}dispose(){this.callOnDispose()}}return{workspace:o,languages:s,window:c,commands:u,env:{appName:"Monaco",appRoot:"",language:navigator.language||"en-US",get uriScheme(){return t()},get clipboard(){return t()},get machineId(){return t()},get sessionId(){return t()},remoteName:void 0,shell:"",uiKind:2,asExternalUri:t,openExternal:t},Uri:r,CompletionItem:class{constructor(e,t){this.label=e,this.kind=t}},CodeLens:class{constructor(e,t){this.range=e,this.command=t}get isResolved(){return!!this.command}},DocumentLink:class{constructor(e,t){this.range=e,this.target=t}},CodeActionKind:n,CodeAction:class{constructor(e,t){this.title=e,this.kind=t}},Diagnostic:class{constructor(e,t,r=S.DiagnosticSeverity.Error){this.range=e,this.message=t,this.severity=r}},CallHierarchyItem:class{constructor(e,t,r,n,o,i){this.kind=e,this.name=t,this.detail=r,this.uri=n,this.range=o,this.selectionRange=i}},SemanticTokens:class{constructor(e,t){this.data=e,this.resultId=t}},Disposable:l,SignatureHelpTriggerKind:O.SignatureHelpTriggerKind,DiagnosticSeverity:E.DiagnosticSeverity,EventEmitter:E.Emitter}};const T=b;var k=f.createVSCodeApi(((...e)=>T.Services.get(...e)));export{i as T,k as v};
