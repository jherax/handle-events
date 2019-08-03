import './polyfill';
import handleEvents from './fluent-facade';
import addEventListener from './addEventListener';
import removeEventListener from './removeEventListener';
import getEventListeners from './getEventListeners';
import dispatchEvent from './dispatchEvent';
import delegate from './delegate';

export default {
  handleEvents,
  addEventListener,
  removeEventListener,
  getEventListeners,
  dispatchEvent,
  delegate,
};
