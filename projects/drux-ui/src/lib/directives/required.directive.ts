import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[drRequired]',
  standalone: true,
})
export class DrRequiredDirective implements OnInit {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  ngOnInit(): void {
    this.el.nativeElement.setAttribute('required', '');
    this.el.nativeElement.classList.add('is-required');
  }
}
