import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallenbeleuchtungComponent } from './hallenbeleuchtung.component';

describe('HallenbeleuchtungComponent', () => {
  let component: HallenbeleuchtungComponent;
  let fixture: ComponentFixture<HallenbeleuchtungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HallenbeleuchtungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HallenbeleuchtungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
