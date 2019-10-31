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
          width: 24px;
          height: 24px;
          display: flex;
        }

        #icon-container,
        #icon-container svg {
          width: 100%;
          height: 100%;
          display: block;
          fill: var(--casper-icon-fill-color);
        }
      </style>

      <div id="icon-container"></div>
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
    const [iconset, icon] = iconFullName.split(':');

    let iconsetElement = document.head.querySelector(`casper-iconset[name="${iconset}"]`);

    if (!iconsetElement) {
      console.error('The request iconset does not exist.');
      return;
    }

    const template = iconsetElement.getTemplateForIcon(icon);

    if (!template) {
      console.error('There is no template for the specified icon');
      return;
    }

    const templateClass = templatize(template);
    this.$['icon-container'].innerHTML = '';
    this.$['icon-container'].appendChild(new templateClass().root);
  }
}

customElements.define(CasperIcon.is, CasperIcon);
