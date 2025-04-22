import * as i0 from "@angular/core";
export declare class DrAccordionComponent {
    title: string;
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    expanded: boolean;
    disabled: boolean;
    flush: boolean;
    isOpen: import("@angular/core").WritableSignal<boolean>;
    toggle(): void;
    get headerClass(): string;
    get bodyClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrAccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DrAccordionComponent, "dr-accordion", never, { "title": { "alias": "title"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "flush": { "alias": "flush"; "required": false; }; }, {}, never, ["*"], true, never>;
}
