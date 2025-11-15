// src/app/features/contact/contact.component.ts
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import { SchemaMarkupService } from '../../core/services/schema-markup.service';
import { ServiceDataService } from '../../core/services/service-data.service';
import { first } from 'rxjs';

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
  submitError = signal<string | null>(null);
  isSending = signal(false);

  companyData = this.schemaMarkupService.companyData;
  services = this.serviceDataService.getAllServices().map(s => s.headline);

  ngOnInit(): void {
    // SEO Meta Tags
    this.seoService.updateMetaTags({
      title: 'Kontakt – DNG GmbH Dachdeckerfachbetrieb',
      description:
        'Kontaktieren Sie uns für eine kostenlose Beratung. Wir sind Ihr Dachdecker-Fachbetrieb im Raum Nahe Glan.',
      keywords: 'Dachdecker Kontakt, Angebot anfordern, Beratung Nahe Glan',
      url: 'https://ang.dng-nahe-glan.de/kontakt'
    });

    // Reactive Form erstellen
    this.contactForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      street: ['', [Validators.required, Validators.minLength(2)]],
      postalcode: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
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
    // Formular invalid → Button nicht sperren
    if (this.contactForm.invalid) {
      // Optional: alle Felder markieren
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitted.set(true);
    this.submitError.set(null);

    if (this.contactForm.invalid) {
      return;
    }

    const formData = new URLSearchParams();
    Object.entries(this.contactForm.value).forEach(([key, value]) => {
      if (key === 'privacy') return;
      formData.set(key, String(value ?? ''));
    });

    // Optionaler "Wird gesendet"-Status
    this.isSending.set(true);

    fetch('http://ang.dng-nahe-glan.de/mail.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: formData.toString(),
    })
      .then(async res => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Serverfehler (${res.status}): ${text}`);
        }
        return res.json();
      })
      .then(data => {
        if (data.success) {
          this.submitSuccess.set(true);
          this.contactForm.reset();
          setTimeout(() => this.submitSuccess.set(false), 5000);
        } else {
          this.submitError.set(data.error || 'Unbekannter Fehler beim Senden.');
        }
      })
      .catch(err => {
        this.submitError.set(err.message || 'Der Server ist derzeit nicht erreichbar.');
      })
      .finally(() => {
        this.isSending.set(false);
        this.submitted.set(false);
      });
  }

}
