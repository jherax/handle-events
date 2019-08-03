import addEventListener from './addEventListener';
import delegate from './delegate';
import dispatchEvent from './dispatchEvent';
import removeEventListener from './removeEventListener';

/**
 * Facade to handle events
 *
 * @typedef {Object<string, Function>} Facade
 * @property {Function} on Attaches an event listener
 * @property {Function} off Removes an event listener
 * @property {Function} delegate Attaches a delegated event listener
 * @property {Function} trigger Dispatches an Event
 */
/**
 * This Facade is a factory-function to manage event-listeners
 * which implements a fluent interface to allow method chaining.
 *
 * @param {Element} node DOM element
 * @returns {Facade}
 */
export default function handleEvents(node) {
  /**
   * @type {Facade}
   */
  const fluent = Object.create(null);

  fluent.off = (eventns, listener) => {
    removeEventListener(node, eventns, listener);
    return fluent;
  };

  fluent.on = (eventns, listener, useCapture) => {
    addEventListener(node, eventns, listener, useCapture);
    return fluent;
  };

  fluent.delegate = (eventns, selector, listener, useCapture) => {
    delegate(node, eventns, selector, listener, useCapture);
    return fluent;
  };

  fluent.trigger = (eventns, options) => {
    dispatchEvent(node, eventns, options);
    return fluent;
  };

  return fluent;
}
