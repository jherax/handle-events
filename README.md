# Handle Events in the Browser

<!-- markdownlint-disable MD033 MD034 MD014 -->

Manages events listeners in the browser.

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
<script src="https://unpkg.com/handle-events/dist/handle-events.js"></script>

<!-- or from rawgit.com -->
<script src="https://cdn.rawgit.com/jherax/handle-events/1.0.0/dist/handle-events.js"></script>
```

In the above case, the object [`evt`](#examples) is included as
global object in the browser.

As `evt` is built as [UMD] _(Universal Module Definition)_, it can
be included from module loaders such as [CommonJS], [ES2015 Export]
or [AMD RequireJS].

### CommonJS

```javascript
var evt = require('handle-events');
```

### ES2015 Export

```javascript
import evt from 'handle-events';
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
require(['handle-events'], function(evt) {
  console.log(evt);
});
```

See an example with RequireJS here: http://jsfiddle.net/FdKTn/75/

[&#9751; Back to Index](#content)

## API

[&#9751; Back to Index](#content)

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
[ES2015 Export]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
[AMD RequireJS]: http://requirejs.org/docs/api.html#jsfiles
