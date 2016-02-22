# react-rtab
React tab-panel component.

### installation
`npm install --save react-rtab`

### Examples
see [fourwingsy.github.io/react-rtab](http://fourwingsy.github.io/react-rtab)

### Description
React-rtab use Models to rendering tab component.

the `R` in 'R'tab stands for `R`epeatedly, `R`endered models.

Models should be an array of Model `{tab: TabModel, panel: PanelModel}`

TabModel could be an `object with renderer`, or `plain text`.
PanelModel could be an `object with renderer`, `Getter Function` or `ReactElement` (this is syntactic sugar for static panel document).

### Parameters and Models
| Props | Type | Default value | Description |
| ----- | ---- | ------------- | ----------- |
| models | arrayOf(Model) | - | REQUIRED, contains data of tabs |
| `Model` | shapeOf({<br>&nbsp;&nbsp;tab: TabModel, <br>&nbsp;&nbsp;panel: PanelModel}) | - | Data Model for rendering a tab and panel |
| `TabModel` | Object or string | - |  |
| tabRenderer | (TabModel) => ReactElement | `(tabModel) => <span>{tabModel}</span>` | REQUIRED WHEN TabModel is an Object. If TabModel is string, tabRenderer will be it's default. |
| `PanelModel` | Object, Getter function, or ReactElement  |  |  |
| panelRenderer | (PanelModel) => ReactElement | `undefined` | REQUIRED unless PanelModel is ReactElement. |
| tabPosition | string | "top" | Where to render tabs. `"left"` will render vertical tabs. `"right"` or `"bottom"` is not implemented yet. |
| activeTabIndex | number | 0 | Select initial active tab by index of models |
| preserve | bool | false | if preserve is false, then only one active panel will be rendered. if preserve is true, `<Rtab>` will mount all panels, non-active panels will be just hidden. if each panel has a dynamic component like `<input>`, set preserve `true` to preserve input value. |
| draggable | bool | false | Add drag-event listeners on Tab |
| closable | bool | false | Add closing X buttons on Tab |
| onChange | (models) => {} | `undefined` | When dragging or closing tab, original model has to changed. `(models) => {this.setState({models: models})}` is recommended. |

### Using your own template

Sometimes, you needs to use tabs functionality but you already has your own markups.
Inheritance might be one of your solution. This works on `v0.2.0` or later.

Just Remember Two functions. `this.renderTabs()` and `this.renderPanel()`

But also remember this. Theming CSS will not work with your template. You have to write your own, new CSS.

```javascript
class OwnTabs extends Rtab {
  render() {
    return (
      <div className="myOwnClass">
        <ul className="blabla-tabs">{this.renderTabs()}</ul>
        <div className="blabla-panels"}>{this.renderPanel()}</div>
      </div>
    )
  }
}
```
