'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../styles/bootstrap-style.css');

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
      activeTabIndex: _this.props.activeTabIndex || 0
    }, _this.setActiveTab = function (index) {
      _this.setState({
        activeTabIndex: index
      });
    }, _this.renderTabs = function () {
      var tabs = _this.props.models.map(function (model, idx) {
        model._idx = idx;
        return _react2.default.createElement(
          'li',
          {
            key: idx,
            onClick: _this.setActiveTab.bind(null, idx),
            className: (0, _classnames2.default)({ active: _this.state.activeTabIndex == idx })
          },
          _this.props.tabRenderer(model)
        );
      });
      return tabs;
    }, _this.renderPanel = function () {
      var model = _this.props.models[_this.state.activeTabIndex];
      var activePanel = _this.props.panelRenderer(model);
      return activePanel;
    }, _this.renderPanels = function () {
      return _this.props.models.map(function (model, idx) {
        if (idx == _this.state.activeTabIndex) {
          return _react2.default.createElement(
            'div',
            { key: idx, className: 'panel' },
            _this.props.panelRenderer(model)
          );
        } else {
          return _react2.default.createElement(
            'div',
            { key: idx, className: 'panel inactive' },
            _this.props.panelRenderer(model)
          );
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Rtab, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Rtab' },
        _react2.default.createElement(
          'ol',
          { className: (0, _classnames2.default)("tabs", this.props.tabPosition) },
          this.renderTabs()
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)("panelContainer", { preserve: this.props.preserve }) },
          this.props.preserve ? this.renderPanels() : this.renderPanel()
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
  tabPosition: _react2.default.PropTypes.oneOf(["top", "bottom", "left", "right"]),
  activeTabIndex: _react2.default.PropTypes.number,
  preserve: _react2.default.PropTypes.bool
};
Rtab.defaultProps = {
  tabRenderer: function tabRenderer(model) {
    return _react2.default.createElement(
      'span',
      null,
      model.tab
    );
  },
  panelRenderer: function panelRenderer(model) {
    // Check panel is React.Component's instance or not
    if (model.panel.type && model.panel.type.prototype instanceof _react2.default.Component) {
      return model.panel;
    }
    // Check panel is React.Component's subclass or not
    try {
      var Panel = model.panel;
      return _react2.default.createElement(Panel, model);
    } catch (err) {
      // There is no panelRenderer, or Incompatible model.panel
      throw Error("Have to set panelRenderer or set model.panel as React.Component or Component Instance");
    }
  },
  tabPosition: "top"
};
exports.default = Rtab;
