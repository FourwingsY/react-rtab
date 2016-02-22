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
    tabPosition: React.PropTypes.oneOf(['top', 'left']),
    activeTabIndex: React.PropTypes.number,
    preserve: React.PropTypes.bool,
    draggable: React.PropTypes.bool,
    closable: React.PropTypes.bool,
    onChange: React.PropTypes.func
  };

  static defaultProps = {
    tabRenderer: (tabModel, idx) => {
      if (typeof tabModel !== 'string') {
        throw Error('tabModel should be string, or set tabRenderer')
      }
      return <span>{tabModel}</span>
    },
    panelRenderer: (panelModel, idx) => {
      // Check panelModel is React.Component's instance or not
      if (panelModel.type && panelModel.type.prototype instanceof React.Component) {
        return panelModel
      }
      throw Error('Have to set panelRenderer or set model.panel as ReactElement')
    },
    tabPosition: 'top',
    activeTabIndex: 0
  };

  state = {
    activeTabIndex: this.props.activeTabIndex,
    isDragging: false,
    draggingModels: null,
    draggingOnHand: null,
    dragTo: null,
    prevTarget: null
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

  getModels = () => {
    if (this.state.isDragging) {
      let models = this.state.draggingModels
      models = models.slice(0, models.length)
      models.splice(this.state.dragTo, 0, this.state.draggingOnHand)
      return models
    }
    let models = this.props.models
    return models
  };

  getPanel = (model) => {
    if (typeof model.panel == 'function') {
      return model.panel()
    }
    return model.panel
  };

  onDragStart = (e) => {
    let models = this.getModels()
    let idx = indexOfElement(e.target)
    let hand = models.splice(idx, 1)[0]

    this.setState({
      isDragging: true,
      draggingModels: models,
      draggingOnHand: hand,
      dragTo: idx,
      prevTarget: idx
    })
  };

  onDragEnter = (e) => {
    let target = e.target
    while (target.tagName !== 'LI' && target !== null) {
      target = target.parentElement
    }
    if (target == null) {
      return
    }
    let targetIdx = indexOfElement(target)
    if (targetIdx == this.state.prevTarget) {
      return
    }
    this.setState({
      dragTo: targetIdx,
      activeTabIndex: targetIdx,
      prevTarget: targetIdx
    })
  };

  onDragOver = (e) => {
    e.stopPropagation()
  	e.preventDefault()
  };

  onDragEnd = () => {
    let models = this.state.draggingModels
    models = models.slice(0, models.length)
    models.splice(this.state.dragTo, 0, this.state.draggingOnHand)
    this.setState({
      isDragging: false,
      draggingModels: null,
      draggingOnHand: null,
      dragTo: null,
      prevTarget: null
    })
    this.props.onChange(models)
  };

  onClose = (e) => {
    let models = this.props.models
    let idx = indexOfElement(e.target.parentElement)
    models.splice(idx, 1)
    this.props.onChange(models)
  };

  setActiveTab = (index) => {
    this.setState({
      activeTabIndex: index
    })
  };

  renderTabs = (models) => {
    let draggableOptions = {}
    let defaultDraggableOptions = {
      draggable: true,
      onDragStart: this.onDragStart,
      onDragOver: this.onDragOver,
      onDragEnter: this.onDragEnter,
      onDragEnd: this.onDragEnd
    }
    if (this.props.draggable == true) {
      if (typeof this.props.onChange == 'function') {
        draggableOptions = defaultDraggableOptions
      } else {
        throw Error('to use draggable option, onChange function is needed')
      }
    }
    if (this.props.closable == true) {
      if (typeof this.props.onChange !== 'function') {
        throw Error('to use closable option, onChange function is needed')
      }
    }
    let tabs = models.map((model, idx) => {
      return (
        <li
          key={idx}
          onClick={this.setActiveTab.bind(null, idx)}
          className={cn('tab', {active: this.state.activeTabIndex == idx, dragging: this.state.dragTo == idx})}
          {...draggableOptions}>
          {this.props.tabRenderer(model.tab, idx)}
          {this.props.closable ? <a className="close" onClick={this.onClose}></a> : null}
        </li>
      )
    })
    return tabs
  };

  renderPanel = (models) => {
    if (this.state.isDragging) {
      return this.props.panelRenderer(this.state.draggingOnHand.panel, this.state.dragTo)
    }
    if (this.props.preserve) {
      return this.renderPanels(models)
    }
    let model = models[this.state.activeTabIndex]
    let panel = this.getPanel(model)
    let activePanel = this.props.panelRenderer(panel, this.state.activeTabIndex)
    return activePanel
  };

  renderPanels = (models) => {
    return models.map((model, idx) => {
      let panel = this.getPanel(model)
      if (idx == this.state.activeTabIndex) {
        return <div key={idx} className="panel active">{this.props.panelRenderer(panel, idx)}</div>
      } else {
        return <div key={idx} className="panel inactive">{this.props.panelRenderer(panel, idx)}</div>
      }
    })
  };

  render() {
    let models = this.getModels()
    return (
      <div className="Rtab">
        <ol className={cn('tabs', this.props.tabPosition)}>
          {this.renderTabs(models)}
        </ol>
        <div className={cn('panelContainer', {preserve: this.props.preserve})}>
          {this.renderPanel(models)}
        </div>
      </div>
    )
  }
}

function indexOfElement(el) {
  let i = 0;
  let child = el
  while ((child = child.previousSibling) != null) {
    i++;
  }
  return i
}
export default Rtab
