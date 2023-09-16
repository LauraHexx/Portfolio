import { ScrollingAnimationService } from './../services/scrolling-animation.service';
import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isHovered: boolean = false;

  constructor(public ScrollingAnimationService: ScrollingAnimationService) {
    this.ScrollingAnimationService.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.ScrollingAnimationService.checkScreenSize();
  }

  /**
   * Handles the mouse over event.
   * Sets the 'isHovered' variable to true.
   */
  onMouseOver() {
    this.isHovered = true;
  }

  /**
   * Handles the mouse out event.
   * Sets the 'isHovered' variable to false.
   */
  onMouseOut() {
    this.isHovered = false;
  }
}
