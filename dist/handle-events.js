/*! handle-events@v1.1.1. Jherax 2017. Visit https://github.com/jherax/handle-events */
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
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitEventName = splitEventName;
exports.match = match;
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var NODES = [];

exports.default = NODES;
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.addEventListenerBase = addEventListenerBase;
exports.default = addEventListener;

var _adapter = __webpack_require__(4);

var _utils = __webpack_require__(0);

var _nodesArray = __webpack_require__(1);

var _nodesArray2 = _interopRequireDefault(_nodesArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var selector = arguments[4];

  var _splitEventName = (0, _utils.splitEventName)(eventns),
      _splitEventName2 = _slicedToArray(_splitEventName, 2),
      event = _splitEventName2[0],
      namespace = _splitEventName2[1];

  if (!event) throw Error('Event name was not provided');
  // gets the events associated to a DOM node
  var data = _nodesArray2.default.find(function (d) {
    return d.node === node;
  });
  if (data === undefined) {
    data = Object.create(null); // no inherited properties
    data.events = Object.create(null);
    data.node = node;
    _nodesArray2.default.push(data);
  }
  // checks if the node has listeners associated to the event
  if (!data.events[event]) data.events[event] = [];
  var eventData = Object.create(null);
  eventData.namespace = namespace;
  eventData.handler = listener;
  eventData.useCapture = useCapture;
  eventData.selector = selector;
  eventData.delegated = selector && typeof selector === 'string';
  // registers the event listener into the events
  data.events[event].push(eventData);
  (0, _adapter.attachEvent)(node, event, listener, useCapture);
}

/**
 * Attaches an event-handler to a DOM element.
 * Events with namespace are allowed.
 *
 * @param {Element} node: DOM element
 * @param {String} eventns: name of the event/namespace to register
 * @param {Function} listener: event handler
 * @param {Boolean} useCapture: event capture
 */
function addEventListener(node, eventns, listener, useCapture) {
  addEventListenerBase(node, eventns, listener, useCapture);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = removeEventListener;

var _adapter = __webpack_require__(4);

var _utils = __webpack_require__(0);

var _nodesArray = __webpack_require__(1);

var _nodesArray2 = _interopRequireDefault(_nodesArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes an event-handler from a DOM element.
 * Events with namespace are allowed.
 *
 * @param {Element} node: DOM element
 * @param {String} eventns: (optional) name of the event/namespace to remove
 * @param {Function} listener: (optional) event handler
 */
function removeEventListener(node, eventns, listener) {
  var _splitEventName = (0, _utils.splitEventName)(eventns),
      _splitEventName2 = _slicedToArray(_splitEventName, 2),
      event = _splitEventName2[0],
      namespace = _splitEventName2[1];
  // gets the events associated to a DOM node


  var data = _nodesArray2.default.find(function (d) {
    return d.node === node;
  });
  if (!data) return;
  var events = event ? [event] : Object.keys(data.events);
  var removeHandlers = function remove(eventData) {
    var eventType = this.toString();
    if (!listener && !eventns || (0, _utils.match)(event, eventType, namespace, eventData.namespace, listener) || eventData.handler === listener && (!eventns || (0, _utils.match)(event, eventType, namespace, eventData.namespace))) return !!(0, _adapter.detachEvent)(node, eventType, eventData.handler, eventData.useCapture);
    return true;
  };
  events.forEach(function (type) {
    // removes event-handlers by type, namespace or listener
    data.events[type] = (data.events[type] || []).filter(removeHandlers, type);
  });
}
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachEvent = attachEvent;
exports.detachEvent = detachEvent;
/**
 * Attaches an event-handler to a DOM element.
 *
 * @param {Element} node: DOM element
 * @param {String} eventName: name of the event to register
 * @param {Function} listener: event handler
 * @param {Boolean} useCapture: event capture
 */
function attachEvent(node, eventName, listener, useCapture) {
  if (node.addEventListener) {
    node.addEventListener(eventName, listener, !!useCapture);
  } else {
    node.attachEvent("on" + eventName, listener);
  }
}

/**
 * Removes an event-handler from a DOM element.
 *
 * @param {Element} node: DOM element
 * @param {String} eventName: name of the event to register
 * @param {Function} listener: event handler
 * @param {Boolean} useCapture: event capture
 */
function detachEvent(node, eventName, listener, useCapture) {
  if (node.removeEventListener) {
    node.removeEventListener(eventName, listener, !!useCapture);
  } else {
    node.detachEvent("on" + eventName, listener);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = delegate;

var _addEventListener = __webpack_require__(2);

/**
 * Attaches a listener to a DOM `Element` but delegates the event-listener
 * to the DOM Elements beneath that matches with the `selector` provided.
 *
 * @param {Element} node: DOM element
 * @param {String} eventns: name of the event/namespace to register
 * @param {String} selector: CSS selector for those elements that will propagate the event
 * @param {Function} listener: event handler
 * @param {Boolean} useCapture: event capture
 */
function delegate(node, eventns, selector, listener, useCapture) {
  (0, _addEventListener.addEventListenerBase)(node, eventns, function (e) {
    if (e.target.matches(selector)) {
      listener(e);
    }
  }, useCapture, selector);
}
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(7);

var _facade = __webpack_require__(8);

var _facade2 = _interopRequireDefault(_facade);

var _addEventListener = __webpack_require__(2);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _removeEventListener = __webpack_require__(3);

var _removeEventListener2 = _interopRequireDefault(_removeEventListener);

var _getEventListeners = __webpack_require__(9);

var _getEventListeners2 = _interopRequireDefault(_getEventListeners);

var _delegate = __webpack_require__(5);

var _delegate2 = _interopRequireDefault(_delegate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  handleEvents: _facade2.default,
  addEventListener: _addEventListener2.default,
  removeEventListener: _removeEventListener2.default,
  getEventListeners: _getEventListeners2.default,
  delegate: _delegate2.default
};
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 */

if (typeof Element !== 'undefined' && !Element.prototype.matches) {
  var proto = Element.prototype;

  proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleEvents;

var _removeEventListener = __webpack_require__(3);

var _removeEventListener2 = _interopRequireDefault(_removeEventListener);

var _addEventListener = __webpack_require__(2);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _delegate = __webpack_require__(5);

var _delegate2 = _interopRequireDefault(_delegate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    (0, _removeEventListener2.default)(node, eventns, listener);
    return fluent;
  };
  fluent.on = function (eventns, listener, useCapture) {
    (0, _addEventListener2.default)(node, eventns, listener, useCapture);
    return fluent;
  };
  fluent.delegate = function (eventns, selector, listener, useCapture) {
    (0, _delegate2.default)(node, eventns, selector, listener, useCapture);
    return fluent;
  };
  return fluent;
}
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = getEventListeners;

var _utils = __webpack_require__(0);

var _nodesArray = __webpack_require__(1);

var _nodesArray2 = _interopRequireDefault(_nodesArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  if ((0, _utils.match)(eventName, eventType, namespace, eventData.namespace)) {
    listeners[eventType] = listeners[eventType] || [];
    listeners[eventType].push(eventData);
  }
}

// TODO: create a method to get events from jQuery.
// See: https://github.com/jherax/handle-events/issues/1

/**
 * Gets all event-handlers from a DOM element.
 * Events with namespace are allowed.
 *
 * @param  {Element} node: DOM element
 * @param  {String} eventns: (optional) name of the event/namespace
 * @return {Object}
 */
function getEventListeners(node, eventns) {
  var _splitEventName = (0, _utils.splitEventName)(eventns),
      _splitEventName2 = _slicedToArray(_splitEventName, 2),
      event = _splitEventName2[0],
      namespace = _splitEventName2[1];
  // gets the events associated to a DOM node


  var data = _nodesArray2.default.find(function (d) {
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
module.exports = exports['default'];

/***/ })
/******/ ]);
});