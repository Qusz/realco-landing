import { navbarElements, isNavbarElements } from 'modules/elements-selector';

export default function (): void {
  const activeClass = 'navbar--mobile';

  if (!isNavbarElements(navbarElements)) {
    console.log('HTML elements missing from DOM');
    return;

    // TODO Add proper error handling
  }

  navbarElements.mobileMenuToggle.addEventListener('click', () => {
    const { body } = document;

    navbarElements.navbar.classList.toggle(activeClass);

    // Prevents scroll when mobile menu is open
    if (body.style.overflowY === 'hidden') {
      body.style.overflowY = '';
    } else {
      body.style.overflowY = 'hidden';
    }
  });
}
