import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrTextAreaComponent } from './dr-text-area.component';

describe('DrTextAreaComponent', () => {
  let component: DrTextAreaComponent;
  let fixture: ComponentFixture<DrTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrTextAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
