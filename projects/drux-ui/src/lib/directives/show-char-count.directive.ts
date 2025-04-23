import {
  Directive,
  Input,
  OnChanges,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[showCharCount]',
  standalone: true,
})
export class ShowCharCountDirective implements OnChanges {
  @Input() model: string = '';
  @Input() maxLength: number | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    const currentLength = this.model?.length ?? 0;
    const maxLength = this.maxLength ?? 0;
    const percentage = Math.min((currentLength / maxLength) * 100, 100);

    if (percentage >= 90) {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#dc3545'); // red
    } else if (percentage >= 70) {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#ffc107'); // yellow
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#6c757d'); // muted
    }
  }
}
