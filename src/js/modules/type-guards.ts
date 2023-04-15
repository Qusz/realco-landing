import {
  GuaranteedElements,
  NavbarElements,
  NotificationElements
} from '@/js/types';

import TypePridcates from '@/js/modules/html-type-predicates';

export default class TypeGuard {
  typePredicates: TypePridcates;

  constructor() {
    this.typePredicates = new TypePridcates();
  }

  isNavbarElements(
    elements: NavbarElements | GuaranteedElements<NavbarElements>
  ): elements is GuaranteedElements<NavbarElements> {
    return (
      this.typePredicates.isHTMLElement(elements.navbar) &&
      this.typePredicates.isHTMLButtonElement(elements.mobileMenuToggle)
    );
  }

  isNotificationElements(
    elements: NotificationElements | GuaranteedElements<NotificationElements>
  ): elements is GuaranteedElements<NotificationElements> {
    return (
      this.typePredicates.isHTMLDivElement(elements.notification) &&
      this.typePredicates.isHTMLButtonElement(elements.closeButton)
    );
  }
}
