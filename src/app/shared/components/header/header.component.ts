// src/app/shared/components/header/header.component.ts
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // isMobileMenuOpen = false;
  private lastScrollY = 0;
  isHeaderHidden = false;

  menuItems = [
    { label: 'Startseite', route: '/' },
    {
      label: 'Leistungen',
      route: '/leistungen',
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



  @HostListener('window:scroll', [])
  onScroll() {
    const currentScroll = window.scrollY;

    // Nur auf mobilen Geräten aktiv
    if (window.innerWidth < 769) {
      if (currentScroll > this.lastScrollY && currentScroll > 120) {
        // Nach unten scrollen → Header ausblenden
        this.isHeaderHidden = true;
      } else {
        // Nach oben scrollen → Header wieder anzeigen
        this.isHeaderHidden = false;
      }
    } else {
      this.isHeaderHidden = false; // Desktop = Header bleibt sichtbar
    }

    this.lastScrollY = currentScroll;
  }

  // toggleMobileMenu(): void {
  //   this.isMobileMenuOpen = !this.isMobileMenuOpen;

  //   if (this.isMobileMenuOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = '';
  //   }
  // }

  // closeMobileMenu(): void {
  //   this.isMobileMenuOpen = false;
  //   document.body.style.overflow = '';
  // }
}
