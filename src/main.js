import './prototypes';
import handleEvents from './facade';
import * as evt from './events';

export default {
  handleEvents,
  addEventListener: evt.addEventListener,
  removeEventListener: evt.removeEventListener,
  getEventListeners: evt.getEventListeners,
  delegate: evt.delegate,
};
