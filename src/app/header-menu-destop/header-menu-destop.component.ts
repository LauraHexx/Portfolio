import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-menu-destop',
  templateUrl: './header-menu-destop.component.html',
  styleUrls: ['./header-menu-destop.component.scss'],
})
export class HeaderMenuDestopComponent {
  @Input() mobileMenuIsOpen: boolean;
}
