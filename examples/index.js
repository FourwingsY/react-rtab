import React from 'react'
import ReactDOM from 'react-dom'
import Rtab from 'react-rtab'

import RendererTabs from './withRenderer'
import ComponentTabs from './withComponent'
import InstanceTabs from './withInstance'
import ComplexTabs from './complexTabs'

import '../themes/bootstrap-theme.css'

class App extends React.Component {
  render() {
    let models = [{
      tab: "Renderer",
      panel: <RendererTabs />
    },{
      tab: "Component Class, vertical tab",
      panel: <ComponentTabs />
    },{
      tab: "Instance",
      panel: <InstanceTabs />
    },{
      tab: "Binding",
      panel: <ComplexTabs />
    }]
    return (
      <div>
        <Rtab models={models} panelRenderer={(panelModel) => panelModel} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('examples'))
