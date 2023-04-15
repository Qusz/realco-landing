import blockScrollY from 'utils/block-scrollY';
import showAlert from 'utils/show-alert';
import ElementsSelector from './elements-selector';

import TypeGuard from './type-guards';

export default function (): void {
  const elementsSelector = new ElementsSelector();
  const typeGuard = new TypeGuard();

  const navbarElements = elementsSelector.getNavbarElements();
  const activeClass = 'navbar--mobile';

  if (!typeGuard.isNavbarElements(navbarElements)) {
    showAlert('UNEXPECTED ERROR: Some HTML elements missing from DOM');
    return;
  }

  navbarElements.mobileMenuToggle.addEventListener('click', () => {
    navbarElements.navbar.classList.toggle(activeClass);

    blockScrollY();
  });
}
