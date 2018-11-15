/*! handle-events@v1.1.3. Jherax 2017. Visit https://github.com/jherax/handle-events */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsu"] = factory();
	else
		if (Object.prototype.toString.call(root["jsu"]) === "[object Object]") {
			var p, f = factory(); for (p in f) root["jsu"][p] = f[p];
		} else root["jsu"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _addEventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _removeEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _getEventListeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);






/* harmony default export */ __webpack_exports__["default"] = ({
  handleEvents: _facade__WEBPACK_IMPORTED_MODULE_1__["default"],
  addEventListener: _addEventListener__WEBPACK_IMPORTED_MODULE_2__["default"],
  removeEventListener: _removeEventListener__WEBPACK_IMPORTED_MODULE_3__["default"],
  getEventListeners: _getEventListeners__WEBPACK_IMPORTED_MODULE_4__["default"],
  delegate: _delegate__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * @see
 * https://developer.mozilla.org/de/docs/Web/API/Element/closest
 */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function closest(s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handleEvents; });
/* harmony import */ var _removeEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _addEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _delegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);



/**
 * Factory function that implements a fluent interface
 * to handle events by allowing method chaining.
 *
 * @param  {Element} node: DOM element
 * @return {Object}
 */

function handleEvents(node) {
  var fluent = Object.create(null);

  fluent.off = function (eventns, listener) {
    Object(_removeEventListener__WEBPACK_IMPORTED_MODULE_0__["default"])(node, eventns, listener);
    return fluent;
  };

  fluent.on = function (eventns, listener, useCapture) {
    Object(_addEventListener__WEBPACK_IMPORTED_MODULE_1__["default"])(node, eventns, listener, useCapture);
    return fluent;
  };

  fluent.delegate = function (eventns, selector, listener, useCapture) {
    Object(_delegate__WEBPACK_IMPORTED_MODULE_2__["default"])(node, eventns, selector, listener, useCapture);
    return fluent;
  };

  return fluent;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeEventListener; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _nodes_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);




/**
 * Removes an event-handler from a DOM element.
 * Events with namespace are allowed.
 *
 * @param {Element} node: DOM element
 * @param {String} [eventns]: name of the event/namespace to remove
 * @param {Function} [listener]: event handler
 */

function removeEventListener(node, eventns, listener) {
  var _splitEventName = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["splitEventName"])(eventns),
      _splitEventName2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_splitEventName, 2),
      event = _splitEventName2[0],
      namespace = _splitEventName2[1]; // gets the events associated to a DOM node


  var data = _nodes_array__WEBPACK_IMPORTED_MODULE_3__["default"].find(function (d) {
    return d.node === node;
  });
  if (!data) return;
  var events = event ? [event] : Object.keys(data.events);

  var removeHandlers = function remove(eventData) {
    var eventType = this.toString();
    if (!listener && !eventns || Object(_utils__WEBPACK_IMPORTED_MODULE_2__["match"])(event, eventType, namespace, eventData.namespace, listener) || eventData.handler === listener && (!eventns || Object(_utils__WEBPACK_IMPORTED_MODULE_2__["match"])(event, eventType, namespace, eventData.namespace))) return !!Object(_adapter__WEBPACK_IMPORTED_MODULE_1__["detachEvent"])(node, eventType, eventData.handler, eventData.useCapture);
    return true;
  };

  events.forEach(function (type) {
    // removes event-handlers by type, namespace or listener
    data.events[type] = (data.events[type] || []).filter(removeHandlers, type);
  });
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachEvent", function() { return attachEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachEvent", function() { return detachEvent; });
/**
 * Attaches an event-handler to a DOM element.
 *
 * @param {Element} node: DOM element
 * @param {String} eventName: name of the event to register
 * @param {Function} listener: event handler
 * @param {Boolean} [useCapture=false]: event capture
 */
function attachEvent(node, eventName, listener, useCapture) {
  if (node.addEventListener) {
    node.addEventListener(eventName, listener, !!useCapture);
  } else {
    node.attachEvent("on".concat(eventName), listener);
  }
}
/**
 * Removes an event-handler from a DOM element.
 *
 * @param {Element} node: DOM element
 * @param {String} eventName: name of the event to register
 * @param {Function} listener: event handler
 * @param {Boolean} [useCapture=false]: event capture
 */

function detachEvent(node, eventName, listener, useCapture) {
  if (node.removeEventListener) {
    node.removeEventListener(eventName, listener, !!useCapture);
  } else {
    node.detachEvent("on".concat(eventName), listener);
  }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitEventName", function() { return splitEventName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/**
 * Split the event name and the namespace
 *
 * @param  {String} eventns: name of the event/namespace
 * @return {Array}
 */
function splitEventName(eventns) {
  var i = (eventns || '').indexOf('.'),
      event = i > -1 ? eventns.substr(0, i) : eventns,
      namespace = i > -1 ? eventns.substr(i + 1) : undefined;
  return [event, namespace];
}
/**
 * Rules to match event handlers
 *
 * @param  {String} eventName: event name passed to the invoker function
 * @param  {String} eventType: event type in the `data.events` object
 * @param  {String} namespace: namespace passed to the invoker function
 * @param  {String} eventNamespace: namespace associated to the handler in `eventData` object
 * @param  {Function} handler: envent listener passed to the invoker function
 * @return {Boolean}
 */

function match(eventName, eventType, namespace, eventNamespace, handler) {
  return !handler && (eventName === eventType && !namespace || namespace === eventNamespace && !eventName || namespace === eventNamespace && eventName === eventType);
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NODES = [];
/* harmony default export */ __webpack_exports__["default"] = (NODES);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListenerBase", function() { return addEventListenerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addEventListener; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _nodes_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);




/**
 * Attaches an event-handler to a DOM element.
 * Events with namespace are allowed.
 * Event delegation is allowed.
 *
 * @param {Element} node: DOM element
 * @param {String} eventns: name of the event/namespace to register
 * @param {Function} listener: event handler
 * @param {Boolean} useCapture: event capture
 * @param {String} selector: CSS selector to the element delegated
 */

function addEventListenerBase(node, eventns, listener) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var selector = arguments.length > 4 ? arguments[4] : undefined;

  var _splitEventName = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["splitEventName"])(eventns),
      _splitEventName2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_splitEventName, 2),
      event = _splitEventName2[0],
      namespace = _splitEventName2[1];

  if (!event) throw Error('Event name was not provided'); // gets the events associated to a DOM node

  var data = _nodes_array__WEBPACK_IMPORTED_MODULE_3__["default"].find(function (d) {
    return d.node === node;
  });

  if (data === undefined) {
    data = Object.create(null); // no inherited properties

    data.events = Object.create(null);
    data.node = node;
    _nodes_array__WEBPACK_IMPORTED_MODULE_3__["default"].push(data);
  } // checks if the node has listeners associated to the event


  if (!data.events[event]) data.events[event] = [];
  var eventData = Object.create(null);
  eventData.namespace = namespace;
  eventData.handler = listener;
  eventData.useCapture = useCapture;
  eventData.selector = selector;
  eventData.delegated = selector && typeof selector === 'string'; // registers the event listener into the events

  data.events[event].push(eventData);
  Object(_adapter__WEBPACK_IMPORTED_MODULE_1__["attachEvent"])(node, event, listener, useCapture);
}
/**
 * Attaches an event-handler to a DOM element.
 * Events with namespace are allowed.
 *
 * @param {Element} node: DOM element
 * @param {String} eventns: name of the event/namespace to register
 * @param {Function} listener: event handler
 * @param {Boolean} [useCapture=false]: event capture
 */

function addEventListener(node, eventns, listener, useCapture) {
  addEventListenerBase(node, eventns, listener, useCapture);
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return delegate; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _addEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);



/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} node: DOM element
 * @param {String} eventns: name of the event/namespace to register
 * @param {String} selector: CSS selector for those elements that will propagate the event
 * @param {Function} listener: event handler
 * @return {Function}
 */

function listenerHelper(node, eventns, selector, listener) {
  return function eventHandler(e) {
    var _splitEventName = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["splitEventName"])(eventns),
        _splitEventName2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_splitEventName, 1),
        event = _splitEventName2[0];

    e.delegateTarget = e.target.closest(selector, event);

    if (e.delegateTarget) {
      // TODO: shouldn't be:
      // listener.call(e.delegateTarget, e)
      listener.call(node, e);
    }
  };
}
/**
 * Attaches a listener to a DOM `Element` but delegates the event-listener
 * to the DOM Elements beneath that matches with the `selector` provided.
 *
 * @param {Element} node: DOM element
 * @param {String} eventns: name of the event/namespace to register
 * @param {String} selector: CSS selector for those elements that will propagate the event
 * @param {Function} listener: event handler
 * @param {Boolean} [useCapture=false]: event capture
 */


function delegate(node, eventns, selector, listener, useCapture) {
  var eventHandler = listenerHelper(node, eventns, selector, listener);
  Object(_addEventListener__WEBPACK_IMPORTED_MODULE_1__["addEventListenerBase"])(node, eventns, eventHandler, useCapture, selector);
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getEventListeners; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _nodes_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);



/**
 * Gets the `eventData` objects matching the criteria
 *
 * @private
 * @param {Object} eventData: the event data associated to the event registered
 */

function getHandlers(eventData) {
  var eventName = this.eventName,
      eventType = this.eventType,
      namespace = this.namespace,
      listeners = this.listeners;

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["match"])(eventName, eventType, namespace, eventData.namespace)) {
    listeners[eventType] = listeners[eventType] || [];
    listeners[eventType].push(eventData);
  }
}
/**
 * Gets all event-handlers from a DOM element.
 * Events with namespace are allowed.
 *
 * @param  {Element} node: DOM element
 * @param  {String} [eventns]: name of the event/namespace
 * @return {Object}
 */


function getEventListeners(node, eventns) {
  var _splitEventName = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["splitEventName"])(eventns),
      _splitEventName2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_splitEventName, 2),
      event = _splitEventName2[0],
      namespace = _splitEventName2[1]; // gets the events associated to a DOM node


  var data = _nodes_array__WEBPACK_IMPORTED_MODULE_2__["default"].find(function (d) {
    return d.node === node;
  });
  var context = {
    namespace: namespace,
    eventName: event,
    listeners: {}
  };
  if (!data) return context.listeners;
  if (!eventns) return data.events; // Object with all event types

  var events = event ? [event] : Object.keys(data.events);
  events.forEach(function (eventType) {
    context.eventType = eventType;
    (data.events[eventType] || []).forEach(getHandlers, context);
  });
  return context.listeners;
}

/***/ })
/******/ ])["default"];
});