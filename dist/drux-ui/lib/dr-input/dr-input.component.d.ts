import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
type InputType = 'text' | 'number' | 'password';
export declare class DrInputComponent {
    type: InputType;
    placeholder: string;
    disabled: boolean;
    value: string;
    valueChange: EventEmitter<string>;
    inputValue: import("@angular/core").WritableSignal<string>;
    onInput(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DrInputComponent, "dr-input", never, { "type": { "alias": "type"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
export {};
