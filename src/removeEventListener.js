import { detachEvent } from './adapter';
import NODES from './nodes-array';
import { match, splitEventName } from './utils';

/**
 * Removes an event-listener from a DOM element.
 * Events with namespace are allowed.
 *
 * @param {Element} node: DOM element
 * @param {String} [eventns]: name of the event/namespace to remove
 * @param {Function} [listener]: event listener callback
 */
export default function removeEventListener(node, eventns, listener) {
  const [event, namespace] = splitEventName(eventns);
  // gets the events associated to a DOM node
  const data = NODES.find(d => d.node === node);
  if (data == null) return;
  const events = event ? [event] : Object.keys(data.events);

  const removeHandlers = function remove(eventData) {
    const eventType = this.toString();
    switch (true) {
      case !listener && !eventns:
      case match(event, eventType, namespace, eventData.namespace, listener):
      case eventData.handler === listener &&
        (!eventns || match(event, eventType, namespace, eventData.namespace)):
        return !!detachEvent(node, eventType, eventData.handler, eventData.useCapture);
      default:
        return true;
    }
  };

  events.forEach(type => {
    // removes event-handlers by type, namespace or listener
    data.events[type] = (data.events[type] || []).filter(removeHandlers, type);
  });
}
