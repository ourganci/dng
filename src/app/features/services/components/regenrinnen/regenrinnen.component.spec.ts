import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegenrinnenComponent } from './regenrinnen.component';

describe('RegenrinnenComponent', () => {
  let component: RegenrinnenComponent;
  let fixture: ComponentFixture<RegenrinnenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegenrinnenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegenrinnenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
