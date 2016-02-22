/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Rtab = __webpack_require__(4);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Rtab).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Rtab = function (_React$Component) {
	  _inherits(Rtab, _React$Component);

	  function Rtab() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Rtab);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Rtab)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      activeTabIndex: _this.props.activeTabIndex,
	      isDragging: false,
	      draggingModels: null,
	      draggingOnHand: null,
	      dragTo: null,
	      prevTarget: null
	    }, _this.getModels = function () {
	      if (_this.state.isDragging) {
	        var _models = _this.state.draggingModels;
	        _models = _models.slice(0, _models.length);
	        _models.splice(_this.state.dragTo, 0, _this.state.draggingOnHand);
	        return _models;
	      }
	      var models = _this.props.models;
	      return models;
	    }, _this.getPanel = function (model) {
	      if (typeof model.panel == 'function') {
	        return model.panel();
	      }
	      return model.panel;
	    }, _this.onDragStart = function (e) {
	      var models = _this.getModels();
	      var idx = indexOfElement(e.target);
	      var hand = models.splice(idx, 1)[0];

	      _this.setState({
	        isDragging: true,
	        draggingModels: models,
	        draggingOnHand: hand,
	        dragTo: idx,
	        prevTarget: idx
	      });
	    }, _this.onDragEnter = function (e) {
	      var target = e.target;
	      while (target.tagName !== 'LI' && target !== null) {
	        target = target.parentElement;
	      }
	      if (target == null) {
	        return;
	      }
	      var targetIdx = indexOfElement(target);
	      if (targetIdx == _this.state.prevTarget) {
	        return;
	      }
	      _this.setState({
	        dragTo: targetIdx,
	        activeTabIndex: targetIdx,
	        prevTarget: targetIdx
	      });
	    }, _this.onDragOver = function (e) {
	      e.stopPropagation();
	      e.preventDefault();
	    }, _this.onDragEnd = function () {
	      var models = _this.state.draggingModels;
	      models = models.slice(0, models.length);
	      models.splice(_this.state.dragTo, 0, _this.state.draggingOnHand);
	      _this.setState({
	        isDragging: false,
	        draggingModels: null,
	        draggingOnHand: null,
	        dragTo: null,
	        prevTarget: null
	      });
	      _this.props.onChange(models);
	    }, _this.onClose = function (e) {
	      var models = _this.props.models;
	      var idx = indexOfElement(e.target.parentElement);
	      models.splice(idx, 1);
	      _this.props.onChange(models);
	    }, _this.setActiveTab = function (index) {
	      _this.setState({
	        activeTabIndex: index
	      });
	    }, _this.renderTabs = function (models) {
	      var draggableOptions = {};
	      var defaultDraggableOptions = {
	        draggable: true,
	        onDragStart: _this.onDragStart,
	        onDragOver: _this.onDragOver,
	        onDragEnter: _this.onDragEnter,
	        onDragEnd: _this.onDragEnd
	      };
	      if (_this.props.draggable == true) {
	        if (typeof _this.props.onChange == 'function') {
	          draggableOptions = defaultDraggableOptions;
	        } else {
	          throw Error('to use draggable option, onChange function is needed');
	        }
	      }
	      if (_this.props.closable == true) {
	        if (typeof _this.props.onChange !== 'function') {
	          throw Error('to use closable option, onChange function is needed');
	        }
	      }
	      var tabs = models.map(function (model, idx) {
	        return _react2.default.createElement(
	          'li',
	          _extends({
	            key: idx,
	            onClick: _this.setActiveTab.bind(null, idx),
	            className: (0, _classnames2.default)('tab', { active: _this.state.activeTabIndex == idx, dragging: _this.state.dragTo == idx })
	          }, draggableOptions),
	          _this.props.tabRenderer(model.tab, idx),
	          _this.props.closable ? _react2.default.createElement('a', { className: 'close', onClick: _this.onClose }) : null
	        );
	      });
	      return tabs;
	    }, _this.renderPanel = function (models) {
	      if (_this.state.isDragging) {
	        return _this.props.panelRenderer(_this.state.draggingOnHand.panel, _this.state.dragTo);
	      }
	      if (_this.props.preserve) {
	        return _this.renderPanels(models);
	      }
	      var model = models[_this.state.activeTabIndex];
	      var panel = _this.getPanel(model);
	      var activePanel = _this.props.panelRenderer(panel, _this.state.activeTabIndex);
	      return activePanel;
	    }, _this.renderPanels = function (models) {
	      return models.map(function (model, idx) {
	        var panel = _this.getPanel(model);
	        if (idx == _this.state.activeTabIndex) {
	          return _react2.default.createElement(
	            'div',
	            { key: idx, className: 'panel active' },
	            _this.props.panelRenderer(panel, idx)
	          );
	        } else {
	          return _react2.default.createElement(
	            'div',
	            { key: idx, className: 'panel inactive' },
	            _this.props.panelRenderer(panel, idx)
	          );
	        }
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Rtab, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.models.length == 0) {
	        this.setState({ activeTabIndex: 0 });
	        return;
	      }
	      if (nextProps.models.length <= this.state.activeTabIndex) {
	        this.setState({ activeTabIndex: nextProps.models.length - 1 });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var models = this.getModels();
	      return _react2.default.createElement(
	        'div',
	        { className: 'Rtab' },
	        _react2.default.createElement(
	          'ol',
	          { className: (0, _classnames2.default)('tabs', this.props.tabPosition) },
	          this.renderTabs(models)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)('panelContainer', { preserve: this.props.preserve }) },
	          this.renderPanel(models)
	        )
	      );
	    }
	  }]);

	  return Rtab;
	}(_react2.default.Component);

	Rtab.propTypes = {
	  models: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    tab: _react2.default.PropTypes.any.isRequired,
	    panel: _react2.default.PropTypes.any.isRequired
	  })).isRequired,
	  panelRenderer: _react2.default.PropTypes.func,
	  tabRenderer: _react2.default.PropTypes.func,
	  tabPosition: _react2.default.PropTypes.oneOf(['top', 'left']),
	  activeTabIndex: _react2.default.PropTypes.number,
	  preserve: _react2.default.PropTypes.bool,
	  draggable: _react2.default.PropTypes.bool,
	  closable: _react2.default.PropTypes.bool,
	  onChange: _react2.default.PropTypes.func
	};
	Rtab.defaultProps = {
	  tabRenderer: function tabRenderer(tabModel, idx) {
	    if (typeof tabModel !== 'string') {
	      throw Error('tabModel should be string, or set tabRenderer');
	    }
	    return _react2.default.createElement(
	      'span',
	      null,
	      tabModel
	    );
	  },
	  panelRenderer: function panelRenderer(panelModel, idx) {
	    // Check panelModel is React.Component's instance or not
	    if (panelModel.type && panelModel.type.prototype instanceof _react2.default.Component) {
	      return panelModel;
	    }
	    throw Error('Have to set panelRenderer or set model.panel as ReactElement');
	  },
	  tabPosition: 'top',
	  activeTabIndex: 0
	};


	function indexOfElement(el) {
	  var i = 0;
	  var child = el;
	  while ((child = child.previousSibling) != null) {
	    i++;
	  }
	  return i;
	}
	exports.default = Rtab;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = react;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = classnames;

/***/ }
/******/ ]);