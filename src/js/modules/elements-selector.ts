import { GuaranteedElements } from 'types/types';
import { isHTMLElement, isHTMLButtonElement } from 'types/html-type-predicates';

/**
 * Types
 */
interface NavbarElements {
  navbar: HTMLElement | null;
  mobileMenuToggle: HTMLButtonElement | null;
}

/**
 * Type guard functions
 */
function isNavbarElements(
  elements: NavbarElements | GuaranteedElements<NavbarElements>
): elements is GuaranteedElements<NavbarElements> {
  return (
    isHTMLElement(elements.navbar) &&
    isHTMLButtonElement(elements.mobileMenuToggle)
  );
}

/**
 * Elements
 */
const navbarElements: NavbarElements = {
  navbar: document.querySelector('[data-navbar]'),
  mobileMenuToggle: document.querySelector('[mobile-menu-toggle]')
};

export { navbarElements, isNavbarElements };
