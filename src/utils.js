/**
 * Splits the event-name and the namespace
 *
 * @param {String} eventns Composition of event-name and namespace
 * @returns {Array}
 */
export function splitEventName(eventns) {
  const i = (eventns || '').indexOf('.'),
    event = i > -1 ? eventns.substr(0, i) : eventns,
    namespace = i > -1 ? eventns.substr(i + 1) : undefined;
  return [event, namespace];
}

/**
 * Rules to match event handlers
 *
 * @param {String} eventName Event name passed to the invoker function
 * @param {String} eventType Event type in the `data.events` object
 * @param {String} namespace Namespace passed to the invoker function
 * @param {String} eventNamespace Namespace associated to the handler in `eventData` object
 * @param {Function} handler Envent listener passed to the invoker function
 * @returns {Boolean}
 */
export function match(eventName, eventType, namespace, eventNamespace, handler) {
  if (handler) return false;
  return (
    (eventName === eventType && !namespace) ||
    (namespace === eventNamespace && !eventName) ||
    (namespace === eventNamespace && eventName === eventType)
  );
}

/**
 * Determines if the entry parameter is not a plain object.
 *
 * @param {any} value The value to test
 * @returns {Boolean}
 */
export function isNotPlainObject(value) {
  return Object.prototype.toString.call(value) !== '[object Object]';
}

/**
 * Determines if the entry parameter is not a Boolean.
 *
 * @param {any} value The value to test
 * @returns {Boolean}
 */
export function isNotBoolean(value) {
  return typeof value !== 'boolean';
}
