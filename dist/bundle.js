(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,":root{\n    --back-color: #A59D95;\n    --fnt-color: #232b2b;\n}\n\nbody{\n    padding: 0;\n    margin:0;\n    height: 100vh;\n    width:100vw;\n    background-color: var(--back-color);\n    color: var(--fnt-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--fnt-color);\n}\n\n.carousel-container {\n    height: 80%;\n    width: 70%;    \n    padding: 0;\n    overflow: hidden;\n    position: relative;\n}\n\n.carousel-top-section{\n    height: 100%;\n    position: relative;\n    width: 100%;\n}\n\n.carousel-image-container{\n    margin-top:0;\n    list-style: none;\n    padding: 0;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    transition: transform 0.2s ease-in-out;\n}\n.item{  \n    height: 100%;\n    min-width: 100%;\n}\n.img-tag{\n    height: 100%;\n    min-width: 100%;\n    \n}       \n\n.carousel-left-btn{\n    position: absolute;\n    left:1rem;\n    top:50%;\n    transform: translate(0%,-50%);\n}\n.carousel-right-btn{\n    position: absolute;\n    right: 1rem;\n    top:50%;\n    transform: translate(0%,-50%);\n}\n.carousel-bottom-section{\n   position: absolute;\n   bottom: 0px;\n   color: white;\n   display: flex;\n   width: 100%;\n   align-items: center;\n   justify-content: center;\n}\n\n.dots-track{\n    list-style: none;\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    justify-content: center;\n}\n\n.dot{\n    height: 1rem;\n    width: 1rem;\n    background-color: white;\n    border: white solid ;\n    border-radius: 50%;\n    opacity: 0.5;\n}\n.active-carousel-dot{\n    opacity: 1;\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),l=n(216),u=n.n(l),d=n(589),p=n.n(d),f=n(28),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var v=document.querySelector(".carousel-image-container"),h=document.querySelectorAll(".item"),y=v.clientWidth,g=document.querySelector(".carousel-right-btn"),b=document.querySelector(".carousel-left-btn"),x=0;window.onresize=function(){console.log("sizes was fired"),v=document.querySelector(".carousel-image-container"),h=document.querySelectorAll(".item"),y=v.clientWidth,g=document.querySelector(".carousel-right-btn"),b=document.querySelector(".carousel-left-btn"),h.forEach((e=>{e.style.width=`${y}px;`,v.style.transform=`translateX(-${y*x}px)`}))},g.addEventListener("click",(()=>{var e;if(x>=h.length-1)return x=0,v.style.transform=`translateX(-${y*x}px)`,(e=document.querySelector(".active-carousel-dot")).classList.remove("active-carousel-dot"),void document.querySelector(".dot").classList.add("active-carousel-dot");x+=1,v.style.transform=`translateX(-${y*x}px)`,(e=document.querySelector(".active-carousel-dot")).classList.remove("active-carousel-dot"),(e=e.parentElement).nextElementSibling.firstChild.classList.add("active-carousel-dot")})),b.addEventListener("click",(()=>{var e,t;if(0==x)return x=h.length-1,v.style.transform=`translateX(-${y*x}px)`,(e=document.querySelector(".active-carousel-dot")).classList.remove("active-carousel-dot"),void(t=document.querySelectorAll(".dot"))[t.length-1].classList.add("active-carousel-dot");x-=1,v.style.transform=`translateX(-${y*x}px)`,(e=document.querySelector(".active-carousel-dot")).classList.remove("active-carousel-dot"),(t=(t=(e=e.parentElement).previousElementSibling).firstChild).classList.add("active-carousel-dot")}))})()})();