(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1340:function(e,t,n){},497:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var r=n(0),o=n(157),u=n(2),i=n(741),c=(n(1340),n(160)),a=n.n(c);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"==typeof Symbol&&"symbol"===f(Symbol.iterator)?function(e){return f(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":f(e)})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,y(t).apply(this,arguments))}var n,c,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),n=t,(c=[{key:"render",value:function(){return r.createElement(o.a,{className:"whiteBackground staticPage newsPage"},r.createElement(a.a,null,r.createElement("title",null,"cBioPortal for Cancer Genomics::News")),r.createElement(i.a,{sourceUrl:u.b.serverConfig.skin_documentation_news,title:"News"}),r.createElement("a",{id:"releasesLink",href:"https://github.com/cBioPortal/cbioportal/releases"},"Release notes"))}}])&&l(n.prototype,c),f&&l(n,f),t}()},741:function(e,t,n){"use strict";var r=n(0),o=n(10),u=n.n(o),i=n(18),c=n(881),a=n.n(c),f=n(2),s=n(54),l=n(67),p=n(15);n(743);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var w=function(e,t,n,r){var o,u=arguments.length,i=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":d(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(u<3?o(i):u>3?o(t,n,i):o(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},v=function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function i(e){try{a(r.next(e))}catch(e){u(e)}}function c(e){try{a(r.throw(e))}catch(e){u(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,c)}a((r=r.apply(e,t||[])).next())})};var g=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=b(t).apply(this,arguments),(e=!r||"object"!==d(r)&&"function"!=typeof r?m(n):r).source=Object(s.b)(function(){return v(m(e),void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(this.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))}),e}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),n=t,(o=[{key:"content",value:function(e,t){return function(e){return 0==!f.b.serverConfig.skin_documentation_markdown&&/\.md$/.test(e)}(t)?r.createElement(a.a,{renderers:this.props.renderers||{},className:"markdown-body",escapeHtml:!1,source:this.source.result}):r.createElement("div",{dangerouslySetInnerHTML:{__html:e}})}},{key:"render",value:function(){return r.createElement("div",null,this.props.title&&r.createElement("h1",null,this.props.title),r.createElement(l.a,{isLoading:this.source.isPending,size:"big",center:!0}),this.source.isComplete&&this.content(this.source.result,this.url))}},{key:"url",get:function(){return Object(p.m)(this.props.sourceUrl,f.b.serverConfig.skin_documentation_baseurl)}}])&&y(n.prototype,o),i&&y(n,i),t}();g=w([i.observer],g),t.a=g},743:function(e,t,n){}}]);