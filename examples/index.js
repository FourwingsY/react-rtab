import React from 'react'
import ReactDOM from 'react-dom'
import Rtab from 'react-rtab'

import RendererTabs from './withRenderer'
import InstanceTabs from './withInstance'
import FunctionTabs from './withFunction'
import ComplexTabs from './complexTabs'

import '../themes/bootstrap-theme.css'

class App extends React.Component {
  state = {
    models: [{
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
  };
  render() {
    return (
      <div>
        <Rtab
          models={this.state.models}
          panelRenderer={(panelModel) => panelModel}
          draggable closable
          onChange={(models) => this.setState({models: models})}
       />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('examples'))
