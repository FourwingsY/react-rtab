import React from 'react'
import ReactDOM from 'react-dom'
import Rtab from 'react-rtab'

class App extends React.Component {
  render() {
    return (
      <ComplexTabs />
    )
  }
}

class ComplexTabs extends React.Component {
  state = {
    models: [{
      // _idx: 0, // will be injected
      tab: "Page 1",
      panel: 1,
      // you can extends model as you want
      common: ""
    }, {
      // _idx: 1,
      tab: "Page 2",
      panel: 2,
      common: ""
    }]
  };

  onChange = (idx, event) => {
    let newModels = this.state.models
    newModels[idx].common = event.target.value
    this.setState({
      models: newModels
    })
  };

  render() {
    return (
      <Rtab
        models={this.state.models}
        tabRenderer={model => <ComplexTab {...model} />}
        panelRenderer={model => <ComplexPanel {...model} onChange={this.onChange.bind(this, model._idx)} />}
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
        <h3>Add Props on Tab {this.props.panel}</h3>
        <p>Bind value to tab</p>
        <input value={this.props.common} onChange={this.props.onChange} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
