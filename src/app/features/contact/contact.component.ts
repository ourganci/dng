// src/app/features/contact/contact.component.ts
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import { SchemaMarkupService } from '../../core/services/schema-markup.service';
import { ServiceDataService } from '../../core/services/service-data.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private seoService = inject(SeoService);
  private schemaMarkupService = inject(SchemaMarkupService);
  private serviceDataService = inject(ServiceDataService);

  contactForm!: FormGroup;
  submitted = signal(false);
  submitSuccess = signal(false);

  companyData = this.schemaMarkupService.companyData;
  services = this.serviceDataService.getAllServices().map(s => s.headline);

  ngOnInit(): void {
    // SEO Meta Tags
    this.seoService.updateMetaTags({
      title: 'Kontakt – DNG GmbH Dachdeckerfachbetrieb',
      description: 'Kontaktieren Sie uns für eine kostenlose Beratung. Wir sind Ihr Dachdecker-Fachbetrieb im Raum Nahe Glan.',
      keywords: 'Dachdecker Kontakt, Angebot anfordern, Beratung Nahe Glan',
      url: 'https://www.dng-gmbh.de/dng-anfrage/'
    });

    // Reactive Form erstellen
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9\s\-\+\(\)]+$/)]],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacy: [false, Validators.requiredTrue]
    });
  }

  // Getter für einfachen Zugriff auf Form Controls
  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted.set(true);

    // Formular nicht valide -> abbrechen
    if (this.contactForm.invalid) {
      return;
    }

    // Formular-Daten
    const formData = this.contactForm.value;
    console.log('Form Data:', formData);

    // TODO: Hier würde der HTTP POST Request kommen
    // this.http.post('/api/contact', formData).subscribe(...)

    // Simuliere erfolgreiche Submission
    this.submitSuccess.set(true);
    this.contactForm.reset();
    this.submitted.set(false);

    // Success-Nachricht nach 5 Sekunden ausblenden
    setTimeout(() => {
      this.submitSuccess.set(false);
    }, 5000);
  }
}



// bereich_0	"PV-Anlage"
// et_pb_contact_vorname_0	"fake"
// et_pb_contact_nachname_0	"nachricht"
// et_pb_contact_strasse_0	"musterstraße"
// et_pb_contact_plz_0	"55126"
// et_pb_contact_ort_0	"Mainz"
// et_pb_contact_telefon_0	"01472589"
// et_pb_contact_email_0	"oezden_u@hotmail.de"
// et_pb_contact_mitteilung_0	"das+ist+eine+testnachricht"
// et_pb_contactform_submit_0	"et_contact_proccess"
// et_pb_contact_captcha_0	"19"
// _wpnonce-et-pb-contact-form-submitted-0	"051241f021"
// _wp_http_referer	"/dng-anfrage/"
// FuQXIHBp_eN	(3)[…]
// 0	"6YT_sXW9d"
// 1	"6YT_sXW9d"
// 2	"6YT_sXW9d"
// qYjML-e	(3)[…]
// 0	".SVug3iIkB*J8"
// 1	".SVug3iIkB*J8"
// 2	".SVug3iIkB*J8"
// onvfpPMgtR	(3)[…]
// 0	"7IcBAM4_0x"
// 1	"7IcBAM4_0x"
// 2	"7IcBAM4_0x"
// et_pb_contact_email_fields_0	'[{"field_id":"et_pb_contact_bereich_0","original_id":"bereich","required_mark":"required","field_type":"checkbox","field_label":"Bitte+Bereich+wählen:"},{"field_id":"et_pb_contact_vorname_0","original_id":"vorname","required_mark":"required","field_type":"input","field_label":"Vorname"},{"field_id":"et_pb_contact_nachname_0","original_id":"nachname","required_mark":"required","field_type":"input","field_label":"Nachname"},{"field_id":"et_pb_contact_strasse_0","original_id":"strasse","required_mark":"requir…equired_mark":"required","field_type":"input","field_label":"Ort"},{"field_id":"et_pb_contact_telefon_0","original_id":"telefon","required_mark":"required","field_type":"input","field_label":"Telefon"},{"field_id":"et_pb_contact_email_0","original_id":"email","required_mark":"not_required","field_type":"email","field_label":"E-Mail"},{"field_id":"et_pb_contact_mitteilung_0","original_id":"mitteilung","required_mark":"not_required","field_type":"text","field_label":"Sie+möchten+uns+noch+etwas+mitteilen?"}]'
// token	""