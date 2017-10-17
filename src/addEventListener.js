import {attachEvent} from './adapter';
import {splitEventName} from './utils';
import NODES from './nodes-array';

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
export function addEventListenerBase(node, eventns, listener, useCapture = false, selector) {
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
  eventData.selector = selector;
  eventData.delegated = selector && typeof selector === 'string';
  // registers the event listener into the events
  data.events[event].push(eventData);
  attachEvent(node, event, listener, useCapture);
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
export default function addEventListener(node, eventns, listener, useCapture) {
  addEventListenerBase(node, eventns, listener, useCapture);
}
