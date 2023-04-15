import { NavbarElements, NotificationElements } from '@/js/types';

export default class ElementsSelector {
  getNavbarElements(): NavbarElements {
    return {
      navbar: document.querySelector('[data-navbar]'),
      mobileMenuToggle: document.querySelector('[data-mobile-menu-toggle]')
    };
  }

  getNotificationElements(): NotificationElements {
    return {
      notification: document.querySelector('[data-notification]'),
      closeButton: document.querySelector('[data-notification-close]')
    };
  }
}
