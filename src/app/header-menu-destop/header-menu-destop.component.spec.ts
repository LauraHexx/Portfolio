import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuDestopComponent } from './header-menu-destop.component';

describe('HeaderMenuDestopComponent', () => {
  let component: HeaderMenuDestopComponent;
  let fixture: ComponentFixture<HeaderMenuDestopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderMenuDestopComponent]
    });
    fixture = TestBed.createComponent(HeaderMenuDestopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
