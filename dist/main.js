(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.main-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 5em;\r\n}\r\n\r\n.todo-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  border: 1px solid rgba(0, 0, 0, 0.411);\r\n  font-size: 1.4em;\r\n  padding: 0.4em;\r\n}\r\n\r\n.input-box {\r\n  padding: 1em;\r\n  border: 1px solid rgba(0, 0, 0, 0.411);\r\n  width: 50%;\r\n  font-size: 1em;\r\n}\r\n\r\n.main-div h2 {\r\n  margin-right: 9em;\r\n}\r\n\r\nul {\r\n  width: 50%;\r\n}\r\n\r\nul li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 2em;\r\n  border: 1px solid rgba(0, 0, 0, 0.411);\r\n  padding: 0.5em;\r\n}\r\n\r\nul li i {\r\n  color: rgb(80, 80, 80);\r\n}\r\n\r\nul li i:hover {\r\n  cursor: grab;\r\n}\r\n\r\nul li input {\r\n  width: 2em;\r\n  height: 2em;\r\n}\r\n\r\nul li div {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.clear-btn {\r\n  font-size: 2em;\r\n  letter-spacing: 4px;\r\n  font-weight: 400 !important;\r\n  color: rgb(110, 109, 109);\r\n  padding: 0.4em;\r\n  width: 50%;\r\n  cursor: pointer;\r\n  transition: all 0.3s 0s ease-in-out;\r\n}\r\n\r\n.ondrag {\r\n  opacity: 0.5;\r\n}\r\n\r\n.checked {\r\n  text-decoration-line: line-through;\r\n}\r\n",""]);const o=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],d=0;d<e.length;d++){var s=e[d],c=r.base?s[0]+r.base:s[0],l=o[c]||0,u="".concat(c," ").concat(l);o[c]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(n[p].references++,n[p].updater(f)):n.push({identifier:u,updater:i(f,r),references:1}),a.push(u)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var d=t(o[a]);n[d].references--}for(var s=r(e,i),c=0;c<o.length;c++){var l=t(o[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=()=>{document.querySelectorAll(".list").forEach((e=>{e.addEventListener("dragstart",(n=>{e.classList.add("ondrag"),n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("id",e.id)})),e.addEventListener("drop",(n=>{n.preventDefault(),n.dataTransfer.effectAllowed="move";const t=n.dataTransfer.getData("id"),r=e.id;localStorage.setItem("list",JSON.stringify(o)),localStorage.length>0?l(t,r):u(t,r),localStorage.setItem("list",JSON.stringify(o))})),e.addEventListener("dragend",(()=>{e.classList.remove("ondrag")})),e.addEventListener("dragover",(e=>{e.preventDefault()}))}))},n=()=>{document.querySelectorAll(".list").forEach((e=>{e.children[0].children[0].addEventListener("change",(()=>{const n=d.find((n=>n.id===Number(e.id)));n.completed=!n.completed,n.completed?e.classList.add("checked"):e.classList.remove("checked")}))}))},r=()=>{document.querySelectorAll(".list").forEach((e=>{e.children[0].children[0].addEventListener("change",(()=>{const n=o.find((n=>n.id===Number(e.id)));n.completed=!n.completed,n.completed?e.classList.add("checked"):e.classList.remove("checked")}))}))},i=document.querySelector(".the-list"),o=[];localStorage.length<1?(o=[{id:0,description:"do stuff 1",completed:!1,index:0},{id:1,description:"do stuff 2",completed:!1,index:1},{id:2,description:"do stuff 3",completed:!1,index:2},{id:3,description:"do stuff 4",completed:!1,index:3}],localStorage.setItem("list",JSON.stringify(o))):o=JSON.parse(localStorage.getItem("list"));const a=(e,n,t)=>{const r=document.createElement("li");r.id=t,r.classList.add("list"),r.setAttribute("draggable","true"),n&&r.classList.add("checked");const o=document.createElement("p");o.classList.add("text");const a=document.createElement("i"),d=document.createElement("div");o.innerHTML=e;const s=document.createElement("input");s.setAttribute("type","checkbox"),s.classList.add("checkbox"),a.setAttribute("class","fas fa-ellipsis-v"),s.checked=n,d.appendChild(s),d.appendChild(o),r.appendChild(d),r.appendChild(a),i.appendChild(r)},d=JSON.parse(localStorage.getItem("list")),s=()=>{i.innerHTML="",d.sort(((e,n)=>e.index-n.index)).forEach((e=>{a(e.description,e.completed,e.id)})),e(),localStorage>0?n():r()},c=()=>{i.innerHTML="",o.sort(((e,n)=>e.index-n.index)).forEach((e=>{a(e.description,e.completed,e.id)})),e(),e(),localStorage>0?n():r()},l=(e,n)=>{d=JSON.parse(localStorage.getItem("list"));const t=d.find((n=>n.id===Number(e))),r=d.find((e=>e.id===Number(n))),i=t.index;console.log(o);const a=o[i].id,l=o[i].description,u=o[i].completed;o[i].id=o[r.index].id,o[i].description=o[r.index].description,o[i].completed=o[r.index].completed,o[r.index].id=a,o[r.index].description=l,o[r.index].completed=u,console.log(o),localStorage.setItem("list",JSON.stringify(o)),d=JSON.parse(localStorage.getItem("list")),t.index=r.index,r.index=i,localStorage.length>0?s():c()},u=(e,n)=>{const t=o.find((n=>n.id===Number(e))),r=o.find((e=>e.id===Number(n)));console.log(t);const i=t.index;t.index=r.index,r.index=i,localStorage.length>0?s():c()};localStorage.length>0?s():c();var p=t(379),f=t.n(p),m=t(795),g=t.n(m),h=t(569),v=t.n(h),x=t(565),b=t.n(x),y=t(216),S=t.n(y),E=t(589),L=t.n(E),N=t(426),w={};w.styleTagTransform=L(),w.setAttributes=b(),w.insert=v().bind(null,"head"),w.domAPI=g(),w.insertStyleElement=S(),f()(N.Z,w),N.Z&&N.Z.locals&&N.Z.locals})()})();