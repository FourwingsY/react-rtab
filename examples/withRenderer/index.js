import React from 'react'
import ReactDOM from 'react-dom'
import Rtab from 'react-rtab'

const code = `class RendererTab extends React.Component {
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

    let panelRenderer = (panelModel) => {
      return panelModel.map((data) => {
        return ([
          <h2 key="title">{data.title}</h2>,
          <p key="body">{data.body}</p>
        ])
      })
    }
    let tabRenderer = (tabModel) => {
      return <a>{tabModel}</a>
    }
    return (
      <Rtab
        models={models}
        panelRenderer={panelRenderer}
        tabRenderer={tabRenderer}
        tabPosition="left"
      />
    )
  }
}`

export default class RendererTab extends React.Component {
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

    let panelRenderer = (panelModel) => {
      return panelModel.map((data) => {
        return ([
          <h2 key="title">{data.title}</h2>,
          <p key="body">{data.body}</p>
        ])
      })
    }
    let tabRenderer = (tabModel) => {
      return <a>{tabModel}</a>
    }
    return (
      <div>
        <Rtab
          models={models}
          panelRenderer={panelRenderer}
          tabRenderer={tabRenderer}
        />
        <h3>Example Code</h3>
        <pre><code>{code}</code></pre>
      </div>
    )
  }
}
