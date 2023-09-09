import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderMenuMobileService {
  constructor() {}

  mobileMenuIsOpen: boolean = false;

  /**
   * Toggles the mobile menu open/close state.
   */
  toggleMobileMenu() {
    this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
    this.toggleBodyOverflow();
  }

  /**
   * Toggles the body element's overflow style between 'hidden' and 'unset'.
   */
  toggleBodyOverflow() {
    const bodyElement = document.body;
    bodyElement.style.overflow =
      bodyElement.style.overflow === 'hidden' ? 'unset' : 'hidden';
  }
}
