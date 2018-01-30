import {addEventListenerBase} from './addEventListener';
import {splitEventName} from './utils';

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
    const [event] = splitEventName(eventns);
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
export default function delegate(node, eventns, selector, listener, useCapture) {
  const eventHandler = listenerHelper(node, eventns, selector, listener);
  addEventListenerBase(node, eventns, eventHandler, useCapture, selector);
}
