import { Component, HostListener } from '@angular/core';
import { ScrollingAnimationService } from './../services/scrolling-animation.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
})
export class MySkillsComponent {
  constructor(public ScrollingAnimationService: ScrollingAnimationService) {
    this.ScrollingAnimationService.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.ScrollingAnimationService.checkScreenSize();
  }

  skills = [
    {
      name: 'Angular',
      image: 'angular.png',
    },
    {
      name: 'TypeScript',
      image: 'typescript.png',
    },
    {
      name: 'JavaScript',
      image: 'javaScript.png',
    },
    {
      name: 'HTML',
      image: 'html.png',
    },
    {
      name: 'Firebase',
      image: 'firebase.png',
    },
    {
      name: 'Git',
      image: 'git.png',
    },
    {
      name: 'CSS',
      image: 'css.png',
    },
    {
      name: 'Rest-Api',
      image: 'api.png',
    },
    {
      name: 'Scrum',
      image: 'scrum.png',
    },
    {
      name: 'Material Design',
      image: 'material-design.png',
    },
  ];
}
