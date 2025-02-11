import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <section class="certifications-section" [@fadeInUp]>
      <div class="container">
        <h2 class="section-title">Certifications</h2>
        <div class="certifications-grid">
          <mat-card class="certification-card" *ngFor="let cert of certifications; let i = index">
            <div class="card-content">
              <mat-icon class="cert-icon">{{cert.icon}}</mat-icon>
              <mat-card-title>{{cert.title}}</mat-card-title>
              <mat-card-subtitle>{{cert.issuer}}</mat-card-subtitle>
              <p class="cert-description">{{cert.description}}</p>
              <div class="cert-meta">
                <span class="cert-date">
                  <mat-icon>calendar_today</mat-icon>
                  {{cert.date}}
                </span>
                <span class="cert-id">
                  <mat-icon>badge</mat-icon>
                  {{cert.id}}
                </span>
              </div>
              <a mat-button [href]="cert.verifyLink" target="_blank" class="verify-button">
                <mat-icon>verified</mat-icon>
                Verify Certificate
              </a>
            </div>
          </mat-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .certifications-section {
      padding: 2rem 0;
      background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
      min-height: calc(100vh - 64px);
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 2rem;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .certifications-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }

    .certification-card {
      height: 100%;
      transform: translateY(0);
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }
    }

    .card-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .cert-icon {
      font-size: 2.5rem;
      width: 2.5rem;
      height: 2.5rem;
      margin-bottom: 1rem;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .cert-description {
      color: var(--text-color);
      margin: 1rem 0;
    }

    .cert-meta {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin: 1rem 0;
      color: var(--text-color);

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;

        mat-icon {
          font-size: 1.2rem;
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }

    .verify-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: auto;
      transition: all 0.3s ease;

      &:hover {
        color: var(--primary-color);
        transform: translateY(-2px);
      }
    }
  `],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'Angular Advanced Developer',
      issuer: 'Google',
      description: 'Advanced certification in Angular development covering complex application architectures and best practices.',
      icon: 'code',
      date: 'Jan 2024',
      id: 'CERT-001',
      verifyLink: '#'
    },
    {
      title: 'Full Stack Development',
      issuer: 'Microsoft',
      description: 'Comprehensive certification in full stack development using modern web technologies.',
      icon: 'developer_board',
      date: 'Dec 2023',
      id: 'CERT-002',
      verifyLink: '#'
    },
    {
      title: 'Cloud Architecture',
      issuer: 'AWS',
      description: 'Professional certification in cloud architecture and deployment strategies.',
      icon: 'cloud',
      date: 'Nov 2023',
      id: 'CERT-003',
      verifyLink: '#'
    }
  ];
}
