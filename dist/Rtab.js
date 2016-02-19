'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

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
      activeTabIndex: _this.props.activeTabIndex || 0
    }, _this.setActiveTab = function (index) {
      _this.setState({
        activeTabIndex: index
      });
    }, _this.getPanel = function (model) {
      if (typeof model.panel == "function") {
        return model.panel();
      }
      return model.panel;
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
          _this.props.tabRenderer(model.tab, idx)
        );
      });
      return tabs;
    }, _this.renderPanel = function () {
      if (_this.props.preserve) {
        return _this.renderPanels();
      }
      var model = _this.props.models[_this.state.activeTabIndex];
      var panel = _this.getPanel(model);
      var activePanel = _this.props.panelRenderer(panel, _this.state.activeTabIndex);
      return activePanel;
    }, _this.renderPanels = function () {
      return _this.props.models.map(function (model, idx) {
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
          this.renderPanel()
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
  tabPosition: _react2.default.PropTypes.oneOf(["top", "left"]),
  activeTabIndex: _react2.default.PropTypes.number,
  preserve: _react2.default.PropTypes.bool
};
Rtab.defaultProps = {
  tabRenderer: function tabRenderer(tabModel, idx) {
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
    throw Error("Have to set panelRenderer or set model.panel as ReactElement");
  },
  tabPosition: "top"
};
exports.default = Rtab;
