import{d as t,h as e,f as o,g as s}from"./p-6b891a11.js";import{b as n,c as i,d as a,e as r,f as c,g as l,h,i as p,j as u}from"./p-7be683ab.js";import{a as f}from"./p-82a77372.js";import{a as d,b as y,c as g,d as m,e as P,f as b}from"./p-af57475e.js";const w=(t,...e)=>{t||console.warn(...e)},v=()=>{let t,e=[];return{setPrompt:e=>(w(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,o,s,n)=>{if(null!=t){const i="function"==typeof t?t(e,o):t;"string"==typeof i?"function"==typeof s?s(i,n):(w(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),n(!0)):n(!1!==i)}else n(!0)},appendListener:t=>{let o=!0;const s=(...e)=>{o&&t(...e)};return e.push(s),()=>{o=!1,e=e.filter(t=>t!==s)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},T=(t,e="scrollPositions")=>{let o=new Map;const s=(e,s)=>{if(o.set(e,s),d(t,"sessionStorage")){const e=[];o.forEach((t,o)=>{e.push([o,t])}),t.sessionStorage.setItem("scrollPositions",JSON.stringify(e))}};if(d(t,"sessionStorage")){const s=t.sessionStorage.getItem(e);o=s?new Map(JSON.parse(s)):o}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:s,get:t=>o.get(t),has:t=>o.has(t),capture:e=>{s(e,[t.scrollX,t.scrollY])}}},k={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+p(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:p,decodePath:i},slash:{encodePath:i,decodePath:i}},L=(t,e)=>{const o=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:o})},O={browser:(t,e={})=>{let o=!1;const s=t.history,p=t.location,u=t.navigator,f=y(t),d=!g(u),b=T(t),k=null!=e.forceRefresh&&e.forceRefresh,L=null!=e.getUserConfirmation?e.getUserConfirmation:m,O=null!=e.keyLength?e.keyLength:6,E=e.basename?n(i(e.basename)):"",S=()=>{try{return t.history.state||{}}catch(t){return{}}},x=t=>{t=t||{};const{key:e,state:o}=t,{pathname:s,search:n,hash:i}=p;let h=s+n+i;return w(!E||c(h,E),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+h+'" to begin with "'+E+'".'),E&&(h=l(h,E)),a(h,o,e||r(O))},U=v(),H=t=>{b.capture(J.location.key),Object.assign(J,t),J.location.scrollPosition=b.get(J.location.key),J.length=s.length,U.notifyListeners(J.location,J.action)},j=t=>{P(u,t)||R(x(t.state))},A=()=>{R(x(S()))},R=t=>{if(o)o=!1,H();else{const e="POP";U.confirmTransitionTo(t,e,L,o=>{o?H({action:e,location:t}):I(t)})}},I=t=>{let e=B.indexOf(J.location.key),s=B.indexOf(t.key);-1===e&&(e=0),-1===s&&(s=0);const n=e-s;n&&(o=!0,M(n))},C=x(S());let B=[C.key],V=0,Y=!1;const q=t=>E+h(t),M=t=>{s.go(t)},F=e=>{1===(V+=e)?(t.addEventListener("popstate",j),d&&t.addEventListener("hashchange",A)):0===V&&(t.removeEventListener("popstate",j),d&&t.removeEventListener("hashchange",A))},J={length:s.length,action:"POP",location:C,createHref:q,push:(t,e)=>{w(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const o=a(t,e,r(O),J.location);U.confirmTransitionTo(o,"PUSH",L,t=>{if(!t)return;const e=q(o),{key:n,state:i}=o;if(f)if(s.pushState({key:n,state:i},"",e),k)p.href=e;else{const t=B.indexOf(J.location.key),e=B.slice(0,-1===t?0:t+1);e.push(o.key),B=e,H({action:"PUSH",location:o})}else w(void 0===i,"Browser history cannot push state in browsers that do not support HTML5 history"),p.href=e})},replace:(t,e)=>{w(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const o=a(t,e,r(O),J.location);U.confirmTransitionTo(o,"REPLACE",L,t=>{if(!t)return;const e=q(o),{key:n,state:i}=o;if(f)if(s.replaceState({key:n,state:i},"",e),k)p.replace(e);else{const t=B.indexOf(J.location.key);-1!==t&&(B[t]=o.key),H({action:"REPLACE",location:o})}else w(void 0===i,"Browser history cannot replace state in browsers that do not support HTML5 history"),p.replace(e)})},go:M,goBack:()=>M(-1),goForward:()=>M(1),block:(t="")=>{const e=U.setPrompt(t);return Y||(F(1),Y=!0),()=>(Y&&(Y=!1,F(-1)),e())},listen:t=>{const e=U.appendListener(t);return F(1),()=>{F(-1),e()}},win:t};return J},hash:(t,e={})=>{let o=!1,s=null,p=0,f=!1;const d=t.location,y=t.history,g=b(t.navigator),P=null!=e.keyLength?e.keyLength:6,{getUserConfirmation:T=m,hashType:L="slash"}=e,O=e.basename?n(i(e.basename)):"",{encodePath:E,decodePath:S}=k[L],x=()=>{const t=d.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},U=t=>{const e=d.href.indexOf("#");d.replace(d.href.slice(0,e>=0?e:0)+"#"+t)},H=()=>{let t=S(x());return w(!O||c(t,O),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+O+'".'),O&&(t=l(t,O)),a(t,void 0,r(P))},j=v(),A=t=>{Object.assign(J,t),J.length=y.length,j.notifyListeners(J.location,J.action)},R=()=>{const t=x(),e=E(t);if(t!==e)U(e);else{const t=H(),e=J.location;if(!o&&u(e,t))return;if(s===h(t))return;s=null,I(t)}},I=t=>{if(o)o=!1,A();else{const e="POP";j.confirmTransitionTo(t,e,T,o=>{o?A({action:e,location:t}):C(t)})}},C=t=>{let e=q.lastIndexOf(h(J.location)),s=q.lastIndexOf(h(t));-1===e&&(e=0),-1===s&&(s=0);const n=e-s;n&&(o=!0,M(n))},B=x(),V=E(B);B!==V&&U(V);const Y=H();let q=[h(Y)];const M=t=>{w(g,"Hash history go(n) causes a full page reload in this browser"),y.go(t)},F=(t,e)=>{1===(p+=e)?t.addEventListener("hashchange",R):0===p&&t.removeEventListener("hashchange",R)},J={length:y.length,action:"POP",location:Y,createHref:t=>"#"+E(O+h(t)),push:(t,e)=>{w(void 0===e,"Hash history cannot push state; it is ignored");const o=a(t,void 0,r(P),J.location);j.confirmTransitionTo(o,"PUSH",T,t=>{if(!t)return;const e=h(o),n=E(O+e);if(x()!==n){s=e,(t=>d.hash=t)(n);const t=q.lastIndexOf(h(J.location)),i=q.slice(0,-1===t?0:t+1);i.push(e),q=i,A({action:"PUSH",location:o})}else w(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),A()})},replace:(t,e)=>{w(void 0===e,"Hash history cannot replace state; it is ignored");const o=a(t,void 0,r(P),J.location);j.confirmTransitionTo(o,"REPLACE",T,t=>{if(!t)return;const e=h(o),n=E(O+e);x()!==n&&(s=e,U(n));const i=q.indexOf(h(J.location));-1!==i&&(q[i]=e),A({action:"REPLACE",location:o})})},go:M,goBack:()=>M(-1),goForward:()=>M(1),block:(e="")=>{const o=j.setPrompt(e);return f||(F(t,1),f=!0),()=>(f&&(f=!1,F(t,-1)),o())},listen:e=>{const o=j.appendListener(e);return F(t,1),()=>{F(t,-1),o()}},win:t};return J}};class E{constructor(o){t(this,o),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const e=this.history.win.document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=e(this,"isServer"),this.queue=e(this,"queue")}componentWillLoad(){this.history=O[this.historyType](this.el.ownerDocument.defaultView),this.history.listen(t=>{t=L(t,this.root),this.location=t}),this.location=L(this.history.location,this.root)}scrollTo(t){const e=this.history;if(null!=t&&!this.isServer&&e)return"POP"===e.action&&Array.isArray(e.location.scrollPosition)?this.queue.write(()=>{e&&e.location&&Array.isArray(e.location.scrollPosition)&&e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}):this.queue.write(()=>{e.win.scrollTo(0,t)})}render(){if(this.location&&this.history)return o(f.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},o("slot",null))}get el(){return s(this)}}export{E as stencil_router};