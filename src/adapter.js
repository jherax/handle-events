/**
 * Attaches an event-handler to a DOM element.
 *
 * @param {Element} node: DOM element
 * @param {String} eventName: name of the event to register
 * @param {Function} listener: event handler
 */
export function attachEvent(node, eventName, listener) {
  if (node.addEventListener) {
    node.addEventListener(eventName, listener, false);
  } else {
    node.attachEvent(`on${eventName}`, listener);
  }
}

/**
 * Removes an event-handler from a DOM element.
 *
 * @param {Element} node: DOM element
 * @param {String} eventName: name of the event to register
 * @param {Function} listener: event handler
 */
export function detachEvent(node, eventName, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(eventName, listener, false);
  } else {
    node.detachEvent(`on${eventName}`, listener);
  }
}
