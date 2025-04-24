import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrIconComponent } from './dr-icon.component';
import { By } from '@angular/platform-browser';

describe('DrIconComponent', () => {
  let component: DrIconComponent;
  let fixture: ComponentFixture<DrIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrIconComponent], // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(DrIconComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should apply the correct icon class from name input', () => {
    component.name = 'bi-alarm';
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('i'));
    expect(icon.nativeElement.classList).toContain('bi-alarm');
  });

  it('should apply the correct size class based on size input', () => {
    component.name = 'bi-alarm';
    component.size = 'lg'; // maps to fs-4
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('i'));
    expect(icon.nativeElement.classList).toContain('fs-4');
  });

  it('should default to size "md" if size is invalid', () => {
    component.name = 'bi-alarm';
    // @ts-expect-error: intentionally invalid to test fallback
    component.size = 'xxl';
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('i'));
    expect(icon.nativeElement.classList).toContain('fs-5'); // fs-5 is for md
  });

  it('should bind aria-hidden attribute correctly', () => {
    component.name = 'bi-alarm';
    component.ariaHidden = 'false';
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('i'));
    expect(icon.attributes['aria-hidden']).toBe('false');
  });

  it('should trim name and still compute correct class', () => {
    component.name = '  bi-check ';
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('i'));
    expect(icon.nativeElement.classList).toContain('bi-check');
  });
});
