import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isHovered: boolean = false;

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
