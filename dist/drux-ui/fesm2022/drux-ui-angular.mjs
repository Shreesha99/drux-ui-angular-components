import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { signal, Input, Component, Directive, EventEmitter, Output, ChangeDetectionStrategy, computed, ViewChild, effect } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
        const base = this.name.trim();
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

class ShowCharCountDirective {
    el;
    renderer;
    model = '';
    maxLength = null;
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnChanges() {
        const currentLength = this.model?.length ?? 0;
        const maxLength = this.maxLength ?? 0;
        const percentage = Math.min((currentLength / maxLength) * 100, 100);
        if (percentage >= 90) {
            this.renderer.setStyle(this.el.nativeElement, 'color', '#dc3545'); // red
        }
        else if (percentage >= 70) {
            this.renderer.setStyle(this.el.nativeElement, 'color', '#ffc107'); // yellow
        }
        else {
            this.renderer.setStyle(this.el.nativeElement, 'color', '#6c757d'); // muted
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: ShowCharCountDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.7", type: ShowCharCountDirective, isStandalone: true, selector: "[showCharCount]", inputs: { model: "model", maxLength: "maxLength" }, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: ShowCharCountDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showCharCount]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { model: [{
                type: Input
            }], maxLength: [{
                type: Input
            }] } });

class DrTextareaComponent {
    renderer;
    _model = '';
    label = '';
    placeholder = '';
    rows = 3;
    disabled = false;
    readonly = false;
    required = false;
    error = '';
    maxLength = null;
    set model(val) {
        this._model = val;
        this.modelSignal.set(val);
    }
    get model() {
        return this._model;
    }
    modelChange = new EventEmitter();
    set showCharCount(val) {
        this._showCharCount = this.coerceBoolean(val);
    }
    get showCharCount() {
        return this._showCharCount;
    }
    _showCharCount = false;
    set autoResize(val) {
        this._autoResize = this.coerceBoolean(val);
    }
    get autoResize() {
        return this._autoResize;
    }
    _autoResize = false;
    textareaRef;
    focused = signal(false);
    modelSignal = signal('');
    charCount = computed(() => this.modelSignal().length);
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngAfterContentInit() {
        if (this.autoResize && this.textareaRef) {
            this.adjustHeight();
        }
    }
    onInput() {
        if (this.autoResize) {
            this.adjustHeight();
        }
    }
    onModelChange(val) {
        this.model = val;
        this.modelChange.emit(val);
    }
    adjustHeight() {
        const textarea = this.textareaRef.nativeElement;
        this.renderer.setStyle(textarea, 'height', 'auto');
        this.renderer.setStyle(textarea, 'height', `${textarea.scrollHeight}px`);
    }
    coerceBoolean(value) {
        return value !== null && value !== false && `${value}` !== 'false';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrTextareaComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.7", type: DrTextareaComponent, isStandalone: true, selector: "dr-textarea", inputs: { label: "label", placeholder: "placeholder", rows: "rows", disabled: "disabled", readonly: "readonly", required: "required", error: "error", maxLength: "maxLength", model: "model", showCharCount: "showCharCount", autoResize: "autoResize" }, outputs: { modelChange: "modelChange" }, viewQueries: [{ propertyName: "textareaRef", first: true, predicate: ["textareaRef"], descendants: true }], ngImport: i0, template: "<div class=\"form-group mb-3 position-relative\">\r\n  @if (label) {\r\n    <label class=\"form-label\">{{ label }}</label>\r\n  }\r\n\r\n  <div class=\"textarea-wrapper d-flex align-items-start\">\r\n    <ng-content select=\"[textareaPrefix]\"></ng-content>\r\n\r\n    <textarea\r\n      #textareaRef\r\n      class=\"form-control\"\r\n      [ngClass]=\"{ 'auto-resize': autoResize }\"\r\n      [attr.placeholder]=\"placeholder\"\r\n      [rows]=\"rows\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      [(ngModel)]=\"model\"\r\n      (ngModelChange)=\"onModelChange($event)\"\r\n      (focus)=\"focused.set(true)\"\r\n      (blur)=\"focused.set(false)\"\r\n      (input)=\"onInput()\"\r\n      [attr.maxLength]=\"maxLength ?? null\"\r\n      [attr.aria-invalid]=\"!!error\"\r\n      [required]=\"required\"\r\n    ></textarea>\r\n\r\n    <ng-content select=\"[textareaSuffix]\"></ng-content>\r\n  </div>\r\n\r\n  @if (error) {\r\n    <div class=\"invalid-feedback d-block\">{{ error }}</div>\r\n  }\r\n\r\n  @if (showCharCount && maxLength) {\r\n    <div class=\"text-end small text-muted mt-1\">\r\n      <div class=\"char-count\" showCharCount [model]=\"model\" [maxLength]=\"maxLength\">\r\n        {{ charCount() }} / {{ maxLength }}\r\n      </div>\r\n    </div>\r\n  }\r\n</div>\r\n", styles: [":host{display:block;width:100%}.form-group{margin-bottom:1rem}.textarea-wrapper{position:relative}textarea{width:100%;transition:all .2s ease;resize:vertical}textarea.auto-resize{overflow:hidden;resize:none}.invalid-feedback{font-size:.875rem;color:#dc3545}.text-end{text-align:end}.text-muted{color:#6c757d}small{font-size:.875rem}textarea:focus{outline:none;border-color:#007bff;box-shadow:0 0 0 .25rem #268fff40}textarea[readonly]{background-color:#f8f9fa}textarea:disabled{background-color:#e9ecef}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: ShowCharCountDirective, selector: "[showCharCount]", inputs: ["model", "maxLength"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrTextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dr-textarea', standalone: true, imports: [CommonModule, FormsModule, ShowCharCountDirective], template: "<div class=\"form-group mb-3 position-relative\">\r\n  @if (label) {\r\n    <label class=\"form-label\">{{ label }}</label>\r\n  }\r\n\r\n  <div class=\"textarea-wrapper d-flex align-items-start\">\r\n    <ng-content select=\"[textareaPrefix]\"></ng-content>\r\n\r\n    <textarea\r\n      #textareaRef\r\n      class=\"form-control\"\r\n      [ngClass]=\"{ 'auto-resize': autoResize }\"\r\n      [attr.placeholder]=\"placeholder\"\r\n      [rows]=\"rows\"\r\n      [disabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      [(ngModel)]=\"model\"\r\n      (ngModelChange)=\"onModelChange($event)\"\r\n      (focus)=\"focused.set(true)\"\r\n      (blur)=\"focused.set(false)\"\r\n      (input)=\"onInput()\"\r\n      [attr.maxLength]=\"maxLength ?? null\"\r\n      [attr.aria-invalid]=\"!!error\"\r\n      [required]=\"required\"\r\n    ></textarea>\r\n\r\n    <ng-content select=\"[textareaSuffix]\"></ng-content>\r\n  </div>\r\n\r\n  @if (error) {\r\n    <div class=\"invalid-feedback d-block\">{{ error }}</div>\r\n  }\r\n\r\n  @if (showCharCount && maxLength) {\r\n    <div class=\"text-end small text-muted mt-1\">\r\n      <div class=\"char-count\" showCharCount [model]=\"model\" [maxLength]=\"maxLength\">\r\n        {{ charCount() }} / {{ maxLength }}\r\n      </div>\r\n    </div>\r\n  }\r\n</div>\r\n", styles: [":host{display:block;width:100%}.form-group{margin-bottom:1rem}.textarea-wrapper{position:relative}textarea{width:100%;transition:all .2s ease;resize:vertical}textarea.auto-resize{overflow:hidden;resize:none}.invalid-feedback{font-size:.875rem;color:#dc3545}.text-end{text-align:end}.text-muted{color:#6c757d}small{font-size:.875rem}textarea:focus{outline:none;border-color:#007bff;box-shadow:0 0 0 .25rem #268fff40}textarea[readonly]{background-color:#f8f9fa}textarea:disabled{background-color:#e9ecef}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }], propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], rows: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], required: [{
                type: Input
            }], error: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], model: [{
                type: Input
            }], modelChange: [{
                type: Output
            }], showCharCount: [{
                type: Input
            }], autoResize: [{
                type: Input
            }], textareaRef: [{
                type: ViewChild,
                args: ['textareaRef']
            }] } });

class DrCheckboxComponent {
    _model = false;
    label = '';
    disabled = false;
    required = false;
    error = '';
    set model(value) {
        this._model = value;
        this.modelSignal.set(value);
    }
    get model() {
        return this._model;
    }
    modelChange = new EventEmitter();
    checkboxRef;
    focused = signal(false);
    modelSignal = signal(false);
    constructor() {
        effect(() => {
            this._model = this.modelSignal();
        });
    }
    onChange(event) {
        const checked = event.target.checked;
        this.modelSignal.set(checked);
        this.modelChange.emit(checked);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrCheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.7", type: DrCheckboxComponent, isStandalone: true, selector: "dr-checkbox", inputs: { label: "label", disabled: "disabled", required: "required", error: "error", model: "model" }, outputs: { modelChange: "modelChange" }, viewQueries: [{ propertyName: "checkboxRef", first: true, predicate: ["checkboxRef"], descendants: true }], ngImport: i0, template: "<div class=\"form-group mb-3 position-relative\">\r\n    <div class=\"form-check\">\r\n      <input\r\n        #checkboxRef\r\n        type=\"checkbox\"\r\n        class=\"form-check-input\"\r\n        [checked]=\"model\"\r\n        [disabled]=\"disabled\"\r\n        [required]=\"required\"\r\n        (change)=\"onChange($event)\"\r\n        (focus)=\"focused.set(true)\"\r\n        (blur)=\"focused.set(false)\"\r\n        [attr.aria-invalid]=\"!!error\"\r\n      />\r\n      <label class=\"form-check-label\" *ngIf=\"label\">{{ label }}</label>\r\n    </div>\r\n  \r\n    <div *ngIf=\"error\" class=\"invalid-feedback d-block mt-1\">\r\n      {{ error }}\r\n    </div>\r\n  </div>\r\n  ", styles: [":host{display:block;width:100%}.form-group{margin-bottom:1rem}.form-check-input:focus{border-color:#007bff;box-shadow:0 0 0 .2rem #007bff40}.invalid-feedback{font-size:.875rem;color:#dc3545}.form-check-input:disabled{background-color:#e9ecef}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.7", ngImport: i0, type: DrCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dr-checkbox', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"form-group mb-3 position-relative\">\r\n    <div class=\"form-check\">\r\n      <input\r\n        #checkboxRef\r\n        type=\"checkbox\"\r\n        class=\"form-check-input\"\r\n        [checked]=\"model\"\r\n        [disabled]=\"disabled\"\r\n        [required]=\"required\"\r\n        (change)=\"onChange($event)\"\r\n        (focus)=\"focused.set(true)\"\r\n        (blur)=\"focused.set(false)\"\r\n        [attr.aria-invalid]=\"!!error\"\r\n      />\r\n      <label class=\"form-check-label\" *ngIf=\"label\">{{ label }}</label>\r\n    </div>\r\n  \r\n    <div *ngIf=\"error\" class=\"invalid-feedback d-block mt-1\">\r\n      {{ error }}\r\n    </div>\r\n  </div>\r\n  ", styles: [":host{display:block;width:100%}.form-group{margin-bottom:1rem}.form-check-input:focus{border-color:#007bff;box-shadow:0 0 0 .2rem #007bff40}.invalid-feedback{font-size:.875rem;color:#dc3545}.form-check-input:disabled{background-color:#e9ecef}\n"] }]
        }], ctorParameters: () => [], propDecorators: { label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], error: [{
                type: Input
            }], model: [{
                type: Input
            }], modelChange: [{
                type: Output
            }], checkboxRef: [{
                type: ViewChild,
                args: ['checkboxRef']
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { DrAccordionComponent, DrButtonComponent, DrCheckboxComponent, DrIconComponent, DrInputComponent, DrTextareaComponent };
//# sourceMappingURL=drux-ui-angular.mjs.map
