(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1363:function(e,t,n){},772:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var r=n(0),o=n(290),u=(n(1363),n(8)),i=n(808),c=n(291),f=n.n(c);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,y(t).apply(this,arguments))}var n,c,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),n=t,(c=[{key:"render",value:function(){return r.createElement(o.a,{className:"whiteBackground staticPage"},r.createElement(f.a,null,r.createElement("title",null,"cBioPortal for Cancer Genomics::About Us")),r.createElement(i.a,{sourceUrl:u.b.serverConfig.skin_documentation_about,title:"About Us"}))}}])&&s(n.prototype,c),a&&s(n,a),t}()},808:function(e,t,n){"use strict";var r=n(0),o=n(17),u=n.n(o),i=n(9),c=n(854),f=n.n(c),a=n(8),l=n(3),s=n(66),p=n(18);n(809);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var v=function(e,t,n,r){var o,u=arguments.length,i=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":d(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(u<3?o(i):u>3?o(t,n,i):o(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},w=function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function i(e){try{f(r.next(e))}catch(e){u(e)}}function c(e){try{f(r.throw(e))}catch(e){u(e)}}function f(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,c)}f((r=r.apply(e,t||[])).next())})};var g=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=b(t).apply(this,arguments),(e=!r||"object"!==d(r)&&"function"!=typeof r?m(n):r).source=Object(l.T)(function(){return w(m(e),void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(this.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))}),e}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),n=t,(o=[{key:"content",value:function(e,t){return function(e){return 0==!a.b.serverConfig.skin_documentation_markdown&&/\.md$/.test(e)}(t)?r.createElement(f.a,{renderers:this.props.renderers||{},className:"markdown-body",escapeHtml:!1,source:this.source.result}):r.createElement("div",{dangerouslySetInnerHTML:{__html:e}})}},{key:"render",value:function(){return r.createElement("div",null,this.props.title&&r.createElement("h1",null,this.props.title),r.createElement(s.a,{isLoading:this.source.isPending,size:"big",center:!0}),this.source.isComplete&&this.content(this.source.result,this.url))}},{key:"url",get:function(){return Object(p.l)(this.props.sourceUrl,a.b.serverConfig.skin_documentation_baseurl)}}])&&y(n.prototype,o),i&&y(n,i),t}();g=v([i.observer],g),t.a=g},809:function(e,t,n){}}]);