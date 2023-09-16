import { TestBed } from '@angular/core/testing';

import { ScrollingAnimationService } from './scrolling-animation.service';

describe('ScrollingAnimationService', () => {
  let service: ScrollingAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollingAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
