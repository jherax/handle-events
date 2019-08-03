import { attachEvent } from './adapter';
import { NODES } from './nodes-array';
import { splitEventName } from './utils';

/**
 * @typedef {import('./nodes-array').NodeConfig} NodeConfig
 * @typedef {import('./nodes-array').EventData} EventData
 * @typedef {import('./nodes-array').Options} Options
 */

/**
 * Attaches an event-listener to a DOM element.
 * - Events with namespace are allowed.
 * - Event delegation is allowed.
 *
 * @param {Element} node DOM element
 * @param {String} eventns Name of the event/namespace to register
 * @param {Function} listener Function of the event handler
 * @param {Boolean | Options} [useCapture=false] Indicates if the listener is dispatched before any other
 * @param {String} selector CSS selector for delegated elements that will propagate the event
 */
export function addEventListenerBase(node, eventns, listener, useCapture = false, selector) {
  const [event, namespace] = splitEventName(eventns);
  if (!event) throw Error('Event name was not provided');
  /**
   * Configuration of the DOM node
   * @type {NodeConfig}
   */
  let data = NODES.find(d => d.node === node);
  if (data == null) {
    // empty: no inherited properties
    data = Object.create(null);
    data.events = Object.create(null);
    data.node = node;
    NODES.push(data);
  }
  // checks if the node has listeners associated to the event
  if (!data.events[event]) data.events[event] = [];
  /**
   * Configuration of the event listener
   * @type {EventData}
   */
  const eventData = Object.create(null);
  eventData.namespace = namespace;
  eventData.handler = listener;
  eventData.useCapture = useCapture;
  eventData.selector = selector;
  eventData.delegated = typeof selector === 'string';
  // registers the event listener into the events
  data.events[event].push(eventData);
  attachEvent(node, event, listener, useCapture);
}

/**
 * Attaches an event-listener to a DOM element.
 * - Events with namespace are allowed.
 *
 * @param {Element} node DOM element
 * @param {String} eventns Name of the event/namespace to register
 * @param {Function} listener Function of the event handler
 * @param {Boolean | Options} [useCapture=false] Indicates if the listener is dispatched before any other
 */
export default function addEventListener(node, eventns, listener, useCapture) {
  addEventListenerBase(node, eventns, listener, useCapture);
}
