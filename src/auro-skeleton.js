// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html } from "lit";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-skeleton element provides users a way to indicate the loading of asynchronous content on a page.
 *
 * @attr {String} shape - Renders a circle, oval, or rectangle loader.
 */

// build the component class
export class AuroSkeleton extends LitElement {
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
    return [styleCss];
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <span class="util_displayHiddenVisually">Loading...</span>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-skeleton")) {
  customElements.define("auro-skeleton", AuroSkeleton);
}
