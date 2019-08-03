/* eslint import/prefer-default-export:0 */

/**
 * @typedef {Object} Options - Characteristics about the event-listener
 * @property {boolean} capture Indicates if the listener is dispatched before any other listeners.
 * @property {boolean} once Indicates if the listener should be invoked at most once after being added.
 * If `true`, the listener would be automatically removed when invoked.
 * @property {boolean} passive If true, indicates that the listener will never call preventDefault().
 */

/**
 * @typedef {Object} EventData - Configuration of the event-listener
 * @property {string} namespace The event-namespace
 * @property {Function} handler The event-handler function
 * @property {boolean | Options} useCapture Indicates if the listener is dispatched before any other
 * @property {string} selector CSS selector for delegated DOM elements
 * @property {boolean} delegated Indicates if the event-listener is delegated
 */

/**
 * @typedef {Object<string, EventData[]>} EventsConfig - Configuration of all events
 */

/**
 * @typedef {Object} NodeConfig - Configuration of the DOM nodes
 * @property {Element} node DOM element
 * @property {EventsConfig} events Configuration of all events
 */

/**
 * @typedef {NodeConfig[]} Configuration - Handles configuration of browser-events
 */

/**
 * Flyweight pattern: Holds the shared configuration of event-handlers.
 *
 * @type {Configuration}
 */
export const NODES = [];
