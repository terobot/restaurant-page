(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"html, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-flow: row wrap;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    color: seashell;\n    background-color: black;\n}\n\nbody > * {\n    flex: 1 100%;\n}\n\nheader {\n    height: 10vw;\n}\n\n.navbar {\n    overflow: hidden;\n    user-select: none;\n}\n\n.navbar ul {\n    height: 10vw;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-around;\n    margin: 0;\n    padding: 0;\n}\n  \n.navbar li {\n    display: flex;\n    width: 33.3%;\n    align-items: center;\n    justify-content: center;\n    font-size: 3vw;\n}\n\n.navbar li:hover {\n    font-weight: bold;\n}\n\n.unclicked {\n    border-bottom: solid 1px seashell;\n}\n\n.clicked {\n    border-top-left-radius: 0.5em;\n    border-top-right-radius: 0.5em;\n    border-top: solid 1px seashell;\n    border-left: solid 1px seashell;\n    border-right: solid 1px seashell;\n    border-bottom: none;\n    pointer-events: none;\n}\n\n.content {\n    height: fit-content;\n}\n\n.home {\n    height: 110vh;\n    background-image: url(\"https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    opacity: 0.5;\n}\n\n.footer {\n    height: 10vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2vw;\n}",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],s=n.base?a[0]+n.base:a[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=c(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:v(f,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(i,c[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,p=0;function v(e,n){var t,r,o;if(n.singleton){var i=p++;t=m||(m=s(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=s(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);i[o].references--}for(var s=a(e,n),d=0;d<t.length;d++){var l=c(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=s}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=()=>{const e=document.createElement("div");return e.innerHTML="Placeholder text for HOME",e.classList.add("home"),e};var n=t(379),r=t.n(n),o=t(426);r()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const i=()=>{const n=document.createElement("header"),t=document.createElement("nav"),r=document.createElement("ul"),o=document.createElement("li"),i=document.createElement("li"),c=document.createElement("li");return o.innerHTML="Home",o.setAttribute("id","home"),o.addEventListener("click",(()=>{const n=document.getElementById("content");n.innerHTML="",n.append(e()),o.classList.add("clicked"),i.classList.remove("clicked"),c.classList.remove("clicked"),o.classList.remove("unclicked"),i.classList.add("unclicked"),c.classList.add("unclicked")})),o.classList.add("unclicked"),i.innerHTML="Menu",i.setAttribute("id","menu"),i.addEventListener("click",(()=>{const e=document.getElementById("content");e.innerHTML="",e.append((()=>{const e=document.createElement("div");return e.innerHTML="Placeholder text for MENU",e})()),o.classList.remove("clicked"),i.classList.add("clicked"),c.classList.remove("clicked"),o.classList.add("unclicked"),i.classList.remove("unclicked"),c.classList.add("unclicked")})),i.classList.add("unclicked"),c.innerHTML="Contacts",c.setAttribute("id","contacts"),c.addEventListener("click",(()=>{const e=document.getElementById("content");e.innerHTML="",e.append((()=>{const e=document.createElement("div");return e.innerHTML="Placeholder text for CONTACTS",e})()),o.classList.remove("clicked"),i.classList.remove("clicked"),c.classList.add("clicked"),o.classList.add("unclicked"),i.classList.add("unclicked"),c.classList.remove("unclicked")})),c.classList.add("unclicked"),r.append(o,i,c),t.append(r),t.classList.add("navbar"),n.append(t),n};(()=>{document.body.prepend(i());const n=document.getElementById("content"),t=document.getElementById("home");n.innerHTML="",n.append(e()),n.classList.add("content"),t.classList.add("clicked"),document.body.append((()=>{const e=document.createElement("div");return e.innerHTML="Placeholder text for footer",e.classList.add("footer"),e})())})(),console.log("Some log message!")})()})();