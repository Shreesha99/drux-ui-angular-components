import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { DrButtonComponent } from '../essentials/dr-button/dr-button.component';

@Component({
  selector: 'dr-accordion',
  standalone: true,
  imports: [CommonModule, DrButtonComponent],
  styleUrls: ['./dr-accordion.component.scss'],
  templateUrl: './dr-accordion.component.html',
})
export class DrAccordionComponent {
  @Input() title: string = 'Accordion Title';
  @Input() variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark' = 'primary';
  @Input() expanded = false;
  @Input() disabled = false;
  @Input() flush = false;

  isOpen = signal(this.expanded);

  toggle() {
    if (this.disabled) return;
    this.isOpen.update((val) => !val);
  }

  get headerClass() {
    return [
      'accordion-header',
      this.disabled ? 'opacity-50 pointer-events-none' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  get bodyClass() {
    return [
      'accordion-body',
      !this.flush ? `border border-top border-${this.variant}` : '',
    ]
      .filter(Boolean)
      .join(' ');
  }
}
