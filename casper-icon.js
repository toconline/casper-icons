import './casper-iconset-fa-light.js';
import './casper-iconset-fa-solid.js';
import './casper-iconset-fa-regular.js';

import { templatize } from '@polymer/polymer/lib/utils/templatize.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';

class CasperIcon extends PolymerElement {

  static get is () {
    return 'casper-icon';
  }

  static get template () {
    return html`
      <style>
        :host {
          display: flex;
          align-items: center;
        }

        svg {
          width: 24px;
          height: 24px;
          fill: var(--casper-icon-fill-color);
        }
      </style>
    `;
  }

  static get properties () {
    return {
      icon: {
        type: String,
        observer: '__iconChanged'
      },
    };
  }

  async __iconChanged (iconFullName) {
    if (!iconFullName) return;

    const [iconset, icon] = iconFullName.split(':');

    let iconsetElement = document.head.querySelector(`casper-iconset[name="${iconset}"]`);

    if (!iconsetElement) {
      console.error(`The requested iconset - ${iconset} - does not exist.`);
      return;
    }

    const template = iconsetElement.getTemplateForIcon(icon);

    if (!template) {
      console.error(`The requested icon - ${icon} - does not exist.`);
      return;
    }

    const templateClass = templatize(template);

    const existingIcon = this.shadowRoot.querySelector('svg');
    if (existingIcon) this.shadowRoot.removeChild(existingIcon);

    this.shadowRoot.appendChild(new templateClass().root);
  }
}

customElements.define(CasperIcon.is, CasperIcon);
