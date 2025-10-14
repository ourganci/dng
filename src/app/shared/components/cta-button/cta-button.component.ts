// src/app/shared/components/cta-button/cta-button.component.ts
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-button',
  imports: [RouterLink],
  template: `
    <a [routerLink]="link" class="cta-button">
      {{ text }}
    </a>
  `,
  styleUrl: './cta-button.component.scss'
})
export class CtaButtonComponent {
  @Input() text: string = 'Jetzt beraten lassen';
  @Input() link: string = '/kontakt';
}
