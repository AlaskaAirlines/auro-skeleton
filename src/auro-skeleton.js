// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-skeleton provides users a way to indicate the loading of asynchronous content on a page
 *
 * @attr {Boolean} circle - Renders a circle skeleton loader.
 * @attr {Boolean} oval - Renders a oval skeleton loader.
 * @attr {Boolean} rectangle - Renders a rectangle skeleton loader.
 */

// build the component class
class AuroSkeleton extends LitElement {
  // constructor() {
  //   super();
  // }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`

      <!-- this is demo code, DO NOT USE IN YOUR ELEMENT -->
      <div>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-skeleton")) {
  customElements.define("auro-skeleton", AuroSkeleton);
}
