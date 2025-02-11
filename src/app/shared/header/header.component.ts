import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  template: `
    <mat-toolbar class="header" color="primary">
      <div class="container">
        <div class="header-content">
          <!-- <a routerLink="/" class="logo">
            <span>Portfolio</span>
          </a> -->
          
          <!-- Desktop Menu -->
          <nav class="nav-links desktop-menu">
            <a mat-button routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
            <a mat-button routerLink="/about" routerLinkActive="active">About</a>
            <a mat-button routerLink="/projects" routerLinkActive="active">Projects</a>
            <a mat-button routerLink="/certifications" routerLinkActive="active">Certifications</a>
            <a mat-button routerLink="/contact" routerLinkActive="active">Contact</a>
            <a mat-raised-button color="accent" href="assets/pdf/resume.pdf" target="_blank" class="download-cv">
              <mat-icon>get_app</mat-icon>
              <span>Download CV</span>
            </a>
          </nav>

          <!-- Mobile Menu -->
          <button mat-icon-button [matMenuTriggerFor]="menu" class="mobile-menu-button">
            <mat-icon>menu</mat-icon>
          </button>
          
          <mat-menu #menu="matMenu">
            <a mat-menu-item routerLink="/">
              <mat-icon>home</mat-icon>
              <span>Home</span>
            </a>
            <a mat-menu-item routerLink="/about">
              <mat-icon>person</mat-icon>
              <span>About</span>
            </a>
            <a mat-menu-item routerLink="/projects">
              <mat-icon>work</mat-icon>
              <span>Projects</span>
            </a>
            <a mat-menu-item routerLink="/certifications">
              <mat-icon>school</mat-icon>
              <span>Certifications</span>
            </a>
            <a mat-menu-item routerLink="/contact">
              <mat-icon>email</mat-icon>
              <span>Contact</span>
            </a>
            <a mat-menu-item href="assets/pdf/resume.pdf" target="_blank">
              <mat-icon>get_app</mat-icon>
              <span>Download CV</span>
            </a>
          </mat-menu>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(63, 81, 181, 0.95);
      backdrop-filter: blur(10px);
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;
    }

    .logo {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 500;
    }

    .nav-links {
      display: flex;
      gap: 1rem;
      
      a {
        color: white;
        text-decoration: none;
        
        &.active {
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }

    .mobile-menu-button {
      display: none;
    }

    @media (max-width: 768px) {
      .desktop-menu {
        display: none;
      }

      .mobile-menu-button {
        display: block;
      }
    }
  `]
})
export class HeaderComponent {}
