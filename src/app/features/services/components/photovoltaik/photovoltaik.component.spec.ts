import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotovoltaikComponent } from './photovoltaik.component';

describe('PhotovoltaikComponent', () => {
  let component: PhotovoltaikComponent;
  let fixture: ComponentFixture<PhotovoltaikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotovoltaikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotovoltaikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
