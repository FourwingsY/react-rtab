import React from 'react'
import cn from 'classnames'

class Rtab extends React.Component {
  static propTypes = {
    models: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        tab: React.PropTypes.any.isRequired,
        panel: React.PropTypes.any.isRequired
      })
    ).isRequired,
    panelRenderer: React.PropTypes.func,
    tabRenderer: React.PropTypes.func,
    tabPosition: React.PropTypes.oneOf(["top", "bottom", "left", "right"]),
    activeTabIndex: React.PropTypes.number,
    preserve: React.PropTypes.bool
  };

  static defaultProps = {
    tabRenderer: (model) => {
      return <span>{model.tab}</span>
    },
    panelRenderer: (model, idx) => {
      // Check panel is React.Component's instance or not
      if (model.panel.type && model.panel.type.prototype instanceof React.Component) {
        return model.panel
      }
      // Check panel is React.Component's subclass or not
      try {
        let Panel = model.panel
        return <Panel {...model} />
      } catch(err) {
        // There is no panelRenderer, or Incompatible model.panel
        throw Error("Have to set panelRenderer or set model.panel as React.Component or Component Instance")
      }
    },
    tabPosition: "top"
  };

  state = {
    activeTabIndex: this.props.activeTabIndex || 0
  };

  setActiveTab = (index) => {
    this.setState({
      activeTabIndex: index
    })
  };

  renderTabs = () => {
    let tabs = this.props.models.map((model, idx) => {
      model._idx = idx
      return (
        <li
          key={idx}
          onClick={this.setActiveTab.bind(null, idx)}
          className={cn({active: this.state.activeTabIndex == idx})}
        >
          {this.props.tabRenderer(model)}
        </li>
      )
    })
    return tabs
  };

  renderPanel = () => {
    let model = this.props.models[this.state.activeTabIndex]
    let activePanel = this.props.panelRenderer(model, this.state.activeTabIndex)
    return activePanel
  };

  renderPanels = () => {
    return this.props.models.map((model, idx) => {
      if (idx == this.state.activeTabIndex) {
        return <div key={idx} className="panel">{this.props.panelRenderer(model, idx)}</div>
      } else {
        return <div key={idx} className="panel inactive">{this.props.panelRenderer(model, idx)}</div>
      }
    })
  };
  render() {
    return (
      <div className="Rtab">
        <ol className={cn("tabs", this.props.tabPosition)}>
          {this.renderTabs()}
        </ol>
        <div className={cn("panelContainer", {preserve: this.props.preserve})}>
          {this.props.preserve
            ? this.renderPanels()
            : this.renderPanel()
          }
        </div>
      </div>
    )
  }
}

export default Rtab
