import React from 'react'
import ReactDOM from 'react-dom'
import Rtab from 'react-rtab'

export default class InstanceTab extends React.Component {
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
        <p>
          When tab change, component is unmounted. If you have tags like &lt;input&gt; in your document,
          you might want to prevent unmount. Then use 'preserve' option.
        </p>
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
        <p>Component Rendering is <b>ONLY</b> recommended in <b>STATIC Document</b></p>
        <input defaultValue="Test2" />
      </div>
    )
  }
}
