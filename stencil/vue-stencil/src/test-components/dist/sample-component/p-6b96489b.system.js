System.register([],function(r,e){"use strict";return{execute:function(){var e=r("f",function(r,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(r)});var t=r("g",function(r,t){return e(r,t)?r.substr(t.length):r});var a=r("b",function(r){return r.charAt(r.length-1)==="/"?r.slice(0,-1):r});var n=r("c",function(r){return r.charAt(0)==="/"?r:"/"+r});var i=r("i",function(r){return r.charAt(0)==="/"?r.substr(1):r});var s=function(r){var e=r||"/";var t="";var a="";var n=e.indexOf("#");if(n!==-1){a=e.substr(n);e=e.substr(0,n)}var i=e.indexOf("?");if(i!==-1){t=e.substr(i);e=e.substr(0,i)}return{pathname:e,search:t==="?"?"":t,hash:a==="#"?"":a,query:{},key:""}};var f=r("h",function(r){var e=r.pathname,t=r.search,a=r.hash;var n=e||"/";if(t&&t!=="?"){n+=t.charAt(0)==="?"?t:"?"+t}if(a&&a!=="#"){n+=a.charAt(0)==="#"?a:"#"+a}return n});var h=function(r){if(!r){return{}}return(/^[?#]/.test(r)?r.slice(1):r).split("&").reduce(function(r,e){var t=e.split("="),a=t[0],n=t[1];r[a]=n?decodeURIComponent(n.replace(/\+/g," ")):"";return r},{})};var u=function(r){return r.charAt(0)==="/"};var c=r("e",function(r){return Math.random().toString(36).substr(2,r)});var v=function(r,e){for(var t=e,a=t+1,n=r.length;a<n;t+=1,a+=1){r[t]=r[a]}r.pop()};var o=function(r,e){if(e===void 0){e=""}var t=e&&e.split("/")||[];var a;var n=0;var i=r&&r.split("/")||[];var s=r&&u(r);var f=e&&u(e);var h=s||f;if(r&&u(r)){t=i}else if(i.length){t.pop();t=t.concat(i)}if(!t.length){return"/"}if(t.length){var c=t[t.length-1];a=c==="."||c===".."||c===""}else{a=false}for(var o=t.length;o>=0;o--){var l=t[o];if(l==="."){v(t,o)}else if(l===".."){v(t,o);n++}else if(n){v(t,o);n--}}if(!h){for(;n--;n){t.unshift("..")}}if(h&&t[0]!==""&&(!t[0]||!u(t[0]))){t.unshift("")}var p=t.join("/");if(a&&p.substr(-1)!=="/"){p+="/"}return p};var l=r("a",function(r,e){if(r===e){return true}if(r==null||e==null){return false}if(Array.isArray(r)){return Array.isArray(e)&&r.length===e.length&&r.every(function(r,t){return l(r,e[t])})}var t=typeof r;var a=typeof e;if(t!==a){return false}if(t==="object"){var n=r.valueOf();var i=e.valueOf();if(n!==r||i!==e){return l(n,i)}var s=Object.keys(r);var f=Object.keys(e);if(s.length!==f.length){return false}return s.every(function(t){return l(r[t],e[t])})}return false});var p=r("j",function(r,e){return r.pathname===e.pathname&&r.search===e.search&&r.hash===e.hash&&r.key===e.key&&l(r.state,e.state)});var d=r("d",function(r,e,t,a){var n;if(typeof r==="string"){n=s(r);if(e!==undefined){n.state=e}}else{n=Object.assign({pathname:""},r);if(n.search&&n.search.charAt(0)!=="?"){n.search="?"+n.search}if(n.hash&&n.hash.charAt(0)!=="#"){n.hash="#"+n.hash}if(e!==undefined&&n.state===undefined){n.state=e}}try{n.pathname=decodeURI(n.pathname)}catch(r){if(r instanceof URIError){throw new URIError('Pathname "'+n.pathname+'" could not be decoded. '+"This is likely caused by an invalid percent-encoding.")}else{throw r}}n.key=t;if(a){if(!n.pathname){n.pathname=a.pathname}else if(n.pathname.charAt(0)!=="/"){n.pathname=o(n.pathname,a.pathname)}}else{if(!n.pathname){n.pathname="/"}}n.query=h(n.search||"");return n})}}});