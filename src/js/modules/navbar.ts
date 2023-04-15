import blockScrollY from 'utils/block-scrollY';
import ElementsSelector from './elements-selector';

import TypeGuard from './type-guards';

export default function (): void {
  const elementsSelector = new ElementsSelector();
  const typeGuard = new TypeGuard();

  const navbarElements = elementsSelector.getNavbarElements();
  const activeClass = 'navbar--mobile';

  if (!typeGuard.isNavbarElements(navbarElements)) {
    console.log('HTML elements missing from DOM');
    return;

    // TODO Add proper error handling
  }

  navbarElements.mobileMenuToggle.addEventListener('click', () => {
    navbarElements.navbar.classList.toggle(activeClass);

    blockScrollY();
  });
}
