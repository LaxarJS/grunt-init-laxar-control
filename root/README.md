# {%= artifact %}

> {%= description %}


## Installation

To use the control in a widget, configure the path to the control in the RequireJS configuration of the application.
The expected path has to be relative to the RequireJS `baseUrl` configured for the application.

For example, assuming that your `baseUrl` is `'bower_components'` and the directory `includes` has the same root as the `bower_components`, add the following to the `paths` section of your `require_config.js`:

```js
'{%= artifact %}': '../includes/controls/{%= artifact %}'
```

Now reference the control from the `widget.json` of the widget:

```json
"controls": [ "{%= artifact %}" ]
```

Use it as a custom attribute in the HTML template of the widget:

```html
<div {%= artifact %}></div>
```


For general information on installing, styling and optimizing controls, have a look at the [LaxarJS documentation](https://github.com/LaxarJS/laxar/blob/master/docs/manuals/installing_controls.md).
