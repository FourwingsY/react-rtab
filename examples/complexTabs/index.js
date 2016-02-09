import React from 'react'
import ReactDOM from 'react-dom'
import Rtab from 'react-rtab'

export default class ComplexTabs extends React.Component {
  state = {
    models: [{
      tab: "Page 1",
      panel: "Add Props on Tab 1",
      // you can extends model as you want
      common: "Example"
    }, {
      tab: "Page 2",
      panel: "Add Props on Tab 2",
      common: "Binding"
    }]
  };

  onModelChange = (idx) => {
    return (event) => {
      let newModels = this.state.models
      newModels[idx].common = event.target.value
      this.setState({
        models: newModels
      })
    }
  };

  render() {
    return (
      <Rtab
        models={this.state.models}
        tabRenderer={model => <ComplexTab {...model} />}
        panelRenderer={(model, idx) => <ComplexPanel {...model} onChange={this.onModelChange(idx)}/>}
        preserve
      />
    )
  }
}

class ComplexTab extends React.Component {
  render() {
    return (
      <p>
        <span>{this.props.tab}</span>
        <br/>
        <span>{this.props.common}</span>
      </p>
    )
  }
}
class ComplexPanel extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.panel}</h3>
        <p>Bind value to tab</p>
        <input value={this.props.common} onChange={this.props.onChange} />
      </div>
    )
  }
}
