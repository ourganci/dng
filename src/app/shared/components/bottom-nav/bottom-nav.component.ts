// src/app/shared/components/bottom-nav/bottom-nav.component.ts

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss'
})
export class BottomNavComponent {
  navItems = [
    { 
      label: 'Home', 
      route: '/', 
      icon: 'home',
      ariaLabel: 'Zur Startseite'
    },
    { 
      label: 'Leistungen', 
      route: '/leistungen', 
      icon: 'services',
      ariaLabel: 'Unsere Leistungen'
    },
    { 
      label: 'Über uns', 
      route: '/ueber-uns', 
      icon: 'info',
      ariaLabel: 'Über uns'
    },
    { 
      label: 'Kontakt', 
      route: '/kontakt', 
      icon: 'contact',
      ariaLabel: 'Kontaktformular'
    },
    { 
      label: 'Notdienst', 
      route: '/notdienst', 
      icon: 'emergency',
      isHighlighted: true,
      ariaLabel: 'Notdienst - 24/7 erreichbar'
    }
  ];
}
