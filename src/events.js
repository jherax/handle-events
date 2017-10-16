import {attachEvent, detachEvent} from './adapter';
import {splitEventName, match} from './utils';

/**
 * @private
 */
const NODES = [];

/**
 * Attaches an event-handler to a DOM element.
 * Events with namespace are allowed.
 *
 * @param {Element} node: DOM element
 * @param {String} eventns: name of the event/namespace to register
 * @param {Function} listener: event handler
 * @param {Boolean} useCapture: event capture
 */
export function addEventListener(node, eventns, listener, useCapture = false) {
  const [event, namespace] = splitEventName(eventns);
  if (!event) throw Error('Event name was not provided');
  // gets the events associated to a DOM node
  let data = NODES.find(d => d.node === node);
  if (data === undefined) {
    data = Object.create(null); // no inherited properties
    data.events = Object.create(null);
    data.node = node;
    NODES.push(data);
  }
  // checks if the node has listeners associated to the event
  if (!data.events[event]) data.events[event] = [];
  const eventData = Object.create(null);
  eventData.namespace = namespace;
  eventData.handler = listener;
  eventData.useCapture = useCapture;
  // registers the event listener into the events
  data.events[event].push(eventData);
  attachEvent(node, event, listener, useCapture);
}

/**
 * Removes an event-handler from a DOM element.
 * Events with namespace are allowed.
 *
 * @param {Element} node: DOM element
 * @param {String} eventns: (optional) name of the event/namespace to remove
 * @param {Function} listener: (optional) event handler
 */
export function removeEventListener(node, eventns, listener) {
  const [event, namespace] = splitEventName(eventns);
  // gets the events associated to a DOM node
  const data = NODES.find(d => d.node === node);
  if (!data) return;
  const events = event ? [event] : Object.keys(data.events);
  const removeHandlers = function remove(eventData) {
    const eventType = this.toString();
    if ((!listener && !eventns) ||
      match(event, eventType, namespace, eventData.namespace, listener) ||
      (eventData.handler === listener &&
        (!eventns || match(event, eventType, namespace, eventData.namespace))
      )) return !!detachEvent(node, eventType, eventData.handler, eventData.useCapture);
    return true;
  };
  events.forEach((type) => {
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
  const {eventName, eventType, namespace, listeners} = this;
  if (match(eventName, eventType, namespace, eventData.namespace)) {
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
export function getEventListeners(node, eventns) {
  const [event, namespace] = splitEventName(eventns);
  // gets the events associated to a DOM node
  const data = NODES.find(d => d.node === node);
  const context = {
    namespace,
    eventName: event,
    listeners: {},
  };
  if (!data) return context.listeners;
  if (!eventns) return data.events; // Object with all event types
  const events = event ? [event] : Object.keys(data.events);
  events.forEach((eventType) => {
    context.eventType = eventType;
    (data.events[eventType] || []).forEach(getHandlers, context);
  });
  return context.listeners;
}

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
export function delegate(node, eventns, selector, listener, useCapture) {
  addEventListener(node, eventns, (e) => {
    if (e.target.matches(selector)) {
      listener(e);
    }
  }, useCapture);
}
