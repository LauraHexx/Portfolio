import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
})
export class MySkillsComponent {
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
      imnameage: 'Git',
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
