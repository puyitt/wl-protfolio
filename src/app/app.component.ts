import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Win Lai Yee Mon';

  constructor() {}

  ngOnInit() {
    // this.observeDividers();
  }

  scrollToSection(section: string): void {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
  }

  // observeDividers(): void {
  //   // IntersectionObserver setup
  //   const observer = new IntersectionObserver((entries) => {
  //     console.log(observer)
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         console.log(`Element with ID ${entry.target.id} is at the top!`);
  //         // Add your logic here when a particular section is at the top
  //       }
  //     });
  //   }, {
  //     rootMargin: '-50% 0px -50% 0px', // Adjust the margin to fine-tune the trigger point
  //     threshold: 0 ,// Trigger as soon as the element hits the top    
  //   });

  //   // Observing each divider by ID
  //   const dividers = document.querySelectorAll('.divider');
  //   dividers.forEach(divider => observer.observe(divider));
  // }
}
