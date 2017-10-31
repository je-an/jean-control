## Description

Abstract class for all html controls within jean environment. 

## Support
Supports AMD eco system. If there is no loader, Control is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var ExampleControl = function(options){
    // the default options for this control
    // if a specific option is not user defined, the value
    // from defaultOptions will be used.
    var defaultOptions = {
        containerId: "exampleId";
        name: "example-name"
    };
    // Inherit constructor from Control
    Control.apply(this, [options, defaultOptions]);
    // Now there are this._options, this._elements and this._container
    // provided for the ExampleControl. Within options there are the fused
    // options from options and default options. Add a jquery object or plain html
    // markup to this._element. After <ExampleControl.prototype.create> is called, the markup/jquery object
    // will be injected into DOM.
    this._element = "<div id='name'>" + this._options.name + "</div>";
};
// Inherit prototype methods from Control
ExampleControl.prototype = Object.create(Control.prototype);
ExampleControl.prototype.constructor = ExampleControl;

// Initialise the control
var eC = ExampleControl({ name: "control-name" });
// Create the control - Control is now injected to DOM
eC.create();
```
- Use it with require.js
```js
require(["path/to/Control"], function(Control){
    // Work with Control
});
```

## Installation

`npm install jean-control --save --legacy-bundling`

## API Reference

### Control.create() 

Creates the inheriting control element

**Returns**
- `Boolean` - True if control is created and appended to DOM, false otherwise

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT