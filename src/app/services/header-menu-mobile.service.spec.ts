import { TestBed } from '@angular/core/testing';

import { HeaderMenuMobileService } from './header-menu-mobile.service';

describe('HeaderMenuMobileService', () => {
  let service: HeaderMenuMobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderMenuMobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
