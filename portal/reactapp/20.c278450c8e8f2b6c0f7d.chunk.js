(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1341:function(e,t,n){},500:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n(0),o=n(157),i=n(2),u=n(709),c=n(160),a=n.n(c);n(1341);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"==typeof Symbol&&"symbol"===f(Symbol.iterator)?function(e){return f(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":f(e)})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function b(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v={heading:function(e){function t(){return s(this,t),b(this,m(t).apply(this,arguments))}return h(t,r["Component"]),y(t,[{key:"render",value:function(){var e="h".concat(this.props.level),t=this.props.children[0],n=t&&"string"==typeof t?t:"",o=n.toLowerCase().replace(/\s/g,"-").replace(/[\W]/g,function(e){return/-/.test(e)?e:""}),i=this.props.level>1?r.createElement("a",{href:"#pageTop",title:"Return to top"},r.createElement("i",{className:"fa fa-arrow-circle-up"})):"";return r.createElement(e,{id:o},n," ",i)}}]),t}()},g=function(e){function t(){return s(this,t),b(this,m(t).apply(this,arguments))}return h(t,r["Component"]),y(t,[{key:"render",value:function(){return r.createElement(o.a,{className:"whiteBackground staticPage faqPage"},r.createElement(a.a,null,r.createElement("title",null,"cBioPortal for Cancer Genomics::FAQ")),r.createElement("a",{id:"pageTop"}),r.createElement(u.a,{sourceUrl:i.b.serverConfig.skin_documentation_faq,title:"FAQs",renderers:v}))}}]),t}()},709:function(e,t,n){"use strict";var r=n(0),o=n(10),i=n.n(o),u=n(18),c=n(815),a=n.n(c),f=n(2),l=n(54),s=n(67),p=n(15);n(710);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var v=function(e,t,n,r){var o,i=arguments.length,u=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":d(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(u=(i<3?o(u):i>3?o(t,n,u):o(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u},g=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,c)}a((r=r.apply(e,t||[])).next())})};var w=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=b(t).apply(this,arguments),(e=!r||"object"!==d(r)&&"function"!=typeof r?m(n):r).source=Object(l.b)(function(){return g(m(e),void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get(this.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))}),e}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),n=t,(o=[{key:"content",value:function(e,t){return function(e){return 0==!f.b.serverConfig.skin_documentation_markdown&&/\.md$/.test(e)}(t)?r.createElement(a.a,{renderers:this.props.renderers||{},className:"markdown-body",escapeHtml:!1,source:this.source.result}):r.createElement("div",{dangerouslySetInnerHTML:{__html:e}})}},{key:"render",value:function(){return r.createElement("div",null,this.props.title&&r.createElement("h1",null,this.props.title),r.createElement(s.a,{isLoading:this.source.isPending,size:"big",center:!0}),this.source.isComplete&&this.content(this.source.result,this.url))}},{key:"url",get:function(){return Object(p.m)(this.props.sourceUrl,f.b.serverConfig.skin_documentation_baseurl)}}])&&y(n.prototype,o),u&&y(n,u),t}();w=v([u.observer],w),t.a=w},710:function(e,t,n){}}]);