import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mobileMenuIsOpen: boolean = false;

  toggleMobileMenu() {
    this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
  }
}
