import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isHovered: boolean = false;

  onMouseOver(): void {
    this.isHovered = true;
  }

  onMouseOut(): void {
    this.isHovered = false;
  }
}
