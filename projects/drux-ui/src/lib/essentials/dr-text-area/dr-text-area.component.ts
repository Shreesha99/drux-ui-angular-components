import {
  Component,
  Input,
  signal,
  computed,
  ContentChild,
  AfterContentInit,
  ElementRef,
  ViewChild,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowCharCountDirective } from '../../directives/show-char-count.directive';

@Component({
  selector: 'dr-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule, ShowCharCountDirective],
  templateUrl: './dr-text-area.component.html',
  styleUrls: ['./dr-text-area.component.scss'],
})
export class DrTextareaComponent implements AfterContentInit {
  private _model: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() rows: number = 3;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() error: string = '';
  @Input() maxLength: number | null = null;

  @Input()
  set model(val: string) {
    this._model = val;
    this.modelSignal.set(val);
  }
  get model(): string {
    return this._model;
  }

  @Output() modelChange = new EventEmitter<string>();

  @Input()
  set showCharCount(val: any) {
    this._showCharCount = this.coerceBoolean(val);
  }
  get showCharCount(): boolean {
    return this._showCharCount;
  }
  private _showCharCount = false;

  @Input()
  set autoResize(val: any) {
    this._autoResize = this.coerceBoolean(val);
  }
  get autoResize(): boolean {
    return this._autoResize;
  }
  private _autoResize = false;

  @ViewChild('textareaRef') textareaRef!: ElementRef;

  focused = signal(false);
  modelSignal = signal<string>('');
  charCount = computed(() => this.modelSignal().length);

  constructor(private renderer: Renderer2) {}

  ngAfterContentInit() {
    if (this.autoResize && this.textareaRef) {
      this.adjustHeight();
    }
  }

  onInput() {
    if (this.autoResize) {
      this.adjustHeight();
    }
  }

  onModelChange(val: string) {
    this.model = val;
    this.modelChange.emit(val);
  }

  private adjustHeight() {
    const textarea = this.textareaRef.nativeElement as HTMLTextAreaElement;
    this.renderer.setStyle(textarea, 'height', 'auto');
    this.renderer.setStyle(textarea, 'height', `${textarea.scrollHeight}px`);
  }

  private coerceBoolean(value: any): boolean {
    return value !== null && value !== false && `${value}` !== 'false';
  }
}
