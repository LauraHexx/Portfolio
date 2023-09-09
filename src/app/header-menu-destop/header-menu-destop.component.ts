import { HeaderMenuMobileService } from './../services/header-menu-mobile.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-header-menu-destop',
  templateUrl: './header-menu-destop.component.html',
  styleUrls: ['./header-menu-destop.component.scss'],
})
export class HeaderMenuDestopComponent {
  constructor(public headerMenuMobileService: HeaderMenuMobileService) {}
}
