/**
 * Split the event name and the namespace
 *
 * @param  {String} eventns: name of the event/namespace
 * @return {Array}
 */
export function splitEventName(eventns) {
  const i = (eventns || '').indexOf('.'),
    event = i > -1 ? eventns.substr(0, i) : eventns,
    namespace = i > -1 ? eventns.substr(i + 1) : undefined;
  return [event, namespace];
}

/**
 * Builds the context object passed to function callbacks to be used as 'this'
 *
 * @param  {String} eventName: event name passed to the invoker function
 * @param  {String} namespace: namespace passed to the invoker function
 * @return {Object}
 */
export function getContext(eventName, namespace) {
  return {
    eventName,
    namespace,
    listeners: Object.create(null),
  };
}

/**
 * Rules to match event handlers
 *
 * @param  {String} eventName: event name passed to the invoker function
 * @param  {String} eventType: event type in the `data.events` object
 * @param  {String} namespace: namespace passed to the invoker function
 * @param  {String} eventNamespace: namespace associated to the handler in `eventData` object
 * @param  {Function} handler: envent listener passed to the invoker function
 * @return {Boolean}
 */
export function match(eventName, eventType, namespace, eventNamespace, handler) {
  return (
    (eventName === eventType && !namespace && !handler) ||
    (namespace === eventNamespace && !eventName && !handler) ||
    (namespace === eventNamespace && eventName === eventType && !handler)
  );
}
