import './polyfill';
import handleEvents from './facade';
import addEventListener from './addEventListener';
import removeEventListener from './removeEventListener';
import getEventListeners from './getEventListeners';
import delegate from './delegate';

export default {
  handleEvents,
  addEventListener,
  removeEventListener,
  getEventListeners,
  delegate,
};
