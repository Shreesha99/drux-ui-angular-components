import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  effect,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dr-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dr-checkbox.component.html',
  styleUrls: ['./dr-checkbox.component.scss'],
})
export class DrCheckboxComponent {
  private _model = false;
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() error: string = '';

  @Input()
  set model(value: boolean) {
    this._model = value;
    this.modelSignal.set(value);
  }

  get model(): boolean {
    return this._model;
  }

  @Output() modelChange = new EventEmitter<boolean>();

  @ViewChild('checkboxRef') checkboxRef!: ElementRef;

  focused = signal(false);
  modelSignal = signal<boolean>(false);

  constructor() {
    effect(() => {
      this._model = this.modelSignal();
    });
  }

  onChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.modelSignal.set(checked);
    this.modelChange.emit(checked);
  }
}
