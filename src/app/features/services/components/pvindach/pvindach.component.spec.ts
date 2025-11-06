import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvindachComponent } from './pvindach.component';

describe('PvindachComponent', () => {
  let component: PvindachComponent;
  let fixture: ComponentFixture<PvindachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PvindachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvindachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
