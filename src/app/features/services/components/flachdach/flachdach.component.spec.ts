import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlachdachComponent } from './flachdach.component';

describe('FlachdachComponent', () => {
  let component: FlachdachComponent;
  let fixture: ComponentFixture<FlachdachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlachdachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlachdachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
