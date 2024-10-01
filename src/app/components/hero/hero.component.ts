import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  scrollToSection(section: string): void {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
}
}
