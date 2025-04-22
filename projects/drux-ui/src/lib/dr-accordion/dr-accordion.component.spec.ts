import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrAccordionComponent } from './dr-accordion.component';

describe('DrAccordionComponent', () => {
  let component: DrAccordionComponent;
  let fixture: ComponentFixture<DrAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
