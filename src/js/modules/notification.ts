import showAlert from 'utils/show-alert';
import hideElement from 'utils/hide-element';
import ElementsSelector from './elements-selector';

import TypeGuard from './type-guards';

export default function (): void {
  const elementsSelector = new ElementsSelector();
  const typeGuard = new TypeGuard();

  const notificationElements = elementsSelector.getNotificationElements();

  if (!typeGuard.isNotificationElements(notificationElements)) {
    showAlert('UNEXPECTED ERROR: Some HTML elements missing from DOM');
    return;
  }

  notificationElements.closeButton.addEventListener('click', () => {
    hideElement(notificationElements.notification);
  });
}
