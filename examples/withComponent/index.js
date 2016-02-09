import React from 'react'
import ReactDOM from 'react-dom'
import Rtab from 'react-rtab'

export default class ComponentTab extends React.Component {
  render() {
    let models = [{
      tab: "Page 1",
      panel: Page1
    }, {
      tab: "Page 2",
      panel: Page2
    }]
    return (
      <Rtab
        models={models}
        tabPosition="left"
      />
    )
  }
}

class Page1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Example Page</h2>
        <p>this is an example page for Component Rendering</p>
      </div>
    )
  }
}
class Page2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Example Page2</h2>
        <p>Component Receives whole model object for it's props.</p>
      </div>
    )
  }
}
