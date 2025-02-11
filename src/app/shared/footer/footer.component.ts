import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p>&copy; {{ currentYear }} Karthik Amineni. All rights reserved.</p>
          <div class="social-links">
            <a href="https://github.com/yourusername" target="_blank" class="github-link">
              <img src="assets/icons/github.svg" alt="GitHub" class="github-icon" style="max-width: 25px;">
            </a>
            <a href="https://www.linkedin.com/in/venkata-karthik-amineni" target="_blank" class="linkedin-link">
              <img src="assets/icons/linkedIn.svg" alt="LinkedIn" class="linkedin-icon" style="max-width: 25px;">
            </a>
            <a href="mailto:karthik.amineni@gmail.com">
              <mat-icon>email</mat-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
