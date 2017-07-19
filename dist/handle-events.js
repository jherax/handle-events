/*! handle-events@v1.0.0. Jherax 2017. Visit https://github.com/jherax/handle-events */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getEventListeners = getEventListeners;

var _adapter = __webpack_require__(3);

var _utils = __webpack_require__(4);

/**
 * @private
 */
var NODES = [];

/**
 * Attaches an event-handler to a DOM element.
 * Events with namespace are allowed.
 *
 * @param {Element} node: DOM element
 * @param {String} eventns: name of the event/namespace to register
 * @param {Function} listener: event handler
 */
function addEventListener(node, eventns, listener) {
  var _splitEventName = (0, _utils.splitEventName)(eventns),
      _splitEventName2 = _slicedToArray(_splitEventName, 2),
      event = _splitEventName2[0],
      namespace = _splitEventName2[1];

  if (!event) throw Error('Event name was not provided');
  // gets the events associated to a DOM node
  var data = NODES.find(function (d) {
    return d.node === node;
  });
  if (data === undefined) {
    data = Object.create(null); // no inherited properties
    data.events = Object.create(null);
    data.node = node;
    NODES.push(data);
  }
  // checks if the node has listeners associated to the event
  if (!data.events[event]) data.events[event] = [];
  var eventData = Object.create(null);
  eventData.namespace = namespace;
  eventData.handler = listener;
  // registers the event listener into the events
  data.events[event].push(eventData);
  (0, _adapter.attachEvent)(node, event, listener);
}

/**
 * Removes an event-handler from a DOM element.
 * Events with namespace are allowed.
 *
 * @private
 * @param {Element} node: DOM element
 * @param {String} eventns: (optional) name of the event/namespace to remove
 * @param {Function} listener: (optional) event handler
 */
function removeEventListener(node, eventns, listener) {
  var _splitEventName3 = (0, _utils.splitEventName)(eventns),
      _splitEventName4 = _slicedToArray(_splitEventName3, 2),
      event = _splitEventName4[0],
      namespace = _splitEventName4[1];
  // gets the events associated to a DOM node


  var data = NODES.find(function (d) {
    return d.node === node;
  });
  if (!data) return;
  var events = event ? [event] : Object.keys(data.events);
  var removeHandlers = function remove(eventData) {
    var eventType = this.toString();
    if (!listener && !eventns || (0, _utils.match)(event, eventType, namespace, eventData.namespace, listener) || eventData.handler === listener && (!eventns || (0, _utils.match)(event, eventType, namespace, eventData.namespace))) return !!(0, _adapter.detachEvent)(node, eventType, eventData.handler);
    return true;
  };
  events.forEach(function (type) {
    // removes event-handlers by type, namespace or listener
    data.events[type] = (data.events[type] || []).filter(removeHandlers, type);
  });
}

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

// TODO: create a method to get events from jQuery

/**
 * Gets all event-handlers from a DOM element.
 * Events with namespace are allowed.
 *
 * @param  {Element} node: DOM element
 * @param  {String} eventns: (optional) name of the event/namespace
 * @return {Object}
 */
function getEventListeners(node, eventns) {
  var _splitEventName5 = (0, _utils.splitEventName)(eventns),
      _splitEventName6 = _slicedToArray(_splitEventName5, 2),
      event = _splitEventName6[0],
      namespace = _splitEventName6[1];
  // gets the events associated to a DOM node


  var data = NODES.find(function (d) {
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _facade = __webpack_require__(2);

var _facade2 = _interopRequireDefault(_facade);

var _events = __webpack_require__(0);

var evt = _interopRequireWildcard(_events);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  handleEvents: _facade2.default,
  addEventListener: evt.addEventListener,
  removeEventListener: evt.removeEventListener,
  getEventListeners: evt.getEventListeners
};
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleEvents;

var _events = __webpack_require__(0);

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
    (0, _events.removeEventListener)(node, eventns, listener);
    return fluent;
  };
  fluent.on = function (eventns, listener) {
    (0, _events.addEventListener)(node, eventns, listener);
    return fluent;
  };
  return fluent;
}
module.exports = exports['default'];

/***/ }),
/* 3 */
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
 */
function attachEvent(node, eventName, listener) {
  if (node.addEventListener) {
    node.addEventListener(eventName, listener, false);
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
 */
function detachEvent(node, eventName, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(eventName, listener, false);
  } else {
    node.detachEvent("on" + eventName, listener);
  }
}

/***/ }),
/* 4 */
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

/***/ })
/******/ ]);
});