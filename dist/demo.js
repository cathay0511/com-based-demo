/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* Scroll down to reach playground: */
/** @jsx createElement */
var createElement = function createElement(type, props) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    if (props === null) props = {};
    return { type: type, props: props, children: children };
};

var setAttribute = function setAttribute(dom, key, value) {
    if (typeof value == 'function' && key.startsWith('on')) {
        var eventType = key.slice(2).toLowerCase();
        dom.__gooactHandlers = dom.__gooactHandlers || {};
        dom.removeEventListener(eventType, dom.__gooactHandlers[eventType]);
        dom.__gooactHandlers[eventType] = value;
        dom.addEventListener(eventType, dom.__gooactHandlers[eventType]);
    } else if (key == 'checked' || key == 'value' || key == 'className') {
        dom[key] = value;
    } else if (key == 'style' && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
        Object.assign(dom.style, value);
    } else if (key == 'ref' && typeof value == 'function') {
        value(dom);
    } else if (key == 'key') {
        dom.__gooactKey = value;
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' && typeof value != 'function') {
        dom.setAttribute(key, value);
    }
};

var _render = function _render(vdom) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var mount = parent ? function (el) {
        return parent.appendChild(el);
    } : function (el) {
        return el;
    };
    if (typeof vdom == 'string' || typeof vdom == 'number') {
        return mount(document.createTextNode(vdom));
    } else if (typeof vdom == 'boolean' || vdom === null) {
        return mount(document.createTextNode(''));
    } else if ((typeof vdom === 'undefined' ? 'undefined' : _typeof(vdom)) == 'object' && typeof vdom.type == 'function') {
        return Component.render(vdom, parent);
    } else if ((typeof vdom === 'undefined' ? 'undefined' : _typeof(vdom)) == 'object' && typeof vdom.type == 'string') {
        var dom = mount(document.createElement(vdom.type));
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = (_ref = [/* flatten */]).concat.apply(_ref, _toConsumableArray(vdom.children))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _ref;

                var child = _step.value;

                _render(child, dom);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        for (var prop in vdom.props) {
            setAttribute(dom, prop, vdom.props[prop]);
        }return dom;
    } else {
        throw new Error('Invalid VDOM: ' + vdom + '.');
    }
};

var _patch = function _patch(dom, vdom) {
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : dom.parentNode;

    var replace = parent ? function (el) {
        return parent.replaceChild(el, dom) && el;
    } : function (el) {
        return el;
    };
    if ((typeof vdom === 'undefined' ? 'undefined' : _typeof(vdom)) == 'object' && typeof vdom.type == 'function') {
        return Component.patch(dom, vdom, parent);
    } else if ((typeof vdom === 'undefined' ? 'undefined' : _typeof(vdom)) != 'object' && dom instanceof Text) {
        return dom.textContent != vdom ? replace(_render(vdom, parent)) : dom;
    } else if ((typeof vdom === 'undefined' ? 'undefined' : _typeof(vdom)) == 'object' && dom instanceof Text) {
        return replace(_render(vdom, parent));
    } else if ((typeof vdom === 'undefined' ? 'undefined' : _typeof(vdom)) == 'object' && dom.nodeName != vdom.type.toUpperCase()) {
        return replace(_render(vdom, parent));
    } else if ((typeof vdom === 'undefined' ? 'undefined' : _typeof(vdom)) == 'object' && dom.nodeName == vdom.type.toUpperCase()) {
        var _ref2, _ref3;

        var pool = {};
        var active = document.activeElement;
        (_ref2 = []).concat.apply(_ref2, _toConsumableArray(dom.childNodes)).map(function (child, index) {
            var key = child.__gooactKey || '__index_' + index;
            pool[key] = child;
        });
        (_ref3 = []).concat.apply(_ref3, _toConsumableArray(vdom.children)).map(function (child, index) {
            var key = child.props && child.props.key || '__index_' + index;
            dom.appendChild(pool[key] ? _patch(pool[key], child) : _render(child, dom));
            delete pool[key];
        });
        for (var key in pool) {
            var instance = pool[key].__gooactInstance;
            if (instance) instance.componentWillUnmount();
            pool[key].remove();
        }
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = dom.attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var attr = _step2.value;
                dom.removeAttribute(attr.name);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        for (var prop in vdom.props) {
            setAttribute(dom, prop, vdom.props[prop]);
        }active.focus();
        return dom;
    }
};

var Component = function () {
    function Component(props) {
        _classCallCheck(this, Component);

        this.props = props || {};
        this.state = null;
    }

    _createClass(Component, [{
        key: 'setState',
        value: function setState(nextState) {
            if (this.base && this.shouldComponentUpdate(this.props, nextState)) {
                var prevState = this.state;
                this.componentWillUpdate(this.props, nextState);
                this.state = nextState;
                _patch(this.base, this.render());
                this.componentDidUpdate(this.props, prevState);
            } else {
                this.state = nextState;
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps != this.props || nextState != this.state;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            return undefined;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            return undefined;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            return undefined;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            return undefined;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            return undefined;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            return undefined;
        }
    }], [{
        key: 'render',
        value: function render(vdom) {
            var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var props = Object.assign({}, vdom.props, { children: vdom.children });
            if (Component.isPrototypeOf(vdom.type)) {
                var instance = new vdom.type(props);
                instance.componentWillMount();
                instance.base = _render(instance.render(), parent);
                instance.base.__gooactInstance = instance;
                instance.base.__gooactKey = vdom.props.key;
                instance.componentDidMount();
                return instance.base;
            } else {
                return _render(vdom.type(props), parent);
            }
        }
    }, {
        key: 'patch',
        value: function patch(dom, vdom) {
            var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : dom.parentNode;

            var props = Object.assign({}, vdom.props, { children: vdom.children });
            if (dom.__gooactInstance && dom.__gooactInstance.constructor == vdom.type) {
                dom.__gooactInstance.componentWillReceiveProps(props);
                dom.__gooactInstance.props = props;
                return _patch(dom, dom.__gooactInstance.render(), parent);
            } else if (Component.isPrototypeOf(vdom.type)) {
                var ndom = Component.render(vdom, parent);
                return parent ? parent.replaceChild(ndom, dom) && ndom : ndom;
            } else if (!Component.isPrototypeOf(vdom.type)) {
                return _patch(dom, vdom.type(props), parent);
            }
        }
    }]);

    return Component;
}();

exports.createElement = createElement;
exports.render = _render;
exports.Component = Component;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React from "react";
// import ReactDOM from "react-dom";
// import { FormContainer } from '../src/index';

// const wrapper = document.getElementById("create-article-form");
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

var React = {
  createElement: _index.createElement
};

var TodoItem = function (_Component) {
  _inherits(TodoItem, _Component);

  function TodoItem() {
    _classCallCheck(this, TodoItem);

    return _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).apply(this, arguments));
  }

  _createClass(TodoItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        { className: "todo__item" },
        React.createElement(
          "span",
          null,
          this.props.text,
          " - "
        ),
        React.createElement(
          "a",
          { href: "#", onClick: this.props.onClick },
          "X"
        )
      );
    }
  }]);

  return TodoItem;
}(_index.Component);

var Todo = function (_Component2) {
  _inherits(Todo, _Component2);

  function Todo(props) {
    _classCallCheck(this, Todo);

    var _this2 = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

    _this2.state = {
      input: '',
      items: []
    };
    _this2.handleAdd('Goal #1');
    _this2.handleAdd('Goal #2');
    _this2.handleAdd('Goal #3');
    return _this2;
  }

  _createClass(Todo, [{
    key: "handleInput",
    value: function handleInput(e) {
      this.setState({
        input: e.target.value,
        items: this.state.items
      });
    }
  }, {
    key: "handleAdd",
    value: function handleAdd(text) {
      var newItems = [].concat(this.state.items);
      newItems.push({
        id: Math.random(),
        text: text
      });
      this.setState({
        input: '',
        items: newItems
      });
    }
  }, {
    key: "handleRemove",
    value: function handleRemove(index) {
      var newItems = [].concat(this.state.items);
      newItems.splice(index, 1);
      this.setState({
        input: this.state.input,
        items: newItems
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        { className: "todo" },
        React.createElement(
          "ul",
          { className: "todo__items" },
          this.state.items.map(function (item, index) {
            return React.createElement(TodoItem, {
              key: item.id,
              text: item.text,
              onClick: function onClick(e) {
                return _this3.handleRemove(index);
              }
            });
          })
        ),
        React.createElement("input", { type: "text", onInput: function onInput(e) {
            return _this3.handleInput(e);
          }, value: this.state.input }),
        React.createElement(
          "button",
          { onClick: function onClick(e) {
              return _this3.handleAdd(_this3.state.input);
            } },
          "Add"
        )
      );
    }
  }]);

  return Todo;
}(_index.Component);

(0, _index.render)(React.createElement(Todo, null), document.getElementById('root'));

/***/ })
/******/ ]);