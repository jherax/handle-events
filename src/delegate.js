import { addEventListenerBase } from './addEventListener';
import { splitEventName } from './utils';

/**
 * @typedef {import('./nodes-array').Options} Options
 */

/**
 * Creates an event-handler that is executed
 * in the context of the `selector`'s closest match.
 *
 * @param {Element} target DOM element
 * @param {String} eventns Name of the event/namespace to register
 * @param {String} selector CSS selector for delegated elements that will propagate the event
 * @param {Function} listener Function of the event handler
 * @returns {Function}
 */
function createHandler(target, eventns, selector, listener) {
  return function eventHandler(e) {
    const [event] = splitEventName(eventns);
    e.delegateTarget = e.target.closest(selector, event);
    if (e.delegateTarget) {
      listener.call(target, e);
      // TODO: listener.call(e.delegateTarget, e)
    }
  };
}

/**
 * Attaches a delegated event listener to a DOM `Element`, so that
 * the DOM Elements beneath that matches the `selector` provided,
 * bubles the event up.
 *
 * @param {Element} node DOM element
 * @param {String} eventns Name of the event/namespace to register
 * @param {String} selector CSS selector for delegated elements that will propagate the event
 * @param {Function} listener Function of the event handler
 * @param {Boolean | Options} [useCapture=false] Indicates if the listener is dispatched before any other
 */
export default function delegate(node, eventns, selector, listener, useCapture) {
  const eventHandler = createHandler(node, eventns, selector, listener);
  addEventListenerBase(node, eventns, eventHandler, useCapture, selector);
}
