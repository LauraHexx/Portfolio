import { HeaderMenuMobileService } from './../services/header-menu-mobile.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-menu-mobile',
  templateUrl: './header-menu-mobile.component.html',
  styleUrls: ['./header-menu-mobile.component.scss'],
})
export class HeaderMenuMobileComponent {
  constructor(public headerMenuMobileService: HeaderMenuMobileService) {}
}
