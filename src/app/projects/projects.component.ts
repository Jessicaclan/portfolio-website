import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  activeSection: string | null = null;
  displayedTitle = '';
  private fullTitle = '';
  private typingInterval: any;

  sections = [
    { id: 'section1', title: ''}
  ]

}
