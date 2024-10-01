import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  projectList = [
    {
      projTitle:'SMART Credit Web App by Yoma Bank',
      projRole:'Senior Frontend Developer',
      projTech:'Angular JS, CSS, Node.js',
      projDesc : 'This is a customer-facing portal allowing Yoma Bank customers to apply for personal and business loans.It includes features such as Google Analytics integration and Facebook Pixel integration.',
    },
    {
      projTitle:'Operation Dashboard Web App by Yoma Bank',
      projRole:'Senior Frontend Developer',
      projTech:' Angular, Bootstrap, Spring Boot (Microservices)',
      projDesc : 'This portal is specifically designed for Internal Banking Operations.',
      keyFeature: [
          {key:'Integration with Keycloak for user authentication, and user roles'},
          {key:'Audit logs, Reporting , Maker/Approver Flow and Batch Disbursements'},
      ]
    },
    {
      projTitle:'Onboarding Portal by Yoma Bank',
      projRole:'Senior Frontend Developer',
      projTech:': Angular,Bootstrap , Spring Boot (Microservices)',
      projDesc : 'This portal is utilized by Yoma Bank staffs to facilitate the onboarding process for new customers, enabling account opening.',
      keyFeature: [
          {key:'Integration with Keycloak for user authentication'},
          {key:'Collecting KYC Information'},
          {key:'Integration with OCR'},
      ]
    },
    {
      projTitle:'Unsecured Lending Portal by Yoma Bank',
      projRole:'Senior Frontend Developer',
      projTech:'Angular Micro-frontend, Spring Boot (Microservices)',
      projDesc : 'This portal is designed to facilitate back-office operations for unsecured loans. I developed it as a micro frontend application, utilizing Angular Module Federation. This project also involved integrating a shared UI library as a Git submodule.',
    },
    {
      projTitle:'International Remittance Portal by Yoma Bank',
      projRole:'Senior Frontend Developer',
      projTech:'Angular Micro-frontend, Spring Boot (Microservices)',
      projDesc : 'The Micro-frontend application is designed for back-office operations, handling international remittance transaction management, internal account transfers, and manual reversal processes as key features.',
    },
  ]
}
