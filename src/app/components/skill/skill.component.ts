import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  skills = [
    {
      name: 'Angular',
      percent: '90'
    },
    {
      name: 'TypeScript',
      percent: '90'
    },{
      name: 'JavaScript',
      percent: '90'
    },
    {
      name: 'Html',
      percent: '90'
    },
    {
      name: 'CSS',
      percent: '90'
    },
    {
      name: 'jQuery',
      percent: '90'
    },
    {
      name: 'Bootstrap',
      percent: '90'
    },
    {
      name: 'Git',
      percent: '90'
    },
    {
      name: 'MySQL',
      percent: '90'
    },
    {
      name: 'HtmAgile/Scrum',
      percent: '90'
    },
    {
      name: 'Jira',
      percent: '90'
    },
    {
      name: 'Confluence',
      percent: '90'
    }
  ]
    
}
