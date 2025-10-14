import { TestBed } from '@angular/core/testing';

import { SchemaMarkupService } from './schema-markup.service';

describe('SchemaMarkupService', () => {
  let service: SchemaMarkupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchemaMarkupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
