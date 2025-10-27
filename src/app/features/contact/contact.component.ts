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
      url: 'https://www.dng-gmbh.de/kontakt'
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
