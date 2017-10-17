import removeEventListener from './removeEventListener';
import addEventListener from './addEventListener';
import delegate from './delegate';

/**
 * Factory function that implements a fluent interface
 * to handle events by allowing method chaining.
 *
 * @param  {Element} node: DOM element
 * @return {Object}
 */
export default function handleEvents(node) {
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
  return fluent;
}
