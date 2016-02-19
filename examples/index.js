import React from 'react'
import ReactDOM from 'react-dom'
import Rtab from 'react-rtab'

import RendererTabs from './withRenderer'
import InstanceTabs from './withInstance'
import FunctionTabs from './withFunction'
import ComplexTabs from './complexTabs'

import '../themes/bootstrap-theme.css'

class App extends React.Component {
  render() {
    let models = [{
      tab: "Renderer, vertical",
      panel: <RendererTabs />
    },{
      tab: "Instance",
      panel: <InstanceTabs />
    },{
      tab: "Function Model",
      panel: <FunctionTabs />
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
