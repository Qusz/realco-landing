import 'normalize.css';
import '@/scss/style.scss';
import 'toastify-js/src/toastify.css';

import navbar from './modules/navbar';
import notification from './modules/notification';
import animationStopper from './modules/animation-stopper';

(() => {
  navbar();
  notification();
  animationStopper();
})();
