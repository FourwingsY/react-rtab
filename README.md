# react-rtab
React tab-panel component.

### Examples
see [fourwingsy.github.io/react-rtab](http://fourwingsy.github.io/react-rtab)

### Description
react-rtab use Models to rendering tab component.

the `R` in 'R'tab represents `repeatedly`, `rendered`

Models should be an array of Model `{tab: TabModel, panel: PanelModel}`

TabModel could be an object with renderer, or plain text.
PanelModel could be an object with renderer, Component, or Component instance.

### Parameters and Models
| Props | Type | Default value | Description |
| ----- | ---- | ------------- | ----------- |
| models | arrayOf(Model) | - | REQUIRED, contains data of tabs |
| `Model` | shapeOf({<br>&nbsp;&nbsp;tab: TabModel, <br>&nbsp;&nbsp;panel: PanelModel,<br>&nbsp;&nbsp; ...etc<br>}) | - | Data Model for rendering a tab and panel |
| `TabModel` | Object or string | - |  |
| tabRenderer | (TabModel) => ReactElement | `(tabModel) => <span>{tabModel}</span>` | REQUIRED WHEN TabModel is an Object. If TabModel is string, tabRenderer will be it's default. |
| `PanelModel` | Object or ReactElement |  |  |
| panelRenderer | (PanelModel) => ReactElement | switch PanelModel.type:<br>&nbsp;&nbsp;case Object: `undefined`<br>&nbsp;&nbsp;case ReactElement: `(panelElement) => panelElement` | REQUIRED WHEN PanelModel is an Object |
| tabPosition | string | "top" | Where to render tabs. `"left"` will render vertical tabs. `"right"` or `"bottom"` is not implemented yet. |
| activeTabIndex | number | 0 | Select initial active tab by index of models |
| preserve | bool | false | if preserve is false, then only one active panel will be rendered. if preserve is true, `<Rtab>` will mount all panels, non-active panels will be just hidden. if each panel has a dynamic component like `<input>`, set preserve `true` to preserve input value. |
