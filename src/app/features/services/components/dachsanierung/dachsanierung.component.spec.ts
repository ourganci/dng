import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DachsanierungComponent } from './dachsanierung.component';

describe('DachsanierungComponent', () => {
  let component: DachsanierungComponent;
  let fixture: ComponentFixture<DachsanierungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DachsanierungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DachsanierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
