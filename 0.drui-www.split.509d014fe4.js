webpackJsonp([0],{ye92:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function i(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=t("U7vG"),c=t.n(a),l=t("VEsJ"),u=t("PNJt"),f=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),d=function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n    background-color: #f8f9fb;\n    padding: 5.154rem 7.923rem;\n    overflow-y: scroll;\n    width: 100%;\n\n    &::-webkit-scrollbar {\n        width: .6154rem;\n        background-color: #f8f9fb;\n    }\n    &::-webkit-scrollbar-button {\n        display: none;\n    }\n    &::-webkit-scrollbar-thumb {\n        width: .6145rem;\n        background-color: #e4e4e4;\n        border-radius: 8px;\n    }\n\n    h1 {\n        font-size: 32px;\n        color: #333333;\n    }\n\n    h1, h2, h3, h4, h5, h6 {\n        font-weight: 400;\n        clear: both;\n    }\n\n    ol {\n        padding-left: 1rem;\n    }\n\n    h2 {\n        font-size: 19px;\n        color: #333333;\n        margin: 1.385rem 0;\n    }\n\n    hr {\n        border-top: 1px solid #eaedf2;\n        margin: 3.692rem 0;\n    }\n\n    p, li {\n        font-size: 13px;\n        color: #7e848c;\n        line-height: 1.8;\n        margin: .5rem 0;\n    }\n\n    a {\n        color: #00bc8d;\n        text-decoration: none;\n        &:visited {\n            color: #00bc8d;\n        }\n    }\n\n    blockquote {\n        background-color: #eee;\n        border-left: .4em solid #e4e4e4;\n        margin: 1em 0 1em 0;\n        padding: .4em .4em;\n    }\n"],["\n    background-color: #f8f9fb;\n    padding: 5.154rem 7.923rem;\n    overflow-y: scroll;\n    width: 100%;\n\n    &::-webkit-scrollbar {\n        width: .6154rem;\n        background-color: #f8f9fb;\n    }\n    &::-webkit-scrollbar-button {\n        display: none;\n    }\n    &::-webkit-scrollbar-thumb {\n        width: .6145rem;\n        background-color: #e4e4e4;\n        border-radius: 8px;\n    }\n\n    h1 {\n        font-size: 32px;\n        color: #333333;\n    }\n\n    h1, h2, h3, h4, h5, h6 {\n        font-weight: 400;\n        clear: both;\n    }\n\n    ol {\n        padding-left: 1rem;\n    }\n\n    h2 {\n        font-size: 19px;\n        color: #333333;\n        margin: 1.385rem 0;\n    }\n\n    hr {\n        border-top: 1px solid #eaedf2;\n        margin: 3.692rem 0;\n    }\n\n    p, li {\n        font-size: 13px;\n        color: #7e848c;\n        line-height: 1.8;\n        margin: .5rem 0;\n    }\n\n    a {\n        color: #00bc8d;\n        text-decoration: none;\n        &:visited {\n            color: #00bc8d;\n        }\n    }\n\n    blockquote {\n        background-color: #eee;\n        border-left: .4em solid #e4e4e4;\n        margin: 1em 0 1em 0;\n        padding: .4em .4em;\n    }\n"]),s=l.a.div(d),b=function(n){function e(){var n,t,i,a;o(this,e);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return t=i=r(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(l))),i.state={content:"<h1>加载中...</h1>"},i.jump=function(n){var e=n.target;if("A"===e.tagName.toUpperCase()){var t=e.getAttribute("href");if(0===t.indexOf("#")&&-1===t.indexOf("#/")){var o=document.querySelector('[data-id="'+decodeURIComponent(t)+'"]');return o&&o.scrollIntoView(),void n.preventDefault()}}},a=t,r(i,a)}return i(e,n),f(e,[{key:"componentDidMount",value:function(){var n=this.props.params,e=n.cate,t=n.sub;this.loadContent(e,t),window.addEventListener("click",this.jump)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.jump)}},{key:"loadContent",value:function(n,e){var t=this,o=Object(u.b)(n,e);o||this.loadError(),fetch(o).then(function(n){return n.text()}).then(u.a).then(function(n){return n.includes("<!DOCTYPE html>")?Promise.reject(404):n}).then(function(n){t.setState({content:n})}).catch(function(n){t.loadError()})}},{key:"componentWillReceiveProps",value:function(n){var e=this.props.params,t=e.cate,o=e.sub,r=n.params,i=r.cate,a=r.sub;t===i&&o===a||this.loadContent(i,a)}},{key:"loadError",value:function(){this.setState({content:"<h1>暂时还没有内容，敬请期待...</h1>"})}},{key:"render",value:function(){return c.a.createElement(s,{dangerouslySetInnerHTML:{__html:this.state.content}})}}]),e}(c.a.Component);e.default=b}});