import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { RouterModule } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, NgxTypedJsModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('glowPulse', [
      state('normal', style({
        filter: 'drop-shadow(0 0 0px rgba(124, 58, 237, 0.5))'
      })),
      state('glow', style({
        filter: 'drop-shadow(0 0 20px rgba(124, 58, 237, 0.8))'
      })),
      transition('normal <=> glow', [
        animate('2s ease-in-out')
      ])
    ]),
    trigger('rotateIn', [
      transition(':enter', [
        style({ transform: 'rotate(-180deg) scale(0)', opacity: 0 }),
        animate('1s cubic-bezier(0.68, -0.55, 0.265, 1.55)', 
          style({ transform: 'rotate(0) scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('bounceInOut', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)', 
          style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {
  glowState = 'normal';
  typedStrings = [
    'Full Stack Developer',
    'Angular Expert',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  techStack = [
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'Node.js', icon: 'assets/icons/nodejs.svg' },
    { name: 'Express', icon: 'assets/icons/express.svg' },
    { name: 'MongoDB', icon: 'assets/icons/mongodb.svg' },
    { name: 'AWS', icon: 'assets/icons/aws.svg' },
    { name: 'MySQL', icon: 'assets/icons/mysql.svg' },
    { name: 'Jenkins', icon: 'assets/icons/jenkins.svg' },
    { name: 'Docker', icon: 'assets/icons/docker.svg' }
  ];

  ngOnInit() {
    setInterval(() => {
      this.glowState = this.glowState === 'normal' ? 'glow' : 'normal';
    }, 2000);
  }
}
