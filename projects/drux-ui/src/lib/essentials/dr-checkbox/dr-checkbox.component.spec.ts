import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrCheckboxComponent } from './dr-checkbox.component';
import { By } from '@angular/platform-browser';

describe('DrCheckboxComponent', () => {
  let component: DrCheckboxComponent;
  let fixture: ComponentFixture<DrCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render label if provided', () => {
    component.label = 'Accept terms';
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('label'));
    expect(label.nativeElement.textContent.trim()).toBe('Accept terms');
  });

  it('should not render label if not provided', () => {
    component.label = '';
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('label'));
    expect(label).toBeNull();
  });

  it('should emit modelChange on checkbox change', () => {
    spyOn(component.modelChange, 'emit');
    const checkbox = fixture.debugElement.query(
      By.css('input[type="checkbox"]')
    ).nativeElement;
    checkbox.click();
    fixture.detectChanges();
    expect(component.modelChange.emit).toHaveBeenCalledWith(true);
  });

  it('should reflect checked state', () => {
    component.model = true;
    fixture.detectChanges();
    const checkbox = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(checkbox.checked).toBeTrue();
  });

  it('should apply disabled attribute', () => {
    component.disabled = true;
    fixture.detectChanges();
    const checkbox = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(checkbox.disabled).toBeTrue();
  });

  it('should display error message if error input is set', () => {
    component.error = 'Required field';
    fixture.detectChanges();
    const errorDiv = fixture.debugElement.query(By.css('.invalid-feedback'));
    expect(errorDiv.nativeElement.textContent.trim()).toBe('Required field');
  });

  it('should set aria-invalid when there is an error', () => {
    component.error = 'Invalid';
    fixture.detectChanges();
    const checkbox = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(checkbox.getAttribute('aria-invalid')).toBe('true');
  });
});
