(self.webpackChunkcbioportal_frontend=self.webpackChunkcbioportal_frontend||[]).push([[942],{65942:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(88034),o=n(14069),u=n(26942),c=n(71619),i=n(23368);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return f(this,t),s(this,p(t).apply(this,arguments))}var n,a,b;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return r.createElement(o.X,{className:"whiteBackground staticPage"},r.createElement(i.Z,null,r.createElement("title",null,"cBioPortal for Cancer Genomics::Software")),r.createElement(c.Z,{sourceUrl:(0,u.Ib)().skin_documentation_software,title:"Software"}))}}])&&l(n.prototype,a),b&&l(n,b),t}(r.Component)},71619:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(88034),o=n(77906),u=n.n(o),c=n(27808),i=n(18235),a=n(24423),f=n(53542),l=n(80733),s=n(26942),p=n(65587),y=n(36903),b=n(62524);function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?w(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var O=function(e,t,n,r){var o,u=arguments.length,c=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":_(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(u<3?o(c):u>3?o(t,n,c):o(t,n))||c);return u>3&&c&&Object.defineProperty(t,n,c),c},j=function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function c(e){try{a(r.next(e))}catch(e){u(e)}}function i(e){try{a(r.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}a((r=r.apply(e,t||[])).next())}))};function k(e){var t=e.children.filter((function(e){return"string"==typeof e})).join(" ").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z-]/g,"");return r.createElement("h".concat(e.level),{id:t},e.children)}function P(e){var t=/^#/.test(e.href)?e.href.toLowerCase():e.href;return console.log(t),r.createElement("a",{className:"monkey",href:t},e.children)}var E=function(e){function t(){var e;return h(this,t),e=d(this,v(t).apply(this,arguments)),Object.defineProperty(w(e),"source",{enumerable:!0,configurable:!0,writable:!0,value:(0,p.$w)((function(){return j(w(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get(this.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})))}))}),e}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(o=[{key:"content",value:function(e,t){return function(e){return 0==!(0,s.Ib)().skin_documentation_markdown&&/\.md$/.test(e)}(t)?r.createElement(i.default,{components:{h1:k,h2:k,h3:k,h4:k,h5:k,a:P},className:"markdown-body",children:this.source.result,rehypePlugins:[a.default,f.default,l.default]}):r.createElement("div",{dangerouslySetInnerHTML:{__html:e}})}},{key:"render",value:function(){return r.createElement("div",null,this.props.title&&r.createElement("h1",null,this.props.title),r.createElement(y.Z,{isLoading:this.source.isPending,size:"big",center:!0}),this.source.isComplete&&this.content(this.source.result,this.url))}},{key:"url",get:function(){return(0,b.V)(this.props.sourceUrl,(0,s.Ib)().skin_documentation_baseurl)}}])&&m(n.prototype,o),c&&m(n,c),t}(r.Component);const S=E=O([c.observer],E)},53542:(e,t,n)=>{e.exports=n(46179)(6451)},80733:(e,t,n)=>{e.exports=n(46179)(6991)},24423:(e,t,n)=>{e.exports=n(46179)(7877)}}]);