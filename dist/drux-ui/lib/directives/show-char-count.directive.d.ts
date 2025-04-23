import { OnChanges, ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ShowCharCountDirective implements OnChanges {
    private el;
    private renderer;
    model: string;
    maxLength: number | null;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowCharCountDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ShowCharCountDirective, "[showCharCount]", never, { "model": { "alias": "model"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; }, {}, never, never, true, never>;
}
