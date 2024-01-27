import { AuroSkeleton } from './src/auro-skeleton.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-skeleton') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroSkeleton {});
  }
}

export { registerComponent }
