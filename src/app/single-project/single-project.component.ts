import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
})
export class SingleProjectComponent {
  @Input() title: string;
  @Input() skills: Array<string>;
  @Input() description: string;
  @Input() img: string;
}
