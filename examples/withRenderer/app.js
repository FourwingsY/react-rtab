import React from 'react'
import ReactDOM from 'react-dom'
import Rtab from 'react-rtab'

class App extends React.Component {
  render() {
    return (
      <RendererTab />
    )
  }
}

class RendererTab extends React.Component {
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
        tabPosition="top"
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
