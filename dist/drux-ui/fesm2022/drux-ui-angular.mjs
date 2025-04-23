import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { signal, Input, Component, Directive, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

class DrButtonComponent {
    label = 'Click Me';
    type = 'primary';
    size = 'md';
    block = false;
    loading = false;
    disabled = false;
    outlined = false;
    text = false;
    raised = false;
    link = false;
    nativeType = 'button';
    ariaLabel = '';
    clicked = signal(false);
    onClick() {
        if (this.disabled || this.loading)
            return;
        this.clicked.set(true);
    }
    get classes() {
        return [
            'btn',
            this.getStyleClass(),
            this.sizeClass(),
            this.block ? 'w-100' : '',
            this.raised ? 'shadow-sm' : '',
        ]
            .filter(Boolean)
            .join(' ');
    }
    getStyleClass() {
        if (this.text)
            return `btn btn-link text-${this.type}`;
        if (this.outlined)
            return `btn btn-outline-${this.type}`;
        return `btn btn-${this.type}`;
    }
    sizeClass() {
        switch (this.size) {
            case 'sm':
                return 'btn-sm';
            case 'lg':
                return 'btn-lg';
            default:
                return '';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.7", type: DrButtonComponent, isStandalone: true, selector: "dr-button", inputs: { label: "label", type: "type", size: "size", block: "block", loading: "loading", disabled: "disabled", outlined: "outlined", text: "text", raised: "raised", link: "link", nativeType: "nativeType", ariaLabel: "ariaLabel" }, ngImport: i0, template: "<button\r\n  [attr.type]=\"nativeType\"\r\n  [class]=\"classes + ' position-relative'\"\r\n  [disabled]=\"disabled || loading\"\r\n  (click)=\"onClick()\"\r\n  [attr.aria-label]=\"ariaLabel\"\r\n>\r\n  @if (loading) {\r\n    <span class=\"spinner-border spinner-border-sm me-2\" role=\"status\"></span>\r\n  }\r\n\r\n  @if (label) {\r\n    {{ label }}\r\n  }\r\n</button>\r\n", styles: [":host ::ng-deep button{position:relative}:host ::ng-deep button.icon-only{width:2.5rem;height:2.5rem;padding:.5rem;display:inline-flex;align-items:center;justify-content:center}:host ::ng-deep button.rounded-pill{padding-left:1rem;padding-right:1rem}:host ::ng-deep button .drux-badge{position:absolute;top:0;right:0;transform:translate(50%,-50%);font-size:.65rem;padding:.25em .5em;border-radius:10rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dr-button', standalone: true, imports: [CommonModule], template: "<button\r\n  [attr.type]=\"nativeType\"\r\n  [class]=\"classes + ' position-relative'\"\r\n  [disabled]=\"disabled || loading\"\r\n  (click)=\"onClick()\"\r\n  [attr.aria-label]=\"ariaLabel\"\r\n>\r\n  @if (loading) {\r\n    <span class=\"spinner-border spinner-border-sm me-2\" role=\"status\"></span>\r\n  }\r\n\r\n  @if (label) {\r\n    {{ label }}\r\n  }\r\n</button>\r\n", styles: [":host ::ng-deep button{position:relative}:host ::ng-deep button.icon-only{width:2.5rem;height:2.5rem;padding:.5rem;display:inline-flex;align-items:center;justify-content:center}:host ::ng-deep button.rounded-pill{padding-left:1rem;padding-right:1rem}:host ::ng-deep button .drux-badge{position:absolute;top:0;right:0;transform:translate(50%,-50%);font-size:.65rem;padding:.25em .5em;border-radius:10rem}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], block: [{
                type: Input
            }], loading: [{
                type: Input
            }], disabled: [{
                type: Input
            }], outlined: [{
                type: Input
            }], text: [{
                type: Input
            }], raised: [{
                type: Input
            }], link: [{
                type: Input
            }], nativeType: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });

class DrRequiredDirective {
    el;
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        this.el.nativeElement.setAttribute('required', '');
        this.el.nativeElement.classList.add('is-required');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrRequiredDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.7", type: DrRequiredDirective, isStandalone: true, selector: "[drRequired]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrRequiredDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[drRequired]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

class DrInputComponent {
    type = 'text';
    placeholder = '';
    disabled = false;
    value = '';
    valueChange = new EventEmitter();
    inputValue = signal(this.value);
    onInput(event) {
        const target = event.target;
        const val = this.type === 'number'
            ? target.value.replace(/[^0-9.]/g, '')
            : target.value;
        this.inputValue.set(val);
        this.valueChange.emit(val);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.7", type: DrInputComponent, isStandalone: true, selector: "dr-input", inputs: { type: "type", placeholder: "placeholder", disabled: "disabled", value: "value" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<!-- Simple Input Only -->\r\n<input\r\n  class=\"form-control\"\r\n  [type]=\"type\"\r\n  [placeholder]=\"placeholder\"\r\n  [disabled]=\"disabled\"\r\n  [value]=\"inputValue()\"\r\n  (input)=\"onInput($event)\"\r\n  drRequired\r\n/>\r\n", styles: ["input.form-control{border-radius:.5rem;padding:.5rem .75rem;font-size:1rem;transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out}input.form-control:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}input.form-control:disabled{background-color:#e9ecef;opacity:1}input.form-control .is-required{border-left:4px solid red}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: DrRequiredDirective, selector: "[drRequired]" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dr-input', standalone: true, imports: [CommonModule, DrRequiredDirective], template: "<!-- Simple Input Only -->\r\n<input\r\n  class=\"form-control\"\r\n  [type]=\"type\"\r\n  [placeholder]=\"placeholder\"\r\n  [disabled]=\"disabled\"\r\n  [value]=\"inputValue()\"\r\n  (input)=\"onInput($event)\"\r\n  drRequired\r\n/>\r\n", styles: ["input.form-control{border-radius:.5rem;padding:.5rem .75rem;font-size:1rem;transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out}input.form-control:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}input.form-control:disabled{background-color:#e9ecef;opacity:1}input.form-control .is-required{border-left:4px solid red}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

class DrAccordionComponent {
    title = 'Accordion Title';
    variant = 'primary';
    expanded = false;
    disabled = false;
    flush = false;
    isOpen = signal(this.expanded);
    toggle() {
        if (this.disabled)
            return;
        this.isOpen.update((val) => !val);
    }
    get headerClass() {
        return [
            'accordion-header',
            this.disabled ? 'opacity-50 pointer-events-none' : '',
        ]
            .filter(Boolean)
            .join(' ');
    }
    get bodyClass() {
        return [
            'accordion-body',
            !this.flush ? `border border-top border-${this.variant}` : '',
        ]
            .filter(Boolean)
            .join(' ');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrAccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.7", type: DrAccordionComponent, isStandalone: true, selector: "dr-accordion", inputs: { title: "title", variant: "variant", expanded: "expanded", disabled: "disabled", flush: "flush" }, ngImport: i0, template: "<div class=\"accordion my-2\">\r\n  <div class=\"accordion-item\">\r\n    <h2 class=\"{{ headerClass }}\">\r\n      <dr-button\r\n        [label]=\"title\"\r\n        (click)=\"toggle()\"\r\n        [ariaLabel]=\"title\"\r\n        [type]=\"variant\"\r\n        [block]=\"true\"\r\n        [outlined]=\"true\"\r\n        class=\"accordion-toggle-btn\"\r\n      >\r\n        <span class=\"d-flex justify-content-between align-items-center w-100\">\r\n          <span>{{ title }}</span>\r\n        </span>\r\n      </dr-button>\r\n    </h2>\r\n    <div *ngIf=\"isOpen()\">\r\n      <div [class]=\"bodyClass\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [":host ::ng-deep .accordion .accordion-item{border-radius:.375rem;overflow:hidden}:host ::ng-deep .accordion .accordion-item .accordion-header{padding:0;margin:0;border:none}:host ::ng-deep .accordion .accordion-item .accordion-header dr-button{width:100%;text-align:left;display:flex;justify-content:space-between;align-items:center}:host ::ng-deep .accordion .accordion-item .accordion-header .bi{font-size:1.25rem;transition:transform .3s ease}:host ::ng-deep .accordion .accordion-item .accordion-header .rotate{transform:rotate(180deg)}:host ::ng-deep .accordion .accordion-item .accordion-body{padding:1rem;transition:all .3s ease-in-out}:host ::ng-deep .accordion.flush .accordion-item{border:none}:host ::ng-deep .accordion.flush .accordion-item .accordion-body{border-top:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: DrButtonComponent, selector: "dr-button", inputs: ["label", "type", "size", "block", "loading", "disabled", "outlined", "text", "raised", "link", "nativeType", "ariaLabel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrAccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dr-accordion', standalone: true, imports: [CommonModule, DrButtonComponent], template: "<div class=\"accordion my-2\">\r\n  <div class=\"accordion-item\">\r\n    <h2 class=\"{{ headerClass }}\">\r\n      <dr-button\r\n        [label]=\"title\"\r\n        (click)=\"toggle()\"\r\n        [ariaLabel]=\"title\"\r\n        [type]=\"variant\"\r\n        [block]=\"true\"\r\n        [outlined]=\"true\"\r\n        class=\"accordion-toggle-btn\"\r\n      >\r\n        <span class=\"d-flex justify-content-between align-items-center w-100\">\r\n          <span>{{ title }}</span>\r\n        </span>\r\n      </dr-button>\r\n    </h2>\r\n    <div *ngIf=\"isOpen()\">\r\n      <div [class]=\"bodyClass\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [":host ::ng-deep .accordion .accordion-item{border-radius:.375rem;overflow:hidden}:host ::ng-deep .accordion .accordion-item .accordion-header{padding:0;margin:0;border:none}:host ::ng-deep .accordion .accordion-item .accordion-header dr-button{width:100%;text-align:left;display:flex;justify-content:space-between;align-items:center}:host ::ng-deep .accordion .accordion-item .accordion-header .bi{font-size:1.25rem;transition:transform .3s ease}:host ::ng-deep .accordion .accordion-item .accordion-header .rotate{transform:rotate(180deg)}:host ::ng-deep .accordion .accordion-item .accordion-body{padding:1rem;transition:all .3s ease-in-out}:host ::ng-deep .accordion.flush .accordion-item{border:none}:host ::ng-deep .accordion.flush .accordion-item .accordion-body{border-top:none}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], variant: [{
                type: Input
            }], expanded: [{
                type: Input
            }], disabled: [{
                type: Input
            }], flush: [{
                type: Input
            }] } });

class DrIconComponent {
    name = '';
    size = 'md';
    color;
    ariaHidden = 'true';
    get computedClasses() {
        const sizeMap = {
            sm: 'fs-6',
            md: 'fs-5',
            lg: 'fs-4',
            xl: 'fs-3',
        };
        const base = this.name.trim(); // e.g., 'bi bi-x-circle'
        const sizeClass = sizeMap[this.size] ?? 'fs-5';
        return [base, sizeClass];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.7", type: DrIconComponent, isStandalone: true, selector: "dr-icon", inputs: { name: "name", size: "size", color: "color", ariaHidden: "ariaHidden" }, ngImport: i0, template: "<i\r\nclass=\"drux-icon\"\r\n[ngClass]=\"computedClasses\"\r\n[attr.aria-hidden]=\"ariaHidden\"\r\n></i>", styles: [".drux-icon{display:inline-block;vertical-align:middle;color:inherit}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dr-icon', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule], template: "<i\r\nclass=\"drux-icon\"\r\n[ngClass]=\"computedClasses\"\r\n[attr.aria-hidden]=\"ariaHidden\"\r\n></i>", styles: [".drux-icon{display:inline-block;vertical-align:middle;color:inherit}\n"] }]
        }], propDecorators: { name: [{
                type: Input
            }], size: [{
                type: Input
            }], color: [{
                type: Input
            }], ariaHidden: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { DrAccordionComponent, DrButtonComponent, DrIconComponent, DrInputComponent };
//# sourceMappingURL=drux-ui-angular.mjs.map
