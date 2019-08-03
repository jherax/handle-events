import { isNotBoolean, isNotPlainObject } from './utils';

/**
 * @typedef {import('./nodes-array').Options} Options
 */

/**
 * Adapter to handle events
 *
 * @typedef {Object<string, Function>} EventTarget
 * @property {Function} attach Attaches an event listener
 * @property {Function} detach Removes an event listener
 * @property {Function} dispatch Dispatches an Event
 */
/**
 * @type {EventTarget}
 */
const adapter = (() => {
  const api = Object.create(null);
  const element = document.createElement('button');
  const props = { bubbles: true, cancelable: true };
  // https://cutt.ly/mdn-event

  api.attach =
    'addEventListener' in element
      ? (target, ...args) => target.addEventListener(...args)
      : (target, eventName, listener) => target.attachEvent(`on${eventName}`, listener);

  api.detach =
    'removeEventListener' in element
      ? (target, ...args) => target.removeEventListener(...args)
      : (target, eventName, listener) => target.detachEvent(`on${eventName}`, listener);

  api.dispatch =
    'CustomEvent' in global
      ? (target, eventName, options) => {
          const event = new CustomEvent(eventName, props);
          if (options) Object.assign(event, options);
          return target.dispatchEvent(event);
        }
      : (target, eventName, options) => {
          const event = document.createEvent('Event');
          event.initEvent(eventName, props.bubbles, props.cancelable);
          if (options) Object.assign(event, options);
          return target.dispatchEvent(event);
        };

  return api;
})();

/**
 * Attaches an event-listener to a DOM element.
 * @see https://cutt.ly/mdn-addEventListener
 *
 * @param {Element} target DOM element
 * @param {String} eventName Name of the event to register
 * @param {Function} listener Function of the event handler
 * @param {Boolean | Options} [useCapture=false] Indicates if the listener is dispatched before any other
 */
export function attachEvent(target, eventName, listener, useCapture) {
  if (isNotBoolean(useCapture) && isNotPlainObject(useCapture)) useCapture = false;
  adapter.attach(target, eventName, listener, useCapture);
}

/**
 * Removes an event-listener from a DOM element.
 *
 * @param {Element} target DOM element
 * @param {String} eventName Name of the event to remove
 * @param {Function} listener Function of the event handler
 * @param {Boolean} [useCapture=false] Indicates if the listener is dispatched before any other
 */
export function detachEvent(target, eventName, listener, useCapture) {
  adapter.detach(target, eventName, listener, !!useCapture);
}

/**
 * Dispatches an Event at the specified target.
 * @see https://cutt.ly/mdn-trigger-events
 *
 * @param {Element} target DOM element
 * @param {String} eventName Name of the event to dispatch
 * @param {Object<string, any>} options Properties to configure the event
 * @returns {Boolean} `false` if the event was canceled with `preventDefault()`,
 * or `true` if the event was not canceled.
 */
export function triggerEvent(target, eventName, options) {
  return adapter.dispatch(target, eventName, options);
}
