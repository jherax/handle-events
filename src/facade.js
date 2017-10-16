import {addEventListener, removeEventListener} from './events';

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
  fluent.on = (eventns, listener, useCapture = false) => {
    addEventListener(node, eventns, listener, useCapture);
    return fluent;
  };
  return fluent;
}
