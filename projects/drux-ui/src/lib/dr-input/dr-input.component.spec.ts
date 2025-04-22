import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrInputComponent } from './dr-input.component';

describe('DrInputComponent', () => {
  let component: DrInputComponent;
  let fixture: ComponentFixture<DrInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
