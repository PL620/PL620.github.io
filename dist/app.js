(()=>{"use strict";var n={124:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(657),r=t.n(o),i=t(483),a=t.n(i)()(r());a.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  color: #999;\n  text-decoration: none;\n  color: #707070;\n  font-size: 14px;\n}\n.center {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n}\nbody {\n  background-color: #1d2228;\n}\n.box .header {\n  max-width: 1200px;\n  overflow: hidden;\n  padding: 0 25px;\n  position: relative;\n  z-index: 11;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  justify-content: space-between;\n}\n.box .header h1 {\n  height: 67px;\n  padding-top: 6px;\n  width: 243px;\n  display: flex;\n  align-items: center;\n  float: left;\n  background-color: transparent;\n}\n.box .header h1 img {\n  width: 243px;\n  height: 33px;\n}\n.box .header ul {\n  background-color: transparent;\n  height: 67px;\n  display: flex;\n  float: right;\n}\n.box .header ul li {\n  height: 67px;\n  line-height: 67px;\n  background-color: transparent;\n  margin: 0 20px;\n  position: relative;\n}\n.box .header ul li a {\n  padding: 0 14px;\n}\n.box .header ul li::after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #1170e8;\n  bottom: 0px;\n  position: absolute;\n  opacity: 0;\n  transition: 0.5s;\n}\n.box .header ul .active {\n  transition: 2s;\n  position: relative;\n}\n.box .header ul .active a {\n  color: #1170e8;\n  font-weight: bold;\n}\n.box .header ul .active::after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #1170e8;\n  bottom: 0px;\n  position: absolute;\n  opacity: 1 !important;\n}\n.box .banner {\n  width: 100%;\n  height: 85vh;\n  margin-top: -10px;\n  overflow: hidden;\n  z-index: 10;\n  transform: translateY(-67px);\n}\n.box .banner .swiper {\n  width: 100%;\n  height: 100%;\n}\n.box .banner .swiper .swiper-wrapper .swiper-slide img {\n  width: 100vw;\n  height: 85vh;\n}\n.box .banner .swiper .swiper-button-next {\n  background: none !important;\n  right: 180px !important;\n}\n.box .banner .swiper .swiper-button-next img {\n  width: 100px;\n  height: auto;\n  opacity: 0;\n  transition: 1s;\n}\n.box .banner .swiper .swiper-button-next img:hover {\n  opacity: 1;\n}\n.box .banner .swiper .swiper-button-prev {\n  background: none !important;\n  left: 100px !important;\n}\n.box .banner .swiper .swiper-button-prev img {\n  width: 100px;\n  height: auto;\n  opacity: 0;\n  transition: 1s;\n}\n.box .banner .swiper .swiper-button-prev img:hover {\n  opacity: 1;\n}\n.box .nav {\n  max-width: 80vw;\n  height: 190px;\n  margin: 0 auto;\n  border-radius: 20px;\n  transform: translateY(-130px);\n  position: relative;\n  padding: 0 170px;\n  box-sizing: border-box;\n}\n.box .nav > img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.box .nav .cont {\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  padding-left: 60px;\n}\n.box .nav .cont .item .num {\n  color: #fe823c;\n  font-size: 35px;\n  font-weight: bold;\n  height: 85px;\n  line-height: 90px;\n  position: relative;\n}\n.box .nav .cont .item .num::after {\n  content: '';\n  display: block;\n  width: 26px;\n  height: 4px;\n  position: absolute;\n  bottom: 10px;\n  background-color: #ffffff;\n}\n.box .nav .cont .item p {\n  color: #fff;\n  line-height: 25px;\n}\n",""]);const s=a},420:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(657),r=t.n(o),i=t(483),a=t.n(i)()(r());a.push([n.id,".center {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n}\n@media all and (max-width: 1030px) {\n  .header {\n    max-width: 100%;\n    display: flex;\n    margin: 0 auto;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: auto;\n  }\n  .banner {\n    transform: translateY(-134px) !important;\n  }\n  .nav {\n    width: 90vw !important;\n    transform: translateY(-200px) !important;\n  }\n}\n",""]);const s=a},483:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(a[p]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},657:n=>{n.exports=function(n){return n[1]}},906:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var p=n[s],c=o.base?p[0]+o.base:p[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var u=t(d),h={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=r(h,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var p=o(n,r),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=p}}},486:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},102:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},918:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},814:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},653:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(906),e=t.n(n),o=t(814),r=t.n(o),i=t(486),a=t.n(i),s=t(918),p=t.n(s),c=t(102),l=t.n(c),d=t(653),u=t.n(d),h=t(124),f={};f.styleTagTransform=u(),f.setAttributes=p(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var x=t(420),b={};b.styleTagTransform=u(),b.setAttributes=p(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=l(),e()(x.Z,b),x.Z&&x.Z.locals&&x.Z.locals,window.onload=function(){$(".box .header li").on("mouseenter",(function(){$(this).addClass("active").siblings().removeClass("active")})),new Swiper(".swiper",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),$(".box .nav .item .num").each((function(n,e){var t=parseInt(e.innerHTML),o=0,r=setInterval((()=>{o+=2,e.innerHTML=o+"+",o>=t&&clearInterval(r)}),20)}))}})()})();