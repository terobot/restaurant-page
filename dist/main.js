(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),c=t(165),s=o()((function(e){return e[1]})),d=a()(c);s.push([e.id,"html, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-flow: row wrap;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    color: seashell;\n    background-color: black;\n    align-content: space-between;\n}\n\nbody > * {\n    flex: 1 100%;\n}\n\nheader {\n    position: fixed; \n    top: 0;\n    left: 0;\n    right: 0;\n    height: 12vw;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content:flex-start;\n    margin: 0;\n    padding: 0;\n    background-color: rgba(0, 0, 0, 0.90);\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-bottom: solid 1px seashell;\n    font-size: 4vw;\n    width: 40%;\n    user-select: none;\n}\n\n.navbar {\n    overflow: hidden;\n    user-select: none;\n}\n\n.navbar ul {\n    height: 6vw;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content:flex-start;\n    margin-top: 6vw;\n    padding: 0;\n}\n  \n.navbar li {\n    display: flex;\n    width: 20vw;\n    align-items: center;\n    justify-content: center;\n    font-size: 3vw;\n}\n\n@media(hover: hover) and (pointer: fine) {\n    .navbar li:hover {\n        border-top-left-radius: 0.5em;\n        border-top-right-radius: 0.5em;\n        border-top: dotted 1px seashell;\n        border-left: dotted 1px seashell;\n        border-right: dotted 1px seashell;\n    }  \n}\n\n.unclicked {\n    border-bottom: solid 1px seashell;\n}\n\n.clicked {\n    border-top-left-radius: 0.5em;\n    border-top-right-radius: 0.5em;\n    border-top: solid 1px seashell;\n    border-left: solid 1px seashell;\n    border-right: solid 1px seashell;\n    border-bottom: none;\n    pointer-events: none;\n}\n\n.content {\n    position: fixed; \n    top: 12vw;\n    left: 0;\n    right: 0;\n    height: 100%;\n    background-image: url("+d+");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    overflow: scroll;\n}\n\n.home {\n    height: fit-content;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-top: 4vw;\n    padding-bottom: 20vw;\n}\n\n.menu {\n    height: fit-content;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-top: 4vw;\n    padding-bottom: 20vw;\n}\n\n.contacts {\n    height: fit-content;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-top: 4vw;\n    padding-bottom: 20vw;\n}\n\n.container {\n    height: fit-content;\n    width: 60vw;\n    border-radius: 0.5em;\n    background-color: rgba(0, 0, 0, 0.75);\n    font-size: 2vw;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: center;\n    padding: 2vw\n}\n\nimg {\n    width: 40vw;\n    border-radius: 2vw;\n}\n\n.item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: 6vw;\n}\n\na:link {\n    color: seashell;\n}\n\na:visited {\n    color: seashell;\n}\n\n.footer {\n    position: fixed; \n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 6vw;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    font-size: 2vw;\n    border-top: solid 1px seashell;\n    background-color: rgba(0, 0, 0, 0.90);\n}",""]);const l=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=a(l),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:l,updater:h(m,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function m(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,f=0;function h(e,n){var t,r,o;if(n.singleton){var i=f++;t=p||(p=s(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=s(n),r=m.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=c(e,n),d=0;d<t.length;d++){var l=a(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=s}}}},165:(e,n,t)=>{e.exports=t.p+"1f5daa902520820816cb.jpg"},669:(e,n,t)=>{e.exports=t.p+"f4ea3a0ad45bb5d6251b.jpg"},343:(e,n,t)=>{e.exports=t.p+"8f3fbf8e96f230596ab6.jpg"},517:(e,n,t)=>{e.exports=t.p+"7c1b94e561fdb7bb4429.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{const e=()=>{const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("h1"),r=document.createElement("p"),o=document.createElement("h1"),i=document.createElement("p");return n.classList.add("container"),t.innerHTML="About us",r.innerHTML="Good food for hungry people. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",o.innerHTML="History",i.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",n.append(t,r,o,i),e.classList.add("home"),e.append(n),e},n=(e,n,t,r,o,i)=>{const a=document.createElement("div"),c=document.createElement("h2"),s=document.createElement("p"),d=document.createElement("h3"),l=document.createElement("img"),u=document.createElement("p");return c.innerHTML=e,s.innerHTML=n,d.innerHTML=t,l.setAttribute("src",r),l.setAttribute("alt",o),u.innerHTML=i,a.append(c,s,d,l,u),a.classList.add("item"),a};var r=t(343),o=t(517),i=t(669);var a=t(379),c=t.n(a),s=t(426);c()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;const d=()=>{const t=document.createElement("header"),a=document.createElement("div"),c=document.createElement("nav"),s=document.createElement("ul"),d=document.createElement("li"),l=document.createElement("li"),u=document.createElement("li");return a.classList.add("logo"),a.innerHTML="Good Food Inc",d.innerHTML="Home",d.setAttribute("id","home"),d.addEventListener("click",(()=>{const n=document.getElementById("content");n.innerHTML="",n.append(e()),d.classList.add("clicked"),l.classList.remove("clicked"),u.classList.remove("clicked"),d.classList.remove("unclicked"),l.classList.add("unclicked"),u.classList.add("unclicked")})),d.classList.add("unclicked"),l.innerHTML="Menu",l.setAttribute("id","menu"),l.addEventListener("click",(()=>{const e=document.getElementById("content");e.innerHTML="",e.append((()=>{const e='Photo by <a href="https://unsplash.com/@juniorreisfoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Junior REIS</a> on <a href="https://unsplash.com/s/photos/burger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',t=document.createElement("div"),a=document.createElement("div"),c=n("Standard burger","Bun, beef, cheese, pickles and mayo","12€",r,"Standard burger",e),s=n("Green burger","Bun, vegan patty, cheese, lettuce, onion and mayo","10€",o,"Green burger",e),d=n("Chili burger","Bun, beef, cheese, chili and mayo","15€",i,"Chili burger",e);return a.classList.add("container"),a.append(c,s,d),t.classList.add("menu"),t.append(a),t})()),d.classList.remove("clicked"),l.classList.add("clicked"),u.classList.remove("clicked"),d.classList.add("unclicked"),l.classList.remove("unclicked"),u.classList.add("unclicked")})),l.classList.add("unclicked"),u.innerHTML="Contacts",u.setAttribute("id","contacts"),u.addEventListener("click",(()=>{const e=document.getElementById("content");e.innerHTML="",e.append((()=>{const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("h1"),r=document.createElement("p"),o=document.createElement("h1"),i=document.createElement("p");return n.classList.add("container"),t.innerHTML="Contacts",r.innerHTML="Phone: 123-456-789, Email: good@food.inc",o.innerHTML="Hours",i.innerHTML="Tue-Sat 10:00 - 02:00, Mon and Sun closed.",n.append(t,r,o,i),e.classList.add("contacts"),e.append(n),e})()),d.classList.remove("clicked"),l.classList.remove("clicked"),u.classList.add("clicked"),d.classList.add("unclicked"),l.classList.add("unclicked"),u.classList.remove("unclicked")})),u.classList.add("unclicked"),s.append(d,l,u),c.append(s),c.classList.add("navbar"),t.append(a,c),t};(()=>{document.body.prepend(d());const n=document.getElementById("content"),t=document.getElementById("home");n.innerHTML="",n.append(e()),n.classList.add("content"),t.classList.add("clicked"),document.body.append((()=>{const e=document.createElement("div"),n=document.createElement("p"),t=document.createElement("p");return n.innerHTML="Street 123, City, Country",t.innerHTML='Background photo by <a href="https://unsplash.com/@amseaman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Seaman</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',e.append(n,t),e.classList.add("footer"),e})())})(),console.log("Some log message!")})()})();