// src/app/shared/components/footer/footer.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SchemaMarkupService } from '../../../core/services/schema-markup.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  
  companyData: any;
  phone: string = '';

  constructor(private schemaMarkupService: SchemaMarkupService) {
    this.companyData = this.schemaMarkupService.companyData;
  }

  ngOnInit(): void {
    this.formatPhoneNumber();
  }

  private formatPhoneNumber(): void {
    // Konvertiere internationales Format zu deutschem Format
    this.phone = this.companyData.telephone?.replace(/^\+49/, '0') || '';
  }
}