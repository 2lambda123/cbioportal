(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{553:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var r=n(0),o=n(179),u=n(181),c=n.n(u),i=n(698);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"==typeof Symbol&&"symbol"===f(Symbol.iterator)?function(e){return f(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":f(e)})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,p(t).apply(this,arguments))}var n,u,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(u=[{key:"render",value:function(){return r.createElement(o.a,{className:"whiteBackground staticPage"},r.createElement(c.a,null,r.createElement("title",null,"cBioPortal for Cancer Genomics::R/MATLAB")),r.createElement(i.a,{sourceUrl:"RMatlab.md",title:"R/Matlab"}))}}])&&l(n.prototype,u),f&&l(n,f),t}()},698:function(e,t,n){"use strict";var r=n(0),o=n(11),u=n.n(o),c=n(7),i=n(779),f=n.n(i),a=n(6),l=n(3),s=n(101),p=n(15);n(699);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var v=function(e,t,n,r){var o,u=arguments.length,c=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":d(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(u<3?o(c):u>3?o(t,n,c):o(t,n))||c);return u>3&&c&&Object.defineProperty(t,n,c),c},w=function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function c(e){try{f(r.next(e))}catch(e){u(e)}}function i(e){try{f(r.throw(e))}catch(e){u(e)}}function f(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(c,i)}f((r=r.apply(e,t||[])).next())})};var g=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=b(t).apply(this,arguments),(e=!r||"object"!==d(r)&&"function"!=typeof r?m(n):r).source=Object(l.S)(function(){return w(m(e),void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(this.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))}),e}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),n=t,(o=[{key:"content",value:function(e,t){return function(e){return 0==!a.b.serverConfig.skin_documentation_markdown&&/\.md$/.test(e)}(t)?r.createElement(f.a,{renderers:this.props.renderers||{},className:"markdown-body",escapeHtml:!1,source:this.source.result}):r.createElement("div",{dangerouslySetInnerHTML:{__html:e}})}},{key:"render",value:function(){return r.createElement("div",null,this.props.title&&r.createElement("h1",null,this.props.title),r.createElement(s.a,{isLoading:this.source.isPending,size:"big",center:!0}),this.source.isComplete&&this.content(this.source.result,this.url))}},{key:"url",get:function(){return Object(p.l)(this.props.sourceUrl,a.b.serverConfig.skin_documentation_baseurl)}}])&&y(n.prototype,o),c&&y(n,c),t}();g=v([c.observer],g),t.a=g},699:function(e,t,n){}}]);