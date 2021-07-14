(()=>{"use strict";var e={426:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(645),i=r.n(t)()((function(e){return e[1]}));i.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.main-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 5em;\r\n}\r\n\r\n.todo-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  border: 1px solid rgba(0, 0, 0, 0.411);\r\n  font-size: 1.4em;\r\n  padding: 0.4em;\r\n}\r\n\r\n.ibput-box {\r\n  padding: 1em;\r\n  border: 1px solid rgba(0, 0, 0, 0.411);\r\n  width: 50%;\r\n  font-size: 1em;\r\n}\r\n\r\n.main-div h2 {\r\n  margin-right: 9em;\r\n}\r\n\r\nul {\r\n  width: 50%;\r\n}\r\n\r\nul li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 2em;\r\n  border: 1px solid rgba(0, 0, 0, 0.411);\r\n  padding: 0.5em;\r\n}\r\n\r\nul li p {\r\n  padding: 0 9em 0 1em;\r\n}\r\n\r\nul li i {\r\n  color: rgb(80, 80, 80);\r\n}\r\n\r\nul li i:hover {\r\n  cursor: all-scroll;\r\n}\r\n\r\nul li input {\r\n  width: 2em;\r\n  height: 2em;\r\n}\r\n\r\nul li div {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.clear-btn {\r\n  font-size: 2em;\r\n  letter-spacing: 4px;\r\n  font-weight: 400 !important;\r\n  color: rgb(110, 109, 109);\r\n  padding: 0.4em;\r\n  width: 50%;\r\n  cursor: pointer;\r\n  transition: all 0.3s 0s ease-in-out;\r\n}\r\n",""]);const o=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(t)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);t&&i[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),n.push(c))}},n}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],d=t.base?c[0]+t.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=r(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(n[p].references++,n[p].updater(f)):n.push({identifier:u,updater:i(f,t),references:1}),a.push(u)}return a}function i(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r.update(e=n)}else r.remove()}}e.exports=function(e,i){var o=t(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=r(o[a]);n[s].references--}for(var c=t(e,i),d=0;d<o.length;d++){var l=r(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t=r.css,i=r.media,o=r.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,e)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,r),o.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=r(379),n=r.n(e),t=r(795),i=r.n(t),o=r(569),a=r.n(o),s=r(565),c=r.n(s),d=r(216),l=r.n(d),u=r(589),p=r.n(u),f=r(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".the-list");[{description:"do stuff 11",completed:!1,index:0},{description:"do stuff 2",completed:!1,index:1},{description:"do stuff 3",completed:!1,index:2},{description:"do stuff 4",completed:!1,index:3}].forEach((e=>{((e,n)=>{const r=document.createElement("li"),t=document.createElement("p"),i=document.createElement("i"),o=document.createElement("div");t.innerHTML=e;const a=document.createElement("input");a.setAttribute("type","checkbox"),i.setAttribute("class","fas fa-ellipsis-v"),a.checked=n,o.appendChild(a),o.appendChild(t),r.appendChild(o),r.appendChild(i),h.appendChild(r)})(e.description,e.completed)}))})()})();