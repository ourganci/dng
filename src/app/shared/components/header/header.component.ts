// src/app/shared/components/header/header.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems = [
    { label: 'Startseite', route: '/' },
    { 
      label: 'Leistungen', 
      route: '/leistungen',
      submenu: [
        { label: 'Dachsanierung', route: '/leistungen/dachsanierung' },
        { label: 'Dachfenster', route: '/leistungen/dachfenster' },
        { label: 'Dachreparaturen', route: '/leistungen/dachreparatur' },
        { label: 'Regenrinnen', route: '/leistungen/regenrinnen' },
        { label: 'Flachdachdichtheitsprüfung', route: '/leistungen/flachdachpruefung' },
        { label: 'PV-Anlagen', route: '/leistungen/pv-anlagen' },
        { label: 'Hallenbeleuchtung', route: '/leistungen/hallenbeleuchtung' }
      ]
    },
    { label: 'Über uns', route: '/ueber-uns' },
    { label: 'Referenzen', route: '/referenzen' },
    { label: 'Ratgeber', route: '/ratgeber' },
    { label: 'Kontakt', route: '/kontakt' }
  ];
}
