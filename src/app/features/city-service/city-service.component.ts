import { Component, OnInit, Inject } from '@angular/core'; // Inject hinzugefügt
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common'; // DOCUMENT importieren
import { CtaButtonComponent } from '../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../city/city.config';
import { SERVICE_CONFIG } from '../services/services.config';

@Component({
  selector: 'app-city-service',
  standalone: true,
  imports: [CtaButtonComponent, RouterLink],
  templateUrl: './city-service.component.html',
  styleUrls: ['./city-service.component.scss']
})
export class CityServiceComponent implements OnInit {

  city?: any; // Typisierung ggf. an deine CITY_CONFIG anpassen
  service?: any;
  serviceKey?: string;
  cityKey?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private dom: Document // Den DOM-Zugriff injizieren
  ) { }

  ngOnInit(): void {
    const serviceKey = this.route.snapshot.paramMap.get('service');
    const cityKey = this.route.snapshot.paramMap.get('city');

    if (!serviceKey || !cityKey) {
      this.router.navigate(['/404']);
      return;
    }

    const city = CITY_CONFIG[cityKey];
    const service = SERVICE_CONFIG[serviceKey];
    
    this.serviceKey = serviceKey; 
    this.cityKey = cityKey;

    if (!city || !service) {
      this.router.navigate(['/404']);
      return;
    }

    this.city = city;
    this.service = service;

    this.updateSeoTags(service, city, serviceKey, cityKey);
  }

  private updateSeoTags(service: any, city: any, serviceKey: string, cityKey: string): void {
    // 1. Title Tag
    this.title.setTitle(`${service.name} in ${city.name} | Ihr Partner DNG`);

    // 2. Meta Description (Sachlich & einladend)
    this.meta.updateTag({
      name: 'description',
      content: `Professionelle ${service.name} in ${city.name}. Ihr Meisterbetrieb für ${city.region}. Jetzt kostenlose Beratung anfordern!`
    });

    // 3. Canonical Link (Die wichtigste Zeile für Google)
    this.setCanonicalUrl(`https://www.dng-nahe-glan.de/leistungen/${serviceKey}/${cityKey}`);
  }

  private setCanonicalUrl(url: string): void {
    // Prüfen, ob bereits ein Canonical-Link existiert
    let link: HTMLLinkElement | null = this.dom.querySelector('link[rel="canonical"]');
    
    if (!link) {
      // Falls nicht, erstellen
      link = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
    }
    
    // URL setzen oder aktualisieren
    link.setAttribute('href', url);
  }

  serviceKeyFromName(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}