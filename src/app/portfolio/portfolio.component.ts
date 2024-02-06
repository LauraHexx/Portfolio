import { ScrollingAnimationService } from './../services/scrolling-animation.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  constructor(public ScrollingAnimationService: ScrollingAnimationService) {
    this.ScrollingAnimationService.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.ScrollingAnimationService.checkScreenSize();
  }

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
      title: 'DA Bubble',
      skills: ['Firebase', 'Angular ', 'Typescript', 'HTML', 'SCSS'],
      description:
        'A Slack clone app designed for team communication and collaboration, featuring organized chats and channels.',
      img: 'dabubble.png',
      linkLiveTest:
        'https://laura-hesidenz.developerakademie.net/angular-projects/DABubble',
      linkGithub: 'https://github.com/LauraHexx/DABubble',
    },
  ];
}
