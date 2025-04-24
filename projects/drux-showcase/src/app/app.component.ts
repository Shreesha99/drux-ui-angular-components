import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DrButtonComponent, DrInputComponent } from 'drux-ui-angular';
import { DrAccordionComponent } from '../../../drux-ui/src/lib/dr-accordion/dr-accordion.component';
import { DrIconComponent } from '../../../drux-ui/src/lib/essentials/dr-icon/dr-icon.component';
import { DrTextareaComponent } from '../../../drux-ui/src/lib/essentials/dr-text-area/dr-text-area.component';
import { DrCheckboxComponent } from '../../../drux-ui/src/lib/essentials/dr-checkbox/dr-checkbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DrButtonComponent,
    DrInputComponent,
    CommonModule,
    DrAccordionComponent,
    DrIconComponent,
    DrTextareaComponent,
    DrCheckboxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = signal('');

  onNameChange(value: string) {
    this.name.set(value);
  }

  defaultMessage = '';
  readonlyMessage = 'This is readonly.';
  disabledMessage = 'Disabled field';
  limitedMessage = '';
  autoResizeMessage = '';
  resizableLimitedMessage = '';
  errorMessage = '';
  prefixedMessage = '';
  basicModel = false;
  requiredModel = false;
  disabledModel = false;
  preCheckedModel = true;
  longLabelModel = false;
  dynamicModel = false;
  noLabelModel = false;

  isDisabled = false;
  isRequired = true;
}
