import React from 'react'
import ReactDOM from 'react-dom'
import Rtab from 'react-rtab'

const code = `class ComplexTabs extends React.Component {
  state = {
    commonData: ["Example", "Binding"],
    models: [{
      tab: "Page 1",
      panel: "Add Props on Tab 1"
    }, {
      tab: "Page 2",
      panel: "Add Props on Tab 2"
    }]
  };

  onModelChange = (idx) => {
    return (event) => {
      let newData = this.state.commonData
      newData[idx] = event.target.value
      this.setState({
        commonData: newData
      })
    }
  };

  render() {
    return (
      <Rtab
        models={this.state.models}
        tabRenderer={(model, idx) => <ComplexTab tab={model.tab} common={this.state.commonData[idx]} />}
        panelRenderer={(model, idx) => <ComplexPanel panel={model.panel} common={this.state.commonData[idx]} onChange={this.onModelChange(idx)}/>}
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
}`

export default class ComplexTabs extends React.Component {
  state = {
    commonData: ["Example", "Binding"],
    models: [{
      tab: "Page 1",
      panel: "Add Props on Tab 1"
    }, {
      tab: "Page 2",
      panel: "Add Props on Tab 2"
    }]
  };

  onModelChange = (idx) => {
    return (event) => {
      let newData = this.state.commonData
      newData[idx] = event.target.value
      this.setState({
        commonData: newData
      })
    }
  };

  render() {
    return (
      <div>
        <Rtab
          models={this.state.models}
          tabRenderer={(tabModel, idx) => <ComplexTab tab={tabModel} common={this.state.commonData[idx]} />}
          panelRenderer={(panelModel, idx) => <ComplexPanel panel={panelModel} common={this.state.commonData[idx]} onChange={this.onModelChange(idx)}/>}
          preserve
        />
        <h3>Example Code</h3>
        <pre><code>{code}</code></pre>
      </div>
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
