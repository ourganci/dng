import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DachreparaturComponent } from './dachreparatur.component';

describe('DachreparaturComponent', () => {
  let component: DachreparaturComponent;
  let fixture: ComponentFixture<DachreparaturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DachreparaturComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DachreparaturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
