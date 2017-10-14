/**
 * Attaches an event-handler to a DOM element.
 *
 * @param {Element} node: DOM element
 * @param {String} eventName: name of the event to register
 * @param {Function} listener: event handler
 * @param {Boolean} useCapture: Event Capture
 */
export function attachEvent(node, eventName, listener, useCapture = false) {
  if (node.addEventListener) {
    node.addEventListener(eventName, listener, useCapture);
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
 * @param {Boolean} useCapture: Event Capture
 */
export function detachEvent(node, eventName, listener, useCapture = false) {
  if (node.removeEventListener) {
    node.removeEventListener(eventName, listener, useCapture);
  } else {
    node.detachEvent(`on${eventName}`, listener);
  }
}
