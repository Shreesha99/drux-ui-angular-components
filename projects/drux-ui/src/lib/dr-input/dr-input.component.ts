import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { DrRequiredDirective } from '../directives/required.directive';

type InputType = 'text' | 'number' | 'password';

@Component({
  selector: 'dr-input',
  standalone: true,
  imports: [CommonModule, DrRequiredDirective],
  templateUrl: './dr-input.component.html',
  styleUrls: ['./dr-input.component.scss'],
})
export class DrInputComponent {
  @Input() type: InputType = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  inputValue = signal(this.value);

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const val =
      this.type === 'number'
        ? target.value.replace(/[^0-9.]/g, '')
        : target.value;
    this.inputValue.set(val);
    this.valueChange.emit(val);
  }
}
