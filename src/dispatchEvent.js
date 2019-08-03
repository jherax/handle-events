import { triggerEvent } from './adapter';
import { NODES } from './nodes-array';
import { splitEventName } from './utils';

/**
 * Dispatches an Event at the specified target.
 *
 * @param {Element} node DOM element
 * @param {String} eventns Event-name/namespace to dispatch
 * @param {Object<string, any>} options Properties to configure the event
 * @returns {Boolean} `false` if the event was canceled with `preventDefault()`,
 * or `true` if the event was not canceled.
 */
export default function dispatchEvent(node, eventns, options) {
  const [event /* namespace */] = splitEventName(eventns);
  if (!event) throw Error('Event name was not provided');
  // configuration of the DOM node
  const data = NODES.find(d => d.node === node);
  // same behavior as original dispatch
  if (data == null) return true;
  return triggerEvent(node, event, options);
}
