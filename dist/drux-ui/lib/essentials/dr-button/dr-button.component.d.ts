import * as i0 from "@angular/core";
export declare class DrButtonComponent {
    label: string;
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    size: 'sm' | 'md' | 'lg';
    block: boolean;
    loading: boolean;
    disabled: boolean;
    outlined: boolean;
    text: boolean;
    raised: boolean;
    link: boolean;
    nativeType: 'button' | 'submit' | 'reset';
    ariaLabel: string;
    clicked: import("@angular/core").WritableSignal<boolean>;
    onClick(): void;
    get classes(): string;
    getStyleClass(): string;
    sizeClass(): "" | "btn-sm" | "btn-lg";
    static ɵfac: i0.ɵɵFactoryDeclaration<DrButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DrButtonComponent, "dr-button", never, { "label": { "alias": "label"; "required": false; }; "type": { "alias": "type"; "required": false; }; "size": { "alias": "size"; "required": false; }; "block": { "alias": "block"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "outlined": { "alias": "outlined"; "required": false; }; "text": { "alias": "text"; "required": false; }; "raised": { "alias": "raised"; "required": false; }; "link": { "alias": "link"; "required": false; }; "nativeType": { "alias": "nativeType"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; }, {}, never, never, true, never>;
}
