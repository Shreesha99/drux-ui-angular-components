import { EventEmitter, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DrCheckboxComponent {
    private _model;
    label: string;
    disabled: boolean;
    required: boolean;
    error: string;
    set model(value: boolean);
    get model(): boolean;
    modelChange: EventEmitter<boolean>;
    checkboxRef: ElementRef;
    focused: import("@angular/core").WritableSignal<boolean>;
    modelSignal: import("@angular/core").WritableSignal<boolean>;
    constructor();
    onChange(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DrCheckboxComponent, "dr-checkbox", never, { "label": { "alias": "label"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; "error": { "alias": "error"; "required": false; }; "model": { "alias": "model"; "required": false; }; }, { "modelChange": "modelChange"; }, never, never, true, never>;
}
