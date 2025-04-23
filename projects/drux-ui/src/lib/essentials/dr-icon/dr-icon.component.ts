import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dr-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  styleUrls: ['./dr-icon.component.scss'],
  templateUrl: './dr-icon.component.html',
})
export class DrIconComponent {
  @Input() name = '';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() color?: string;
  @Input() ariaHidden: 'true' | 'false' = 'true';

  get computedClasses(): string[] {
    const sizeMap: Record<string, string> = {
      sm: 'fs-6',
      md: 'fs-5',
      lg: 'fs-4',
      xl: 'fs-3',
    };

    const base = this.name.trim(); // e.g., 'bi bi-x-circle'
    const sizeClass = sizeMap[this.size] ?? 'fs-5';
    return [base, sizeClass];
  }
}
