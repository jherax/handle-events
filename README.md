# Handle Events in the Browser

<!-- markdownlint-disable MD033 MD034 MD014 -->

Manages events listeners in the browser. A lightweight library for
adding, removing and getting event listeners to DOM Elements.

## Content

1. [Getting started](#getting-started)
1. [Including the library](#including-the-library)
1. [API](#api)

## Getting started

To include this library into your package manager with `npm` or `yarn`

```shell
# with npm
$ npm install handle-events --save

# with yarn
$ yarn add handle-events
```

[&#9751; Back to Index](#content)

## Including the library

`handle-events` can be included directly from a CDN in your site:

```html
<!-- from unpkg.com -->
<script src="https://unpkg.com/handle-events/dist/handle-events.min.js"></script>

<!-- or from rawgit.com -->
<script src="https://cdn.rawgit.com/jherax/handle-events/1.1.0/dist/handle-events.min.js"></script>
```

In the above case, the library will be included as global object
in the browser under the name of [`jsu`](#api) (JavaScript-Utils),
wherein, if that namespace exists, it will be extended, otherwise
a new `jsu` object will be created.

As this library is built as [UMD] _(Universal Module Definition)_, it
can be included from module loaders such as [CommonJS], [ES2015 Imports]
or [AMD RequireJS].

### CommonJS

```javascript
var jsu = require('handle-events');
```

### ES2015 Imports

```javascript
import jsu from 'handle-events';
```

### AMD

```javascript
// using RequireJS
requirejs.config({
  paths: {
    // remove the extension .js
    'handle-events': '<PATH>/handle-events.min'
  }
});
require(['handle-events'], function(jsu) {
  console.log(jsu);
});
```

See an example with RequireJS here: http://jsfiddle.net/FdKTn/78/

[&#9751; Back to Index](#content)

---

## API

- [addEventListener](#addeventlistenernode-eventns-listener-capture)
- [delegate](#delegatenode-selector-eventns-listener-capture)
- [removeEventListener](#removeeventlistenernode-eventns-listener)
- [getEventListeners](#geteventlistenersnode-eventns)
- [handleEvents](#handleeventsnode)

### addEventListener(node, eventns, listener, capture)

**Returns `void`**

```javascript
addEventListener(node: Element, eventns: String, listener: Function, capture: Boolean) : void
```

Attaches an event-handler to a DOM element. You can set a namespace to
the event by appending a dot `.` to the event name.
It receives the following arguments:

- **node** `Element`: DOM Element to which the event handler is attached
- **eventns** `String`: name of the event (with .namespace) to register
- **listener** `Function`: the function which receives the event notification
- **capture** `Boolean`: if the event is activated at the beginning _(default `false`)_

Each event handler attached is tracked by an internal store, which keeps track
of the event type and the namespace linked to a DOM Element. You can access
that store through the API [getEventListeners](#geteventlistenersnode-eventns).

```javascript
var title = document.getElementById('title');

// add a named event handler with namespace (recommended)
const onMouseOver = (e) => console.log(`triggered ${e.type}.tooltip`);
jsu.addEventListener(title, 'mouseover.tooltip', onMouseOver);

// add an anonymous event handler (without namespace)
jsu.addEventListener(title, 'click', (e) => {
  console.log(`triggered ${e.type}`);
});
```

Events can be activated at two occasions: At the beginning _("capture")_ by
setting `capture = true`, and at the end _("bubble")_ by default.
Events are executed in the order of how they're defined.

Say, you define 4 event listeners:

```javascript
jsu.addEventListener(document, "click", (e) => alert(1));
jsu.addEventListener(document, "click", (e) => alert(2), true);
jsu.addEventListener(document, "click", (e) => alert(3), false);
jsu.addEventListener(document, "click", (e) => alert(4), true);
```

The alert boxes will pop up in this order:

- `2`: defined first, using `capture = true`
- `4`: defined second, using `capture = true`
- `1`: first handler defined without setting `capture`
- `3`: second handler defined with `capture = false`

For a better understanding of capture-events and event-bubbling,
read the following link: https://stackoverflow.com/a/10654134/2247494
and also you can see a demo here: http://jsfiddle.net/sc5Xa/198/

[&#9751; Back to API](#api)

### delegate(node, selector, eventns, listener, capture)

**Returns `void`**

```javascript
delegate(node: Element, eventns: String, selector: String, listener: Function, capture: Boolean) : void
```

Attaches a listener to a DOM `Element` but delegates the event-listener
to the DOM Elements beneath that matches with the `selector` provided.
It receives the following arguments:

- **node** `Element`: DOM Element to which the event handler is attached
- **eventns** `String`: name of the event (with .namespace) to register
- **selector** `String`: CSS selector for those elements that will propagate the event
- **listener** `Function`: the function which receives the event notification
- **capture** `Boolean`: if the event is activated at the beginning _(default `false`)_

Events can be activated at two occasions: At the beginning _("capture")_ by
setting `capture = true`, and at the end _("bubble")_ by default.
Events are executed in the order of how they're defined.

```javascript
jsu.delegate(document, "click.test", "h3", (e) => alert(1));
jsu.delegate(document, "click.test", "h3", (e) => alert(2), true);
jsu.delegate(document, "click.test", "h3", (e) => alert(3), false);
jsu.delegate(document, "click.test", "h3", (e) => alert(4), true);
```

For a better understanding of capture-events and event-bubbling,
read the following link: https://stackoverflow.com/a/10654134/2247494
and also you can see a demo here: http://jsfiddle.net/sc5Xa/198/

[&#9751; Back to API](#api)

### removeEventListener(node, eventns, listener)

**Returns `void`**

```javascript
removeEventListener(node: Element, eventns: String, listener: Function) : void
removeEventListener(node: Element, eventns: String) : void
removeEventListener(node: Element) : void
```

Removes an event-handler from a DOM element. You can set a namespace to
the event by appending a dot `.` to the event name, or even you can pass
only a namespace that will match with all event types.

It receives the following arguments:

- **node** `Element`: DOM element where the event handler is removed.
- **eventns** `String`: _(optional)_ name of the event (with .namespace) to remove
- **listener** `Function`: _(optional)_ the function which receives the event notification

Each event handler attached by
[addEventListener](#addeventlistenernode-eventns-listener-capture) is tracked
by an internal store, which keeps track of the event type and the namespace
linked to a DOM Element. You can access that store through the API
[getEventListeners](#geteventlistenersnode-eventns).

```javascript
var title = document.getElementById('title');

jsu.removeEventListener(title, 'click'); // remove all listeners by event
jsu.removeEventListener(title, '.tooltip'); // remove all listeners by namespace
jsu.removeEventListener(title, 'mouseover.tooltip'); // remove all listeners by event + namespace
jsu.removeEventListener(title, null, onMouseOver); // remove all listeners by handler
jsu.removeEventListener(title); // remove all event handlers
```

[&#9751; Back to API](#api)

### getEventListeners(node, eventns)

**Returns `Object`**

```javascript
getEventListeners(node: Element, eventns: String) : Object
getEventListeners(node: Element) : Object
```

Gets all event-handlers from a DOM element. Each event handler attached by
[addEventListener](#addeventlistenernode-eventns-listener-capture) is tracked
by an internal store, which keeps track of the event type and the namespace
linked to a DOM Element.

It receives the following arguments:

- **node** `Element`: DOM element to get the event listeners.
- **eventns** `String`: _(optional)_ name of the event or namespace.

```javascript
var title = document.getElementById('title');

jsu.getEventListeners(title); // get all event listeners
jsu.getEventListeners(title, 'click'); // get all listeners by event
jsu.getEventListeners(title, '.tooltip'); // get all listeners by namespace
jsu.getEventListeners(title, 'mouseover.tooltip'); // get listeners by event + namespace
```

The object returned contains the event type as **key**, and its **value**
is an array of objects with the event handler and the namespace.

```javascript
{
  mouseover: [ // Array(1)
    {
      handler: function(e){},
      namespace: "tooltip"
    }
  ],
  click: [ // Array(2)
    {
      handler: function(e){},
      namespace: undefined // no namespace
    },
    {
      handler: function(e){},
      namespace: "language"
    }
  ]
}
```

[&#9751; Back to API](#api)

### handleEvents(node)

**Returns `Object`**

```javascript
handleEvents(node: Element) : Object
```

This _factory-method_ is a _facade_ that simplifies the tasks for
[attaching](#addeventlistenernode-eventns-listener-capture) and
[removing](#removeeventlistenernode-eventns-listener) event listeners.
It implements a _fluent interface_ that allows the chaining of methods
(as jQuery does). It receives an argument that is the DOM `Element` to
which you will attach or remove event-handlers.

The methods exposed are:

- **on()** `Function`: facade of [addEventListener](#addeventlistenernode-eventns-listener-capture).
  It receives the following arguments: `(eventns, listener, capture)`
- **off()** `Function`: facade of [removeEventListener](#removeeventlistenernode-eventns-listener).
  It receives the following arguments: `(eventns, listener)`

```javascript
const evtHandler = (e) => console.log(`triggered ${e.type}`);
var title = document.getElementById('title');

jsu.handleEvents(title)
  .off('click')
  .on('click.language', evtHandler)
  .off('.tooltip')
  .on('mouseover.tooltip', evtHandler)
  .on('mouseout.tooltip', evtHandler);
```

[&#9751; Back to API](#api)

---

## Versioning

This projects adopts the [Semantic Versioning](http://semver.org/)
(SemVer) guidelines:

```text
<MAJOR>.<MINOR>.<PATCH>
```

Given a version number MAJOR.MINOR.PATCH, increment the:

1. MAJOR version when you make incompatible API changes.
1. MINOR version when you add functionality in a backwards-compatible manner.
1. PATCH version when you make backwards-compatible bug fixes.

## Issues

To report an issue and keep traceability of bug-fixes, please report to:

- https://github.com/jherax/handle-events/issues

## License

This project has been released under the [ISC](https://opensource.org/licenses/ISC) license.
This license applies ONLY to the source of this repository and does not extend to any other distribution,
or any other 3rd party libraries used in a repository. See [LICENSE](LICENSE) file for more information.

<!-- LINKS -->

[UMD]: http://davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/
[CommonJS]: https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/
[ES2015 Imports]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
[AMD RequireJS]: http://requirejs.org/docs/api.html#jsfiles
