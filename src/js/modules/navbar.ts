import blockScrollY from 'utils/block-scrollY';
import { getNavbarElements } from './elements-selector';

import TypeGuard from './type-guards';

export default function (): void {
  const navbarElements = getNavbarElements();
  const typeGuard = new TypeGuard();

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
