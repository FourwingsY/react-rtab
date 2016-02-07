# react-rtab
React tab-panel component.

### Description
react-rtab use Models to rendering tab component.

Models should be an array of Model `{tab: TabModel, panel: PanelModel}`

TabModel could be an object with renderer, or plain text.
PanelModel could be an object with renderer, Component, or Component instance.

### Example Codes
Model as Object, and use Renderer: [see this](https://github.com/FourwingsY/react-rtab/blob/master/examples/withRenderer/app.js#L13)

Model as Component: [see this](https://github.com/FourwingsY/react-rtab/blob/master/examples/withComponent/app.js#L13)

Model as Component Instances: [see this](https://github.com/FourwingsY/react-rtab/blob/master/examples/withInstance/app.js#L13)

### Run Examples
`npm run examples`, `open localhost:8080`
