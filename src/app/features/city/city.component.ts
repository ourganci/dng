import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CITY_CONFIG } from './city.config';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html'
})
export class CityComponent implements OnInit {

  cityKey!: string;
  city!: { name: string; region: string };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.cityKey = this.route.snapshot.paramMap.get('city')!;

    if (!CITY_CONFIG[this.cityKey]) {
      this.router.navigate(['/404']);
      return;
    }

    this.city = CITY_CONFIG[this.cityKey];

    // SEO Meta
    this.title.setTitle(
      `Dachdecker ${this.city.name} | Dachsanierung & Flachdach – DNG`
    );

    this.meta.updateTag({
      name: 'description',
      content: `Ihr Dachdecker in ${this.city.name}.
      Dachsanierung, Flachdach & Photovoltaik im Raum ${this.city.region}.
      Jetzt kostenlos beraten lassen!`
    });
  }
}
