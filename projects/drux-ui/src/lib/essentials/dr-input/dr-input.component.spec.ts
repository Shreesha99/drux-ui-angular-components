import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrInputComponent } from './dr-input.component';
import { By } from '@angular/platform-browser';

describe('DrInputComponent', () => {
  let component: DrInputComponent;
  let fixture: ComponentFixture<DrInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input with provided placeholder', () => {
    component.placeholder = 'Enter name';
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(input.placeholder).toBe('Enter name');
  });

  it('should emit valueChange and update inputValue on input (text type)', () => {
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    spyOn(component.valueChange, 'emit');

    inputEl.value = 'John';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.inputValue()).toBe('John');
    expect(component.valueChange.emit).toHaveBeenCalledWith('John');
  });

  it('should reflect disabled state in input', () => {
    component.disabled = true;
    fixture.detectChanges();

    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputEl.disabled).toBeTrue();
  });
});
