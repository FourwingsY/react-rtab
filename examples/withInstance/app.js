import React from 'react'
import ReactDOM from 'react-dom'
import Rtab from 'react-rtab'

class App extends React.Component {
  render() {
    return (
      <InstanceTab />
    )
  }
}

class InstanceTab extends React.Component {
  render() {
    let models = [{
      tab: "Page 1",
      panel: <Page1 />
    }, {
      tab: "Page 2",
      panel: <Page2 />
    }]
    return (
      <Rtab
        models={models}
        tabPosition="top"
        preserve
      />
    )
  }
}

class Page1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Example Page</h2>
        <p>this is an example page for Component Instance rendering</p>
        <input defaultValue="Test1" />
      </div>
    )
  }
}
class Page2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Example Page2</h2>
        <p>Component Instance rendering is Easy</p>
        <input defaultValue="Test2" />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
