import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Join',
      skills: ['JavaScript', 'HTML', 'CSS'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'join.png',
      linkLiveTest: 'https://laura-hesidenz.developerakademie.net/Join',
      linkGithub: 'https://github.com/LauraHexx/Join',
    },
    {
      title: 'El Pollo Loco',
      skills: ['JavaScript', 'HTML', 'CSS'],
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and bottles to fight against the killer chicken.',
      img: 'el-pollo-loco.png',
      linkLiveTest:
        'https://laura-hesidenz.developerakademie.net/El-Pollo-Loco/',
      linkGithub: 'https://github.com/LauraHexx/El-Pollo-Loco',
    },
    {
      title: 'Portfolio',
      skills: ['Angular ', 'Typescript', 'HTML', 'CSS'],
      description:
        'Welcome to my portfolio page! I am excited to share with you some of the projects I have worked on using Angular, TypeScript, HTML, and CSS',
      img: 'portfolio.png',
      linkLiveTest: '',
      linkGithub: 'https://github.com/LauraHexx/Portfolio',
    },
  ];
}
