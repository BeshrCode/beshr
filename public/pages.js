(()=>{"use strict";var t={643:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(671),o=n(144),i=function(){function t(){(0,r.Z)(this,t)}return(0,o.Z)(t,[{key:"onReady",value:function(){}},{key:"registerEvents",value:function(){}},{key:"initiate",value:function(t){if(t&&!t.includes(salla.config.get("page.slug")))return app.log("The Class For (".concat(t.join(","),") Skipped."));this.onReady(),this.registerEvents(),app.log("The Class For (".concat((null==t?void 0:t.join(","))||"*",") Loaded🎉"))}}]),t}();i.initiateWhenReady=function(){var t,e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;"ready"===(null===(t=window.app)||void 0===t?void 0:t.status)?(new this).initiate(n):document.addEventListener("theme::ready",(function(){return(new e).initiate(n)}))};const a=i},326:(t,e,n)=>{function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:()=>r})},671:(t,e,n)=>{function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:()=>r})},144:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(343);function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(0,r.Z)(o.key),o)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}},120:(t,e,n)=>{function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}n.d(e,{Z:()=>r})},136:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(611);function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,r.Z)(t,e)}},963:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(2),o=n(326);function i(t,e){if(e&&("object"===(0,r.Z)(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(t)}},611:(t,e,n)=>{function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}n.d(e,{Z:()=>r})},512:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(2);function o(t,e){if("object"!=(0,r.Z)(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=(0,r.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}},343:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(2),o=n(512);function i(t){var e=(0,o.Z)(t,"string");return"symbol"==(0,r.Z)(e)?e:String(e)}},2:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n.d(e,{Z:()=>r})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(671),e=n(144),r=n(963),o=n(120),i=n(136);function a(t,e,n){return e=(0,o.Z)(e),(0,r.Z)(t,u()?Reflect.construct(e,n||[],(0,o.Z)(t).constructor):e.apply(t,n))}function u(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(u=function(){return!!t})()}(function(n){function r(){return(0,t.Z)(this,r),a(this,r,arguments)}return(0,i.Z)(r,n),(0,e.Z)(r,[{key:"onReady",value:function(){var t,e=(null===(t=app.element(".count-anime"))||void 0===t||null===(t=t.dataset)||void 0===t?void 0:t.count)||0;(new anime.timeline).add({targets:".loyality-item",opacity:[0,1],translateX:[20,0],delay:function(t,e){return 100*e}}).add({targets:".star-anime",opacity:[0,1],rotate:[50,0],duration:4e3,delay:function(t,e){return 100*e}},"-=1000").add({targets:".count-anime",innerText:[0,e],duration:2e3,easing:"linear",round:!0,delay:function(t,e){return 150*e}},"-=3700").add({targets:".btn-anime",opacity:[0,1],duration:2e3,translateX:[20,0],delay:function(t,e){return 100*e}},"-=3200")}}]),r})(n(643).Z).initiateWhenReady(["loyalty"])})(),(()=>{var t=n(671),e=n(144),r=n(963),o=n(120),i=n(136);function a(t,e,n){return e=(0,o.Z)(e),(0,r.Z)(t,u()?Reflect.construct(e,n||[],(0,o.Z)(t).constructor):e.apply(t,n))}function u(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(u=function(){return!!t})()}(function(n){function r(){return(0,t.Z)(this,r),a(this,r,arguments)}return(0,i.Z)(r,n),(0,e.Z)(r,[{key:"onReady",value:function(){var t=document.querySelector("#brands-nav");document.querySelector(".brands-nav-wrap").style.height=t.clientHeight+"px",app.onClick(".brands-nav__item",(function(t){var e=t.target;app.all(".brands-nav__item",(function(t){return app.toggleElementClassIf(t,"is-selected","unselected",(function(){return t==e}))}))})),window.addEventListener("scroll",(function(){var t=window.pageYOffset<=200;app.toggleClassIf("#brands-nav","is-not-sticky","is-sticky",(function(){return t}))}))}}]),r})(n(643).Z).initiateWhenReady(["brands.index"])})()})();