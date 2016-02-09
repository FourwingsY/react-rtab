import React from 'react'
import ReactDOM from 'react-dom'
import Rtab from 'react-rtab'

import RendererTabs from './withRenderer'
import ComponentTabs from './withComponent'
import InstanceTabs from './withInstance'
import ComplexTabs from './complexTabs'

import '../themes/bootstrap-theme.css'

const rendererCode = `export default class RendererTab extends React.Component {
  render() {
    let models = [{
      tab: "Tab 1",
      panel: [{
        title: "Hello",
        body: "Hello world! This is React-Tabs"
      },{
        title: "And this...",
        body: "is the very useful!"
      }]
    }, {
      tab: "Tab 2",
      panel: [{
        title: "This is second Tab",
        body: "Tabs are using same renderer"
      }]
    }]

    let panelRenderer = (model) => {
      return model.panel.map((panelModel) => {
        return ([
          <h2 key="title">{panelModel.title}</h2>,
          <p key="body">{panelModel.body}</p>
        ])
      })
    }
    let tabRenderer = (model) => {
      return <a>{model.tab}</a>
    }
    return (
      <Rtab
        models={models}
        panelRenderer={panelRenderer}
        tabRenderer={tabRenderer}
      />
    )
  }
}`

const componentCode = `export default class ComponentTab extends React.Component {
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
}`

const instanceCode = `export default class InstanceTab extends React.Component {
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
        <p>When tab change, component is unmounted. If you have tags like \<input\> in your document,
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
}`

const bindingCode = `export default class ComplexTabs extends React.Component {
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
}`

class App extends React.Component {
  render() {
    let models = [{
      tab: "Renderer",
      panel: <RendererTabs />,
      code: rendererCode
    },{
      tab: "Component Class, vertical tab",
      panel: <ComponentTabs />,
      code: componentCode
    },{
      tab: "Instance",
      panel: <InstanceTabs />,
      code: instanceCode
    },{
      tab: "Binding",
      panel: <ComplexTabs />,
      code: bindingCode
    }]
    return (
      <div>
        <Rtab models={models} panelRenderer={(model) => [model.panel, <h3 key={0}>Example Code</h3>, <pre key={1}><code>{model.code}</code></pre>]} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('examples'))
