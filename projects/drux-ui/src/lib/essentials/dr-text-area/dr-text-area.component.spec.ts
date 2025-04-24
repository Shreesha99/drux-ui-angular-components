import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DrTextareaComponent } from './dr-text-area.component';
import { ShowCharCountDirective } from '../../directives/show-char-count.directive';
import { By } from '@angular/platform-browser';

describe('DrTextareaComponent', () => {
  let component: DrTextareaComponent;
  let fixture: ComponentFixture<DrTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ShowCharCountDirective, DrTextareaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label if provided', () => {
    component.label = 'Description';
    fixture.detectChanges();

    const labelEl = fixture.debugElement.query(By.css('label'));
    expect(labelEl.nativeElement.textContent).toContain('Description');
  });

  it('should update the model on input change', () => {
    const textarea = fixture.debugElement.query(
      By.css('textarea')
    ).nativeElement;

    textarea.value = 'Test input';
    textarea.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.model).toBe('Test input');
  });

  it('should display error message if error is set', () => {
    component.error = 'This field is required';
    fixture.detectChanges();

    const errorEl = fixture.debugElement.query(By.css('.invalid-feedback'));
    expect(errorEl.nativeElement.textContent).toContain(
      'This field is required'
    );
  });

  it('should display character count if enabled', () => {
    component.maxLength = 100;
    component.showCharCount = true;
    component.model = 'Hello';
    fixture.detectChanges();

    const charCountEl = fixture.debugElement.query(By.css('.char-count'));
    expect(charCountEl.nativeElement.textContent.trim()).toBe('5 / 100');
  });
});
