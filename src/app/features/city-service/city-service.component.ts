import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../shared/components/cta-button/cta-button.component';
import { CITY_CONFIG } from '../city/city.config';
import { SERVICE_CONFIG } from '../services/services.config';

interface City { name: string; region: string; }
interface Service { name: string; description: string; }

@Component({
  selector: 'app-city-service',
  standalone: true,
  imports: [CtaButtonComponent, RouterLink],
  templateUrl: './city-service.component.html',
  styleUrls: ['./city-service.component.scss']
})
export class CityServiceComponent implements OnInit {

  city?: City;
  service?: Service;
  serviceKey?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta
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

    if (!city || !service) {
      this.router.navigate(['/404']);
      return;
    }

    this.city = city;
    this.service = service;

    // SEO
    this.title.setTitle(`${service.name} in ${city.name} | Dachdecker DNG`);
    this.meta.updateTag({
      name: 'description',
      content: `${service.name} in ${city.name}. Ihr Dachdecker für ${service.description}.`
    });
  }

  serviceKeyFromName(name: string): string {
    // Name in lowercase + Bindestrich ersetzen, falls nötig
    // z.B. "Dachsanierung" → "dachsanierung"
    return name.toLowerCase().replace(/\s+/g, '-');
  }

}
