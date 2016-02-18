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
    tabPosition: React.PropTypes.oneOf(["top", "left"]),
    activeTabIndex: React.PropTypes.number,
    preserve: React.PropTypes.bool
  };

  static defaultProps = {
    tabRenderer: (tabModel, idx) => {
      return <span>{tabModel}</span>
    },
    panelRenderer: (panelModel, idx) => {
      // Check panel is React.Component's instance or not
      if (panelModel.type && panelModel.type.prototype instanceof React.Component) {
        return panelModel
      }
      throw Error("Have to set panelRenderer or set model.panel as ReactElement")
    },
    tabPosition: "top"
  };

  state = {
    activeTabIndex: this.props.activeTabIndex || 0
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.models.length == 0) {
      this.setState({activeTabIndex: 0})
      return
    }
    if (nextProps.models.length <= this.state.activeTabIndex) {
      this.setState({activeTabIndex: nextProps.models.length-1})
    }
  }

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
          {this.props.tabRenderer(model.tab, idx)}
        </li>
      )
    })
    return tabs
  };

  renderPanel = () => {
    let model = this.props.models[this.state.activeTabIndex]
    let activePanel = this.props.panelRenderer(model.panel, this.state.activeTabIndex)
    return activePanel
  };

  renderPanels = () => {
    return this.props.models.map((model, idx) => {
      if (idx == this.state.activeTabIndex) {
        return <div key={idx} className="panel">{this.props.panelRenderer(model.panel, idx)}</div>
      } else {
        return <div key={idx} className="panel inactive">{this.props.panelRenderer(model.panel, idx)}</div>
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
