!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t,n){e.exports=n(9)},function(e,t){function n(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,c,"next",e)}function c(e){n(a,o,i,s,c,"throw",e)}s(void 0)}))}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(g(r.parts[a],t))}else{for(var s=[];a<r.parts.length;a++)s.push(g(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,p=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function g(e,t){var n,r,o;if(t.singleton){var i=m++;n=h||(h=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e,t);return c(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i],u=o[a.id];u&&(u.refs--,r.push(u))}e&&c(s(e,t),t);for(var l=0;l<r.length;l++){var p=r[l];if(0===p.refs){for(var f=0;f<p.parts.length;f++)p.parts[f]();delete o[p.id]}}}}},function(e,t,n){var r=n(10),o=n(11),i=n(12);e.exports=function(e){return r(e)||o(e)||i()}},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,'body{background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;color:#333}.subtitle{color:#a4a4a4}#map{position:absolute;left:0;right:0;top:0;bottom:0}input{position:relative;line-height:20px;padding:10px 15px;border:1px solid #ccc;box-sizing:border-box;border-radius:3px;font-size:1rem;outline:none}input::placeholder{text-transform:uppercase;font-size:11px;letter-spacing:0.0625em}input::-webkit-input-placeholder{text-transform:uppercase;font-size:11px;letter-spacing:0.0625em}input:-ms-input-placeholder{text-transform:uppercase;font-size:11px;letter-spacing:0.0625em}input::-ms-input-placeholder{text-transform:uppercase;font-size:11px;letter-spacing:0.0625em}h1{line-height:24px;display:block;margin:0 0 15px}button{border:none;cursor:pointer;outline:inherit;text-transform:uppercase;font-size:11px;letter-spacing:0.0625em;background:#3498db;color:white;font-size:12px;padding:0.7em 0.9em;border-radius:3px}button:hover{background:#2980b9}button:active{transform:scale(0.99)}h6{margin:0;font-weight:600;color:#797979;text-transform:uppercase;font-size:11px;letter-spacing:0.0625em}.line-group{display:block;display:flex;flex-direction:row;margin:1rem 0;align-items:center}.line-group__line{flex:0 0 auto;display:block;padding:0.25em;background:#ccc;border-radius:50%;width:1.5em;height:1.5rem;line-height:1.5rem;text-align:center;margin-right:1px}.group--bdfm .line-group__line{background:#FF6319;color:#fff}.group--ace .line-group__line{background:#0039A6;color:#fff}.group--123 .line-group__line{background:#EE352E;color:#fff}.group--456 .line-group__line{background:#00933C;color:#fff}.group--g .line-group__line{background:#6CBE45;color:#fff}.group--7 .line-group__line{background:#B933AD;color:#fff}.group--l .line-group__line{background:#A7A9AC;color:#fff}.group--nqr .line-group__line{background:#FCCC0A;color:#333}.group--jz .line-group__line{background:#963;color:#fff}.group--s .line-group__line{background:#808183;color:#fff}.group--sir .line-group__line{background:#343797;color:#fff}\n',""])},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".mapboxgl-popup-content{padding:10px;width:260px;max-height:150px;overflow-y:scroll;border-radius:10px}.popup__fav{cursor:pointer;color:#212121}.popup__fav:hover,.popup__fav.fav--active{color:#f1c40f;transform:scale(0.98)}.mapboxgl-popup-content .line-group__line{width:0.8rem;height:0.8rem;line-height:0.8rem;font-size:0.6rem}.popup__title,.popup__row{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap}.popup__title h3{flex:0 0 auto;margin:0}.popup__title .line-group,.popup__row .line-group{flex:0 0 auto;margin:0.25em 0}.popup__title .popup__fav{flex:0 0 auto;margin-right:0.5em}.popup__title h3{flex:1 0 auto}.popup__title .line-group{flex-basis:100%;margin-left:1.7em}.popup__row .popup__train{margin-left:0.5em}.popup__directions{display:flex;flex-direction:row;margin-top:0.5em}.popup__directions>div{flex:1 1 auto}.popup__error{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100px}.popup__error>span{width:75%;flex:0 0 auto;color:#686868;text-align:center}\n",""])},function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),a=new C(r||[]);return i._invoke=function(e,t,n){var r=l;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l="suspendedStart",p="suspendedYield",f="executing",d="completed",h={};function m(){}function g(){}function v(){}var y={};y[i]=function(){return this};var x=Object.getPrototypeOf,_=x&&x(x(T([])));_&&_!==n&&r.call(_,i)&&(y=_);var w=v.prototype=m.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function L(e){var t;this._invoke=function(n,o){function i(){return new Promise((function(t,i){!function t(n,o,i,a){var s=u(e[n],e,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then((function(e){t("next",e,i,a)}),(function(e){t("throw",e,i,a)})):Promise.resolve(l).then((function(e){c.value=e,i(c)}),(function(e){return t("throw",e,i,a)}))}a(s.arg)}(n,o,t,i)}))}return t=t?t.then(i,i):i()}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function T(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:t,done:!0}}return g.prototype=w.constructor=v,v.constructor=g,v[s]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(L.prototype),L.prototype[a]=function(){return this},e.AsyncIterator=L,e.async=function(t,n,r,o){var i=new L(c(t,n,r,o));return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(w),w[s]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=T,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:T(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".map-overlay-right{position:fixed;top:0;right:0;bottom:0;width:20%;min-width:200px;padding:10px 20px;transform:translateX(100%);transition:transform 0.3s ease-in-out;background:white;box-shadow:0 1px 2px rgba(0,0,0,0.2)}.map-overlay-right hr{border:1px solid #eee;margin:1rem 0}.right__button{position:absolute;top:10px;left:-10px;width:1.25em;height:1.25em;transform:translateX(-100%);background:white;border-radius:50%;padding:0.625em;box-shadow:0 1px 2px rgba(0,0,0,0.2);cursor:pointer;z-index:20}.right__button svg{position:absolute;top:0.625em;left:0.625em;min-width:1.25em;min-height:1.25em;transition:opacity 0.3s}.right__button .fa-times{opacity:0}.right__button .fa-bars{opacity:1}.right__button:hover{background:#f9f9f9}.right__button:active{transform:translateX(-100%) scale(0.98)}.map-overlay-right.open{transform:none}.map-overlay-right.open .right__button .fa-bars{opacity:0}.map-overlay-right.open .right__button .fa-times{opacity:1}.login-form{display:block;background:#f5f5f5;border-radius:10px;padding:10px 20px;text-align:center;display:flex;flex-direction:column;align-items:stretch}.login-form p{margin:0 0 0.5em;text-align:left}.login-form input{border:0;outline:none;margin:0.35rem 15%}.login-form button{box-sizing:border-box;align-self:flex-start;margin-top:0.35rem;margin-left:15%}.status-group__status{flex:1 1 auto;text-align:right;line-height:1rem}.status-group__status.status--good{color:#27ae60}.status-group__status.status--planned{color:#f1c40f}.status-group__status.status--delays{color:#e67e22}.status-group__status.status--suspended{color:#c0392b}.hidden{display:none}.user-favs{min-height:100px}.user-favs>h6{margin-top:1em}.user-favs__header{display:flex;flex-direction:row;align-items:center}.user-favs__header .user-favs__welcome{flex:1 1 auto;text-align:left}.user-favs__header .user-favs__logout{flex:0 0 auto;color:#686868}.user-favs__list{margin-top:1em}.user-favs__list h3{font-size:1rem;font-weight:normal}.user-favs__list .station-popup{margin-top:1em}.user-favs__list .popup__title .line-group{flex-basis:auto;flex:0 0 auto;margin-left:0.5em}.user-favs__list .popup__title h3{flex:0 0 auto}.user-favs__list .popup__directions{margin-left:1.7rem;position:relative;top:-0.25em}.user-favs__list .popup__error{font-size:0.8rem;min-height:50px}.user-favs__list .line-group__line{width:0.8rem;height:0.8rem;line-height:0.8rem;font-size:0.7rem}.user-favs__list .user-favs__empty{font-size:0.8rem;color:#686868;text-align:center;margin:1em 3.5em}\n",""])},function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".map-overlay-left{position:fixed;min-width:350px;top:10px;left:10px}.map-overlay-box{background-color:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.2);border-radius:10px;width:100%}.search-box{overflow:hidden}.search-box input{width:100%;height:100%;border:none}.results-box{margin-top:5px}.result-item{position:relative;padding:0 10px;cursor:pointer;display:flex;flex-direction:row;align-items:center}.result-item:not(:last-of-type):after{content:' ';position:absolute;bottom:0;left:10px;right:10px;border-top:1px solid #e9e9e9}.result-item .result-item__text{flex:0 0 auto}.result-item .line-group{display:inline-block;flex:1 1 auto;margin-left:0.5em}.result-item .line-group .line-group__line{display:inline-block;width:0.9rem;height:0.9rem;line-height:1rem;font-size:0.8rem}.result-item:hover,.item--active{background-color:#f5f5f5}\n",""])},function(e,t,n){"use strict";n.r(t);n(5),n(7);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=["7","123","456","ACE","BDFM","G","JZ","L","NQR","S","SIR","FS","GS"],c=function(e){return"S"==e?e:"H"==e?"ACE":s.find((function(t){return-1!=t.indexOf(e)}))||e},u=100,l=function(e,t){var n;return function(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];n&&clearTimeout(n),n=setTimeout((function(){t.bind(r).apply(void 0,i),n=null}),e)}},p=function(e){var t=document.createElement("div");t.classList.add("line-group","group--"+e.toLowerCase());for(var n=0;n<e.length;n++){var r=document.createElement("div");r.classList.add("line-group__line"),r.textContent=e[n],t.appendChild(r)}return t},f=function(e,t){var n=document.createElement("div");n.classList.add("line-group","group--"+e.toLowerCase());var r=document.createElement("div");return r.classList.add("line-group__line"),r.textContent=t,n.appendChild(r),n};function d(){return h.apply(this,arguments)}function h(){return(h=a()(o.a.mark((function e(){var t,n,r,i,s,f,d,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h=function(){for(var e=n.querySelectorAll(".result-item"),t=0;t<e.length;t++)e[t].remove()},d=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove("item--active")},f=function(e){if(!e)return!1;d(e),s>=e.length&&(s=0),s<0&&(s=e.length-1),e[s].classList.add("item--active")},t=document.getElementById("station-search"),n=document.querySelector(".results-box"),e.next=7,fetch("https://comp426.peterandringa.com/mta/stations");case 7:return r=e.sent,e.next=10,r.json();case 10:i=e.sent,t.addEventListener("input",l(u,(function(e){var t=this.value;if(h(),s=-1,!t)return!1;var r=new RegExp(t,"i");i.filter((function(e){return r.exec(e.stop_name)})).forEach((function(e){var t=document.createElement("div");t.classList.add("result-item");var r=document.createElement("div");r.classList.add("result-item__text"),r.innerText=e.stop_name,t.appendChild(r),t.appendChild(p(c(e.stop_id[0]))),t.addEventListener("click",function(){var t=a()(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[e.stop_lon,e.stop_lat],U.flyTo({center:r,zoom:15}),t.next=4,re(e.stop_id,e.stop_name,r);case 4:h();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.appendChild(t)}))}))),t.addEventListener("keydown",(function(e){var t=n.querySelectorAll(".result-item");40==e.keyCode?(s++,f(t)):38==e.keyCode?(s--,f(t)):13==e.keyCode&&(e.preventDefault(),s>-1&&t&&t[s].click())}));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.addEventListener("load",a()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d();case 1:case"end":return e.stop()}}),e)}))));var m="https://comp426.peterandringa.com";function g(){return(g=a()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(m+"/account/status",{method:"GET",headers:{Authorization:"Bearer "+t}}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=a()(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"/account/login",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({name:t,pass:"_"})}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",-1==n.msg.indexOf("is not a registered user"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return console.log("attempting to log in",e,t),fetch(m+"/account/login",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({name:e,pass:t})}).then((function(e){return e.json()}))}function x(e,t){return console.log("attempting to create",e,t),fetch(m+"/account/create",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({name:e,pass:t,data:{favorites:{}}})}).then((function(e){return e.json()}))}function _(){return(_=a()(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,n);case 2:if((r=e.sent)&&r.status&&-1!=r.status.toLowerCase().indexOf("success")){e.next=5;break}return e.abrupt("return",r);case 5:return e.abrupt("return",y(t,n));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}function b(){return fetch(m+"/user/favorites",{method:"GET",headers:{Authorization:"Bearer "+w("jwt")}}).then((function(e){return e.json()})).then((function(e){if(!e||!e.result)return window._FAVORITES=new Set;var t=Object.keys(e.result);return window._FAVORITES=new Set(t)}))}b().then((function(e){return console.log(e)}));var L,k={userExists:function(e){return v.apply(this,arguments)},checkLogin:function(e){return g.apply(this,arguments)},loginUser:y,createUser:x,createAndLogin:function(e,t){return _.apply(this,arguments)},setCookie:function(e,t,n){var r="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),r="; expires="+o.toUTCString()}document.cookie=e+"="+(t||"")+r+"; path=/"},getCookie:w,eraseCookie:function(e){window._FAVORITES=new Set,document.cookie=e+"=; Max-Age=-99999999;"},addFavorite:function(e){return window._FAVORITES.add(e),console.log("new ",window._FAVORITES),fetch(m+"/user/favorites/"+e,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:"Bearer "+w("jwt")},body:JSON.stringify({data:{chosen:!0},type:"merge"})}).then((function(e){return e.json()}))},removeFavorite:function(e){return window._FAVORITES.delete(e),fetch(m+"/user/favorites/"+e,{method:"DELETE",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:"Bearer "+w("jwt")}}).then((function(e){return e.json()}))},getFavorites:b},E=n(4),S=n.n(E),C=document.querySelector(".map-overlay-right");function T(){return j.apply(this,arguments)}function j(){return(j=a()(o.a.mark((function e(){var t,n,r,i,a,s,c,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window._FAVORITES||!window._FAVORITES.size){e.next=4;break}e.t0=window._FAVORITES,e.next=7;break;case 4:return e.next=6,k.getFavorites();case 6:e.t0=e.sent;case 7:return t=e.t0,e.next=10,window._STOPS;case 10:if(e.t1=function(e){return t.has(e.stop_id.toString())},n=e.sent.filter(e.t1),console.log(t,n),n&&0!=n.length){e.next=15;break}return e.abrupt("return",{innerHTML:'<div class="user-favs__empty"><span>Search for stops to add them to your favorites!</span></div>'});case 15:(r=document.createElement("div")).classList.add("favs__container"),i=!0,a=!1,s=void 0,e.prev=20,c=n[Symbol.iterator]();case 22:if(i=(u=c.next()).done){e.next=33;break}return l=u.value,console.log("rendering stop",l),e.t2=r,e.next=28,ie(l.stop_id,l.stop_name,2);case 28:e.t3=e.sent,e.t2.appendChild.call(e.t2,e.t3);case 30:i=!0,e.next=22;break;case 33:e.next=39;break;case 35:e.prev=35,e.t4=e.catch(20),a=!0,s=e.t4;case 39:e.prev=39,e.prev=40,i||null==c.return||c.return();case 42:if(e.prev=42,!a){e.next=45;break}throw s;case 45:return e.finish(42);case 46:return e.finish(39);case 47:return e.abrupt("return",r);case 48:case"end":return e.stop()}}),e,null,[[20,35,39,47],[40,,42,46]])})))).apply(this,arguments)}function O(e){return A.apply(this,arguments)}function A(){return(A=a()(o.a.mark((function e(t){var n,r,i,a,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t?L=t:t=L,window._LOGGED_IN=!0,console.log("Welcome, ".concat(t,"!")),document.querySelector(".login-form").classList.add("hidden"),document.querySelector(".user-favs").classList.remove("hidden"),n=document.querySelectorAll('[data-fill="username"]'),r=!0,i=!1,a=void 0,e.prev=9,s=n[Symbol.iterator]();!(r=(c=s.next()).done);r=!0)c.value.innerText=t;e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),i=!0,a=e.t0;case 17:e.prev=17,e.prev=18,r||null==s.return||s.return();case 20:if(e.prev=20,!i){e.next=23;break}throw a;case 23:return e.finish(20);case 24:return e.finish(17);case 25:return e.next=27,T();case 27:document.querySelector(".user-favs__list").innerHTML=e.sent.innerHTML;case 28:case"end":return e.stop()}}),e,null,[[9,13,17,25],[18,,20,24]])})))).apply(this,arguments)}document.querySelector(".right__button").addEventListener("click",(function(){C.classList.contains("open")?C.classList.remove("open"):C.classList.add("open")})),window._LOGGED_IN=!1;var F=k.getCookie("jwt");F&&k.checkLogin(F).then((function(e){e&&e.user&&e.user.name&&O(e.user.name)}));var N=document.querySelector(".login--username"),M=document.querySelector(".login--password"),I=document.querySelector(".login-form__button");N.addEventListener("blur",a()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.userExists(this.value);case 2:if(!e.sent){e.next=7;break}I.innerText="Log in",I._intent="login",e.next=9;break;case 7:I.innerText="Sign up",I._intent="create";case 9:case"end":return e.stop()}}),e,this)})))),I.addEventListener("click",a()(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(this._intent),"create"!=this._intent){e.next=7;break}return e.next=4,k.createAndLogin(N.value,M.value);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,k.loginUser(N.value,M.value);case 9:e.t0=e.sent;case 10:(t=e.t0).jwt?(k.setCookie("jwt",t.jwt,30),O(t.name),N.value="",M.value="",I.innerText="Log In or Sign up"):console.error("Login error:",t);case 12:case"end":return e.stop()}}),e,this)})))),document.querySelector(".user-favs__logout").addEventListener("click",(function(){k.eraseCookie("jwt"),function(){window._LOGGED_IN=!1,console.log("Goodbye!"),document.querySelector(".login-form").classList.remove("hidden"),document.querySelector(".user-favs").classList.add("hidden");var e=document.querySelectorAll('[data-fill="username"]'),t=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){o.value.innerText=""}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}document.querySelector(".user-favs__list").innerHtml=""}()}));var D=function(e){return e.toLowerCase()},R={"GOOD SERVICE":"status--good","PLANNED WORK":"status--planned",DELAYS:"status--delays","PART SUSPENDED":"status--suspended",SUSPENDED:"status--suspended"};function z(){return P.apply(this,arguments)}function P(){return(P=a()(o.a.mark((function e(){var t,n,r,i,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://comp426.peterandringa.com/mta/status").then((function(e){return e.json()}));case 2:if((t=e.sent)&&t.lines){e.next=5;break}return e.abrupt("return",console.error("Could not load line status."));case 5:for(n=0,r=Object.keys(t.lines);n<r.length;n++)a=r[n],(s=document.querySelector(".group--".concat(a.toLowerCase()," .status-group__status"))).innerText=D(t.lines[a].status),(i=s.classList).remove.apply(i,S()(Object.values(R))),s.classList.add(R[t.lines[a].status]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}z(),setInterval(z,6e4);var G=[-73.9864468,40.7417373],q=function(e,t,n){return[t[0]*n+e[0]*(1-n),t[1]*n+e[1]*(1-n)]};mapboxgl.accessToken="pk.eyJ1IjoiYW5kcmVhLTMwMDAiLCJhIjoiY2szZGtmbnB3MHBlczNib2swM29iM3dyMCJ9.ND3AF3iabUCSJJvHse4Mjg";var B,U=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v10",center:[-73.9864468,40.7417373],zoom:10.15,trackResize:!0}),H={},J={"A-C-E":"#0039A6","B-D-F-M":"#FF6319",G:"#6CBE45","J-Z":"#996633",L:"#A7A9AC","N-Q-R-W":"#FCCC0A",S:"#808183","1-2-3":"#EE352E","4-5-6":"#00933C",7:"#B933AD"},V="#FFFF00";function W(e){return Y.apply(this,arguments)}function Y(){return(Y=a()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.addLayer({id:"lines",type:"line",source:{type:"vector",url:"mapbox://andrea-3000.5v91wv8d"},"source-layer":"subway-lines-8mb22z",layout:{"line-cap":"round","line-join":"round"},paint:{"line-width":1.5,"line-color":ee(["get","rt_symbol"])}},"stops");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return Q.apply(this,arguments)}function Q(){return(Q=a()(o.a.mark((function e(t){var n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://comp426.peterandringa.com/mta/stations");case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,B(r),i=r.map((function(e){return{type:"Feature",properties:{stop_id:e.stop_id,stop_name:e.stop_name},geometry:{type:"Point",coordinates:[e.stop_lon,e.stop_lat]}}})),t.addLayer({id:"stops",type:"circle",source:{type:"geojson",data:{type:"FeatureCollection",features:i}},paint:{"circle-radius":2.5,"circle-color":"#fff","circle-stroke-width":1,"circle-stroke-color":"#000"}});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){return K.apply(this,arguments)}function K(){return(K=a()(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://comp426.peterandringa.com/mta/live").then((function(e){return e.json()}));case 2:n=e.sent,H=n.trains.map((function(e){var n="train-"+e.train_id.replace(/ /g,"_"),r=t.getSource(n);if(r)if(e.train_loc){var o={type:"Point",coordinates:e.train_loc};r.setData(o)}else console.error("Received invalid train location when updating, should we remove it?");else e.train_loc&&$(t,e);return e.source=r||t.getSource(n),e.map_id=n,e}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,t){var n="train-"+t.train_id.replace(/ /g,"_");e.addSource(n,{type:"geojson",data:{type:"Point",coordinates:t.train_loc}}),e.addLayer({id:n,type:"circle",source:n,paint:{"circle-radius":4,"circle-color":ee(t.route_id),"circle-stroke-width":1,"circle-stroke-color":"#000"}})}function ee(e){return["match",e,["A","C","E"],J["A-C-E"],["B","D","F","M"],J["B-D-F-M"],["G"],J.G,["J","Z"],J["J-Z"],["L"],J.L,["N","Q","R"],J["N-Q-R-W"],["S"],J.S,["1","2","3"],J["1-2-3"],["4","5","6"],J["4-5-6"],["7"],J[7],V]}function te(){var e=Date.now()/1e3,t=!0,n=!1,r=void 0;try{for(var o,i=H[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;if(a.waypoints&&a.waypoints[0]&&a.train_loc){for(var s=(e-a.waypoints[0].start)/a.waypoints[0].duration;a.waypoints&&a.waypoints.length&&a.waypoints[0].duration&&s>1;)a.waypoints.shift(),s=a.waypoints[0]?(e-a.waypoints[0].start)/a.waypoints[0].duration:-1;if(a.waypoints[0]&&a.waypoints[0].duration&&!(s<0)){var c=q(a.train_loc,a.waypoints[0].loc,s);a.source.setData({type:"Point",coordinates:c}),a.train_loc=c}}}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}setTimeout(te,500)}window._STOPS=new Promise((function(e,t){B=e}));var ne=function(e){var t=(e-new Date)/1e3;return t<60?"now":(t=Math.round(t/60))<60?"".concat(t,"m"):(t=Math.round(t/60))<24?"".concat(t,"h"):(t=Math.round(t/24))<30?"".concat(t,"d"):"LARGE TIME (probably wrong)"};function re(e,t,n){return oe.apply(this,arguments)}function oe(){return(oe=a()(o.a.mark((function e(t,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=new mapboxgl.Popup({closeButton:!0,closeOnClick:!0}).setLngLat(r),e.next=3,ie(t,n,2);case 3:e.t1=e.sent.innerHTML,e.t0.setHTML.call(e.t0,e.t1).addTo(U),console.log("add listener",document.querySelector("#fav-btn-"+t)),document.querySelector("#fav-btn-"+t).addEventListener("click",(function(){console.log("clickity click"),window._LOGGED_IN&&(window._FAVORITES.has(t)?(k.removeFavorite(t),this.classList.remove("fav--active")):(k.addFavorite(t),this.classList.add("fav--active")),O())}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e,t,n){return ae.apply(this,arguments)}function ae(){return(ae=a()(o.a.mark((function e(t,n,r){var i,a,s,u,l,d,h,m,g,v,y,x,_,w,b,L,k,E,S,C,T;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://comp426.peterandringa.com/mta/stations/".concat(t,"/schedule"));case 2:return i=e.sent,e.next=5,i.json();case 5:if(a=e.sent,(s=document.createElement("div")).classList.add("station-popup"),(u=document.createElement("div")).classList.add("popup__title"),(l=document.createElement("div")).id="fav-btn-"+t,l.classList.add("popup__fav"),window._FAVORITES&&window._FAVORITES.has(t)&&l.classList.add("fav--active"),(d=document.createElement("i")).classList.add("fas","fa-star"),l.appendChild(d),u.appendChild(l),(h=document.createElement("h3")).textContent=n,u.appendChild(h),u.appendChild(p(c(t[0]))),s.appendChild(u),0==Object.keys(a.schedules).length)(m=document.createElement("div")).classList.add("popup__error"),m.innerHTML="<span>MTA is currently not providing arrival times for this line.</span>",s.append(m);else{if(g=a.schedules[Object.keys(a.schedules)[0]].N.filter((function(e){return Date.now()<new Date(1e3*e.arrivalTime)})).slice(0,5),v=a.schedules[Object.keys(a.schedules)[0]].S.filter((function(e){return Date.now()<new Date(1e3*e.arrivalTime)})).slice(0,5),console.log(g,v),(y=document.createElement("div")).classList.add("popup__directions"),g){for((x=document.createElement("div")).classList.add("northbound"),(_=document.createElement("h6")).textContent="NORTHBOUND",x.appendChild(_),0==r&&g.length,w=0;w<r;w++)(b=document.createElement("div")).classList.add("popup__row"),b.appendChild(f(c(t[0]),g[w].routeId)),(L=document.createElement("div")).classList.add("popup__train"),L.textContent="".concat(ne(new Date(1e3*g[w].arrivalTime))),b.appendChild(L),x.appendChild(b);y.appendChild(x)}if(v){for((k=document.createElement("div")).classList.add("southbound"),(E=document.createElement("h6")).textContent="SOUTHBOUND",k.appendChild(E),0==r&&v.length,S=0;S<r;S++)(C=document.createElement("div")).classList.add("popup__row"),C.appendChild(f(c(t[0]),v[S].routeId)),(T=document.createElement("div")).classList.add("popup__train"),T.textContent="".concat(ne(new Date(1e3*v[S].arrivalTime))),C.appendChild(T),k.appendChild(C);y.appendChild(k)}s.append(y)}return e.abrupt("return",s);case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}U.on("click","stops",function(){var e=a()(o.a.mark((function e(t){var n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.features[0].geometry.coordinates.slice(),r=t.features[0].properties.stop_id,i=t.features[0].properties.stop_name,e.next=5,re(r,i,n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),U.on("load",a()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(U);case 2:return e.next=4,W(U);case 4:return e.next=6,X(U);case 6:setTimeout(U.flyTo({center:G,zoom:12.15}),3e3),setInterval((function(){X(U)}),3e4),setTimeout(te,5e3);case 9:case"end":return e.stop()}}),e)}))));n(13),n(15)}]);