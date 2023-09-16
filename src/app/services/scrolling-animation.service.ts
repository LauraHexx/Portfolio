import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollingAnimationService {
  isMobileView = false;

  public checkScreenSize(): void {
    this.isMobileView = window.innerWidth <= 1100;
    console.log(this.isMobileView);
  }
}
