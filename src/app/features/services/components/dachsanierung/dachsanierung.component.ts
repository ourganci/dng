import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';


@Component({
  selector: 'app-dachsanierung',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './dachsanierung.component.html',
  styleUrl: './dachsanierung.component.scss'
})
export class DachsanierungComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Dachsanierung Nahe Glan – professionell & nachhaltig');
    this.metaService.updateTag({ name: 'description', content: 'Ihr Dach ist in die Jahre gekommen? Feuchtigkeit, Wärmeverluste oder lockere Ziegel sind erste Anzeichen für Sanierungsbedarf. Als erfahrener Dachdeckerbetrieb aus Nahe Glan bieten wir Ihnen fachgerechte Dachsanierungen im Umkreis von 50 km – für Wohnhäuser, Gewerbeobjekte und Mehrfamilienhäuser.' });
    this.metaService.updateTag({ name: 'keywords', content: 'Dachsanierung, Dachdecker Nahe Glan, Dach erneuern, Dach dämmen, Dach abdichten, Sanierung' });

    // Open Graph and Twitter Card tags for social sharing
    this.metaService.updateTag({ property: 'og:title', content: 'Dachsanierung vom Fachbetrieb' });
    this.metaService.updateTag({ property: 'og:description', content: 'Ihr Dach ist in die Jahre gekommen? Feuchtigkeit, Wärmeverluste oder lockere Ziegel sind erste Anzeichen für Sanierungsbedarf. Als erfahrener Dachdeckerbetrieb aus Nahe Glan bieten wir Ihnen fachgerechte Dachsanierungen im Umkreis von 50 km – für Wohnhäuser, Gewerbeobjekte und Mehrfamilienhäuser.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    // this.metaService.updateTag({ property: 'og:image', content: 'URL_to_your_image.jpg' }); // Optional: Add a relevant image URL
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

}
