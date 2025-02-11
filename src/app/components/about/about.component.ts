import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    query('.animate-item', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(100, [
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

const skillAnimation = trigger('skillAnimation', [
  transition(':enter', [
    query('.skill-category', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      stagger(150, [
        animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <section class="about-section" [@fadeInUp]>
      <div class="container">
        <h2 class="section-title animate-item">About Me</h2>
        
        <div class="about-content">
          <div class="about-text animate-item">
            <p>I am a passionate Full Stack Developer with expertise in modern web technologies.</p>
            <p>My journey in web development has equipped me with both technical skills and creative problem-solving abilities.</p>
          </div>

          <div class="skills-container" [@skillAnimation]>
            <h3 class="animate-item">Technical Skills</h3>
            
            <div class="skills-grid">
              <div class="skill-category" *ngFor="let category of skillCategories">
                <div class="category-header">
                  <mat-icon>{{category.icon}}</mat-icon>
                  <h4>{{category.name}}</h4>
                </div>
                
                <div class="skills-list">
                  <div class="skill-item" *ngFor="let skill of category.skills">
                    <div class="skill-header">
                      <span class="skill-name">{{skill.name}}</span>
                      <span class="skill-level">{{skill.level}}%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" 
                           [style.width]="skill.level + '%'"
                           [style.background]="category.gradient"></div>
                    </div>
                    <div class="skill-tags">
                      <span class="skill-tag" *ngFor="let tag of skill.tags">{{tag}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="background-decoration">
        <div class="floating-shape"></div>
        <div class="floating-shape"></div>
        <div class="floating-shape"></div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 4rem 0;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
      min-height: calc(100vh - 64px);
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 3rem;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .about-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .about-text {
      max-width: 800px;
      margin: 0 auto 3rem;
      text-align: center;

      p {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 1.5rem;
        color: var(--text-color);
      }
    }

    .skills-container {
      h3 {
        font-size: 1.8rem;
        margin-bottom: 2rem;
        text-align: center;
        color: var(--primary-color);
      }
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }

    .skill-category {
      background: rgba(255, 255, 255, 0.9);
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid rgba(124, 58, 237, 0.1);

      mat-icon {
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
        color: var(--primary-color);
      }

      h4 {
        font-size: 1.3rem;
        margin: 0;
        color: var(--text-color);
      }
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .skill-item {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 8px;
      padding: 1rem;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateX(5px);
      }
    }

    .skill-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .skill-name {
      font-weight: 500;
      color: var(--text-color);
    }

    .skill-level {
      font-size: 0.9rem;
      color: var(--primary-color);
    }

    .skill-bar {
      height: 6px;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      overflow: hidden;
      margin-bottom: 0.75rem;
    }

    .skill-progress {
      height: 100%;
      border-radius: 3px;
      transition: width 1s ease-out;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .skill-tag {
      font-size: 0.8rem;
      padding: 0.2rem 0.6rem;
      background: rgba(124, 58, 237, 0.1);
      color: var(--primary-color);
      border-radius: 12px;
    }

    .background-decoration {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 0;

      .floating-shape {
        position: absolute;
        border-radius: 50%;
        background: var(--gradient-primary);
        opacity: 0.1;
        filter: blur(40px);

        &:nth-child(1) {
          width: 300px;
          height: 300px;
          top: -150px;
          left: -150px;
          animation: float 20s infinite ease-in-out;
        }

        &:nth-child(2) {
          width: 200px;
          height: 200px;
          top: 40%;
          right: -100px;
          animation: float 15s infinite ease-in-out reverse;
        }

        &:nth-child(3) {
          width: 250px;
          height: 250px;
          bottom: -125px;
          left: 30%;
          animation: float 18s infinite ease-in-out;
        }
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(20px, -20px);
      }
    }

    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }

      .section-title {
        font-size: 2rem;
      }

      .about-text p {
        font-size: 1rem;
      }
    }
  `],
  animations: [fadeInUp, skillAnimation]
})
export class AboutComponent {
  skillCategories = [
    {
      name: 'Frontend Development',
      icon: 'computer',
      gradient: 'linear-gradient(45deg, #4F46E5, #7C3AED)',
      skills: [
        {
          name: 'Angular',
          level: 90,
          tags: ['TypeScript', 'RxJS', 'Material UI']
        },
        {
          name: 'React',
          level: 85,
          tags: ['Redux', 'Hooks', 'Next.js']
        },
        {
          name: 'Vue.js',
          level: 80,
          tags: ['Vuex', 'Composition API']
        }
      ]
    },
    {
      name: 'Backend Development',
      icon: 'terminal',
      gradient: 'linear-gradient(45deg, #7C3AED, #EC4899)',
      skills: [
        {
          name: 'Node.js',
          level: 85,
          tags: ['Express', 'NestJS', 'GraphQL']
        },
        {
          name: 'Python',
          level: 80,
          tags: ['Django', 'FastAPI', 'Flask']
        },
        {
          name: 'Java',
          level: 75,
          tags: ['Spring Boot', 'Hibernate']
        }
      ]
    },
    {
      name: 'Database & Cloud',
      icon: 'cloud_queue',
      gradient: 'linear-gradient(45deg, #EC4899, #EF4444)',
      skills: [
        {
          name: 'MongoDB',
          level: 85,
          tags: ['Mongoose', 'Aggregation', 'Atlas']
        },
        {
          name: 'PostgreSQL',
          level: 80,
          tags: ['TypeORM', 'Sequelize']
        },
        {
          name: 'AWS',
          level: 75,
          tags: ['S3', 'Lambda', 'EC2']
        }
      ]
    },
    {
      name: 'DevOps & Tools',
      icon: 'construction',
      gradient: 'linear-gradient(45deg, #EF4444, #F59E0B)',
      skills: [
        {
          name: 'Docker',
          level: 80,
          tags: ['Compose', 'Kubernetes']
        },
        {
          name: 'CI/CD',
          level: 75,
          tags: ['Jenkins', 'GitHub Actions']
        },
        {
          name: 'Testing',
          level: 85,
          tags: ['Jest', 'Cypress', 'JUnit']
        }
      ]
    }
  ];
}
