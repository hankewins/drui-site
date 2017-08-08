webpackJsonp([2],{

/***/ "../drui-site/src/drui-www/pages/Post.js":
/*!***********************************************!*\
  !*** ../drui-site/src/drui-www/pages/Post.js ***!
  \***********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_markdown__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/src/react-markdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dr_drui_menu__ = __webpack_require__(/*! @dr/drui-menu */ "../drui-site/src/drui-menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(/*! ../utils */ "../drui-site/src/drui-www/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(/*! ../../../config */ "../drui-site/config.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: row;\n    max-width: 1440px;\n    margin: 0 auto;\n    margin-top: 4.769rem;\n'], ['\n    display: flex;\n    flex-direction: row;\n    max-width: 1440px;\n    margin: 0 auto;\n    margin-top: 4.769rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    flex: 1;\n    background-color: #f8f9fb;\n    padding: 5.154rem 7.923rem;\n\n    h1 {\n        font-size: 32px;\n        color: #333333;\n    }\n\n    h2 {\n        font-size: 19px;\n        color: #333333;\n        margin: 1.385rem 0;\n    }\n\n    hr {\n        border-top: 1px solid #eaedf2;\n        margin: 3.692rem 0;\n    }\n\n    p, li {\n        font-size: 13px;\n        color: #7e848c;\n        line-height: 1.5;\n    }\n'], ['\n    display: flex;\n    flex: 1;\n    background-color: #f8f9fb;\n    padding: 5.154rem 7.923rem;\n\n    h1 {\n        font-size: 32px;\n        color: #333333;\n    }\n\n    h2 {\n        font-size: 19px;\n        color: #333333;\n        margin: 1.385rem 0;\n    }\n\n    hr {\n        border-top: 1px solid #eaedf2;\n        margin: 3.692rem 0;\n    }\n\n    p, li {\n        font-size: 13px;\n        color: #7e848c;\n        line-height: 1.5;\n    }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);
// add markdown style define here
var Body = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject2);

var Post = function (_React$PureComponent) {
    _inherits(Post, _React$PureComponent);

    function Post() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Post);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Post.__proto__ || Object.getPrototypeOf(Post)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            content: '# 加载中...'
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Post, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.scrollTo(0, 0);
            var _props$params = this.props.params,
                cate = _props$params.cate,
                sub = _props$params.sub;

            var content = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* findContent */])(cate, sub);
            this.setState({ content: content });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                Container,
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__dr_drui_menu__["a" /* Menu */], { menu: __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */], params: this.props.params }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Body,
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_markdown___default.a, { source: this.state.content })
                )
            );
        }
    }]);

    return Post;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

});
//# sourceMappingURL=2.drui-www.split.js.map