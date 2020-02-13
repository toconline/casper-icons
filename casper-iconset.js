import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CasperIconset extends PolymerElement {

  static get is () {
    return 'casper-iconset';
  }

  static get properties () {
    return {
      name: {
        type: String,
        reflectToAttribute: true
      }
    }
  }

  static get template () {
    return html`
      <slot></slot>
    `;
  }

  ready () {
    super.ready();

    this.__iconTemplates = this.shadowRoot.querySelector('slot').assignedElements();
  }

  getTemplateForIcon (icon) {
    return this.__iconTemplates.find(iconTemplate => iconTemplate.getAttribute('id') === icon);
  }
}

customElements.define(CasperIconset.is, CasperIconset);