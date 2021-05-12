import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-skeleton.js';

describe('auro-skeleton', () => {
  it('sets the CSS class on auro-skeleton > div element', async () => {
    const el = await fixture(html`
      <auro-skeleton cssclass="testClass"></auro-skeleton>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-skeleton is accessible', async () => {
    const el = await fixture(html`
      <auro-skeleton cssclass="testClass"></auro-skeleton>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-skeleton custom element is defined', async () => {
    const el = await !!customElements.get("auro-skeleton");

    await expect(el).to.be.true;
  });
});
