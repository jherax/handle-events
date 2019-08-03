import NODES from './nodes-array';
import { match, splitEventName } from './utils';

/**
 * Gets the `eventData` objects matching the criteria
 *
 * @private
 * @param {Object} eventData: the event data associated to the event registered
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
 * Events with namespace are allowed.
 *
 * @param  {Element} node: DOM element
 * @param  {String} [eventns]: name of the event/namespace
 * @return {Object}
 */
export default function getEventListeners(node, eventns) {
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
  events.forEach(eventType => {
    context.eventType = eventType;
    (data.events[eventType] || []).forEach(getHandlers, context);
  });
  return context.listeners;
}
