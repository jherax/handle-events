import {addEventListenerBase} from './addEventListener';

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
  addEventListenerBase(node, eventns, (e) => {
    if (e.target.matches(selector)) {
      listener(e);
    }
  }, useCapture, selector);
}
