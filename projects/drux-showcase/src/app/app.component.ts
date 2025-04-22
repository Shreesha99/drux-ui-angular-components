import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DrButtonComponent, DrInputComponent } from '@drux-ui/angular';
import { DrAccordionComponent } from '../../../drux-ui/src/lib/dr-accordion/dr-accordion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DrButtonComponent,
    DrInputComponent,
    CommonModule,
    DrAccordionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = signal('');

  onNameChange(value: string) {
    this.name.set(value);
  }
}
