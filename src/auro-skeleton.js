// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
// If use litElement base class
import { html, LitElement } from "lit";
import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Shows a placeholder shape with a shimmer animation while content loads, so people can tell the page is still working.
 *
 * **Key capabilities**
 * - **Shapes**: Set `shape` to `circle`, `oval`, or `rectangle` to change the outline.
 * - **Fills its container**: The skeleton always fills the width of its container unless you set a width, and it needs a height set with CSS.
 * - **Screen reader text**: The skeleton always includes the hidden text "Loading..." for screen reader users.
 *
 * @summary A loading placeholder with a shimmer animation and circle, oval, or rectangle shapes.
 * @example
 * <auro-skeleton shape="rectangle" style="width: 400px; height: 300px"></auro-skeleton>
 * @customElement auro-skeleton
 */
export class AuroSkeleton extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,

      /**
       * Sets the skeleton's outline. `circle` makes an ellipse, which is a circle when the width and height match, `oval` gives it fully rounded ends, and `rectangle` gives it slightly rounded corners. When not set, the corners are square.
       * @type {'circle' | 'oval' | 'rectangle'}
       */
      shape: { 
        type: String,
      },
    };
  }

  static get styles() {
    return [styleCss, colorCss, tokensCss];
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-skeleton"] - The tag name to register the element under.
   *
   * @example
   * AuroSkeleton.register("custom-skeleton") // Registers the element as <custom-skeleton>
   *
   */
  static register(name = "auro-skeleton") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroSkeleton);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-skeleton");
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
