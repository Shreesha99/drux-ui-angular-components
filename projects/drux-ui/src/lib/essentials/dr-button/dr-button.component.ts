import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'dr-button',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./dr-button.component.scss'],
  templateUrl: './dr-button.component.html',
})
export class DrButtonComponent {
  @Input() label = 'Click Me';
  @Input() type:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() block = false;
  @Input() loading = false;
  @Input() disabled = false;
  @Input() outlined = false;
  @Input() text = false;
  @Input() raised = false;
  @Input() link = false;
  @Input() nativeType: 'button' | 'submit' | 'reset' = 'button';
  @Input() ariaLabel: string = '';

  clicked = signal(false);

  onClick() {
    if (this.disabled || this.loading) return;
    this.clicked.set(true);
  }

  get classes() {
    return [
      'btn',
      this.getStyleClass(),
      this.sizeClass(),
      this.block ? 'w-100' : '',
      this.raised ? 'shadow-sm' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  getStyleClass() {
    if (this.text) return `btn btn-link text-${this.type}`;
    if (this.outlined) return `btn btn-outline-${this.type}`;
    return `btn btn-${this.type}`;
  }

  sizeClass() {
    switch (this.size) {
      case 'sm':
        return 'btn-sm';
      case 'lg':
        return 'btn-lg';
      default:
        return '';
    }
  }
}
