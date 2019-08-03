import { NODES } from './nodes-array';
import { match, splitEventName } from './utils';

/**
 * @typedef {import('./nodes-array').NodeConfig} NodeConfig
 * @typedef {import('./nodes-array').EventsConfig} EventsConfig
 * @typedef {import('./nodes-array').EventData} EventData
 */

/**
 * Gets the `eventData` objects matching the criteria.
 *
 * @param {EventData} eventData The event-data associated to the event registered
 */
function getHandlers(eventData) {
  const { eventName, eventType, namespace, listeners } = this;
  if (match(eventName, eventType, namespace, eventData.namespace)) {
    listeners[eventType] = listeners[eventType] || [];
    listeners[eventType].push(eventData);
  }
}

/**
 * Gets all event-handlers from a DOM element.
 * - Events with namespace are allowed.
 *
 * @param {Element} node DOM element
 * @param {String} [eventns] Name of the event/namespace
 * @returns {EventsConfig | {}}
 */
export default function getEventListeners(node, eventns) {
  const [event, namespace] = splitEventName(eventns);
  /**
   * Configuration of the DOM node
   * @type {NodeConfig}
   */
  const data = NODES.find(d => d.node === node);
  /**
   * @type {EventsConfig}
   */
  const listeners = {};
  const context = {
    namespace,
    eventName: event,
    listeners,
  };
  if (!data) return listeners; // empty object
  if (!eventns) return data.events; // configuration of all events
  const events = event ? [event] : Object.keys(data.events);
  events.forEach(type => {
    context.eventType = type;
    (data.events[type] || []).forEach(getHandlers, context);
  });
  return context.listeners; // configuration by specific event
}
