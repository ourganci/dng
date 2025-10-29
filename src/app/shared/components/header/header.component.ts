// src/app/shared/components/header/header.component.ts
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private lastScrollY = 0;
  isHeaderHidden = false;
  openSubmenuIndex: number | null = null; // ✅ Welches Submenu ist offen?

  menuItems = [
    { label: 'Startseite', route: '/' },
    {
      label: 'Leistungen',
      route: '/leistungen', // ✅ Wird nicht mehr verwendet
      submenu: [
        { label: 'Dachsanierung', route: '/leistungen/dachsanierung' },
        { label: 'Dachfenster', route: '/leistungen/dachfenster' },
        { label: 'Dachreparaturen', route: '/leistungen/dachreparaturen' },
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

  // ✅ Toggle Submenu on Click
  toggleSubmenu(index: number): void {
    if (this.openSubmenuIndex === index) {
      this.openSubmenuIndex = null; // Schließen wenn bereits offen
    } else {
      this.openSubmenuIndex = index; // Öffnen
    }
  }

  // ✅ Schließe Submenu nach Klick auf Link
  closeSubmenu(): void {
    this.openSubmenuIndex = null;
  }

  // ✅ Schließe Submenu wenn außerhalb geklickt wird
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item')) {
      this.openSubmenuIndex = null;
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScroll = window.scrollY;

    // Nur auf mobilen Geräten aktiv
    if (window.innerWidth < 769) {
      if (currentScroll > this.lastScrollY && currentScroll > 120) {
        this.isHeaderHidden = true;
      } else {
        this.isHeaderHidden = false;
      }
    } else {
      this.isHeaderHidden = false;
    }

    this.lastScrollY = currentScroll;
  }
}
