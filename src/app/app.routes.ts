import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HeroComponent, data: { animation: 'home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'about' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'projects' } },
  { path: 'certifications', component: CertificationsComponent, data: { animation: 'certifications' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'contact' } },
];
