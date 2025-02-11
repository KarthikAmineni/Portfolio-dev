import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

const projectsAnimation = trigger('projectsAnimation', [
  transition(':enter', [
    query('.project-card', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      stagger(100, [
        animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

const hoverAnimation = trigger('hoverAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(10px)' }),
    animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  animations: [projectsAnimation, hoverAnimation]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
      image: 'assets/images/project1.jpg',
      demoUrl: '#',
      githubUrl: '#',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'assets/images/project2.jpg',
      demoUrl: '#',
      githubUrl: '#',
      technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL']
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media management with data visualization and reporting.',
      image: 'assets/images/project3.jpg',
      demoUrl: '#',
      githubUrl: '#',
      technologies: ['Vue.js', 'Firebase', 'D3.js', 'TailwindCSS']
    }
  ];
}