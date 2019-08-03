/**
 * Attaches an event-listener to a DOM element.
 *
 * @param {Element} node: DOM element
 * @param {String} eventName: name of the event to register
 * @param {Function} listener: event listener callback
 * @param {Boolean} [useCapture=false]: event capture
 */
export function attachEvent(node, eventName, listener, useCapture) {
  if (node.addEventListener) {
    node.addEventListener(eventName, listener, !!useCapture);
  } else {
    node.attachEvent(`on${eventName}`, listener);
  }
}

/**
 * Removes an event-listener from a DOM element.
 *
 * @param {Element} node: DOM element
 * @param {String} eventName: name of the event to register
 * @param {Function} listener: event listener callback
 * @param {Boolean} [useCapture=false]: event capture
 */
export function detachEvent(node, eventName, listener, useCapture) {
  if (node.removeEventListener) {
    node.removeEventListener(eventName, listener, !!useCapture);
  } else {
    node.detachEvent(`on${eventName}`, listener);
  }
}
