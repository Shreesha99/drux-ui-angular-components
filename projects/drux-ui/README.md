# 🎨 Drux UI for Angular

[![npm version](https://img.shields.io/npm/v/drux-ui-angular.svg)](https://www.npmjs.com/package/drux-ui-angular)
[![npm downloads](https://img.shields.io/npm/dm/drux-ui-angular.svg)](https://www.npmjs.com/package/drux-ui-angular)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**Version:** `0.0.6`  
**Angular Compatibility:** `17.2+`  
**Style:** Bootstrap-based (via CDN) + SCSS  
**Modern Angular Features:** Standalone Components · Signals · `loadComponent` · No Modules

---

Drux UI is a simple and flexible UI component library made for **Angular 17+**.  
It follows **Bootstrap styling**, supports **modern Angular features**, and is built to help you get started quickly and design faster.

---

## ✨ What’s New in v0.0.6

- Internal versioning updates

---

## 📦 Installation

Install the package using npm:

```bash
npm install drux-ui-angular
```

Or with yarn:

```bash
yarn add drux-ui-angular
```

---

## 🛠 Usage

Use any component as a standalone import in your Angular 17+ app:

```ts
import { DruxButtonComponent } from 'drux-ui-angular';

@Component({
  standalone: true,
  imports: [DruxButtonComponent],
  template: `<dr-button variant="primary">Click Me</dr-button>`
})
export class MyComponent {}
```

---

## 📚 Components Available

- ✅ `<dr-button>` – Styled buttons with variants like `primary`, `outline`, `danger`
- ✅ `<dr-input>` – Input field with Bootstrap classes
- ✅ `<dr-accordion>` – Expandable/collapsible content
- ✅ `<dr-icon>` – Simple and customizable icon component *(New)*

More components like Modal, Tooltip, Toast, Tabs, etc. are coming soon!

---

## 🎨 Styling & Theming

Drux UI uses **Bootstrap utility classes** out of the box.  
That means you can use classes like `text-danger`, `bg-light`, or `rounded` directly on components for instant styling.

Dark mode and custom themes are easy to apply using your own styles.

---

## 🔍 Live Preview (coming soon)

You’ll soon be able to preview all components in action:  
📎 [drux-ui-angular.vercel.app](https://drux-ui-angular.vercel.app)

---

## 🙌 Made with simplicity in mind

Drux UI is built to be minimal, quick to use, and easy to customize.  
If you're starting a new Angular app and want clean UI components fast — you're in the right place.

---

## 👤 Author

**Shreesha Venkatram**  

---

