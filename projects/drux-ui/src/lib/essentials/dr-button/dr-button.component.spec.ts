import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrButtonComponent } from './dr-button.component';

describe('DrButtonComponent', () => {
  let component: DrButtonComponent;
  let fixture: ComponentFixture<DrButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
