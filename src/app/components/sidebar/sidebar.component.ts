import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  id: string | null = '';

  constructor(private router: Router) { }

  @Output() scrollToSection = new EventEmitter<string>();

  scrollTo(id: string): void {
    this.scrollToSection.emit(id);
  }
}
