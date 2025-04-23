import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrIconComponent } from './dr-icon.component';

describe('DrIconComponent', () => {
  let component: DrIconComponent;
  let fixture: ComponentFixture<DrIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
