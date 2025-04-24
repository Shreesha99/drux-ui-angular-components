import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DrButtonComponent } from './dr-button.component';

describe('DrButtonComponent', () => {
  let component: DrButtonComponent;
  let fixture: ComponentFixture<DrButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the default label', () => {
    const buttonEl: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonEl.textContent?.trim()).toContain('Click Me');
  });

  it('should render custom label when provided', () => {
    component.label = 'Submit';
    fixture.detectChanges();
    const buttonEl: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonEl.textContent?.trim()).toContain('Submit');
  });

  it('should be disabled when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    const buttonEl: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonEl.disabled).toBeTrue();
  });

  it('should be disabled when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();
    const buttonEl: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonEl.disabled).toBeTrue();
  });

  it('should render a spinner when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(By.css('.spinner-border'));
    expect(spinner).toBeTruthy();
  });

  it('should add correct Bootstrap class based on type', () => {
    component.type = 'success';
    fixture.detectChanges();
    const buttonEl: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonEl.className).toContain('btn-success');
  });

  it('should trigger onClick when clicked and not loading/disabled', () => {
    spyOn(component, 'onClick').and.callThrough();
    const buttonEl = fixture.debugElement.query(By.css('button'));
    buttonEl.nativeElement.click();
    expect(component.onClick).toHaveBeenCalled();
    expect(component.clicked()).toBeTrue();
  });

  it('should use native type from input', () => {
    component.nativeType = 'submit';
    fixture.detectChanges();
    const buttonEl: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(buttonEl.getAttribute('type')).toBe('submit');
  });
});
