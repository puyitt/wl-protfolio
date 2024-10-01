import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experience = [
    {
      date: '2019 - Present',
      position:'Senior Frontend Developer',
      company:'YOMA BANK',
      body: 'Yoma Bank is one of Myanmar’s largest private banks, with over 3000 employees and 79 branches in 42 cities nationwide.',
      desc: [
        { des: 'Collaborated with design, product, and business analysts during backlog refinement sessions to detail requirements for implementation.'},
        { des: 'Developed and maintained front and back-office portals for customer and internal banking operations in collaboration with back-end teams.'},
        { des: 'Contributed to successful product releases by coordinating with DevOps and Security teams.'},
        { des: 'Experienced with Git, Jira, Confluence, Sketch, CI/CD workflows, and Scrum.'},
        { des: 'Implemented Angular-based Micro-frontend applications.'}
      ]
    },
    {
      date: '2017 – 2018',
      position:'Junior Web Developer',
      company:'AWITD COMPANY',
      body: 'AWITD is invested with the corporation of ITD Japan Co.,Ltd.',
      desc: [
        { des: 'Developed Employee Recruitment System as OJT project.'},
        { des: 'Developed JLPT online exam system project as a team member.'}
      ]
    }
  ]
}
