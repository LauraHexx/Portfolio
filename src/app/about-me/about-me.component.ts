import { ScrollingAnimationService } from './../services/scrolling-animation.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  constructor(public ScrollingAnimationService: ScrollingAnimationService) {
    this.ScrollingAnimationService.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.ScrollingAnimationService.checkScreenSize();
  }
}
