import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-menu-mobile',
  templateUrl: './header-menu-mobile.component.html',
  styleUrls: ['./header-menu-mobile.component.scss'],
})
export class HeaderMenuMobileComponent {
  @Input() mobileMenuIsOpen: boolean;
}
