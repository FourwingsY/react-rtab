import React from 'react'
import ReactDOM from 'react-dom'
import Rtab from 'react-rtab'

const code = `class FunctionTabs extends React.Component {
  state = {
    data: [{age: 23, name:"Mark"}, {age: 25, name:"Bill"}, {age: 44, name: "John"}, {age: 56, name: "Steve"}],
    models: [{
      tab: "Young",
      panel: () => {return this.state.data.filter(person => person.age <= 30)}
    }, {
      tab: "Old",
      panel: () => {return this.state.data.filter(person => person.age > 30)}
    }]
  };

  panelRenderer = (panelModel) => {
    panelModel.map((person, idx) => {
      return <button key={idx}>{panelModel.name}</button>
    })
  };

  render() {
    return (
      <Rtab
        models={this.state.models}
        panelRenderer={this.panelRenderer}
        preserve
      />
    )
  }
}`

export default class FunctionTabs extends React.Component {
  state = {
    data: [{age: 23, name:"Mark"}, {age: 25, name:"Bill"}, {age: 44, name: "John"}, {age: 56, name: "Steve"}],
    models: [{
      tab: "Young",
      panel: () => {return this.state.data.filter(person => person.age <= 30)}
    }, {
      tab: "Old",
      panel: () => {return this.state.data.filter(person => person.age > 30)}
    }]
  };

  panelRenderer = (panelModel) => {
    return panelModel.map((person, idx) => {
      return <button key={idx}>{person.name}</button>
    })
  };

  render() {
    return (
      <div>
        <Rtab
          models={this.state.models}
          panelRenderer={this.panelRenderer}
          preserve
        />
        <h3>Example Code</h3>
        <pre><code>{code}</code></pre>
      </div>
    )
  }
}
