import './casper-icon.js';
import '@polymer/paper-ripple/paper-ripple.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CasperIconButton extends PolymerElement {

  static get is () {
    return 'casper-icon-button';
  }

  static get properties () {
    return {
      icon: {
        type: String,
      },
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }

  static get template () {
    return html`
      <style>
        :host {
          width: 40px;
          height: 40px;
          padding: 8px;
          display: flex;
          border-radius: 50%;
          align-items: center;
          justify-items: center;
          box-sizing: border-box;
        }

        :host([disabled]) {
          pointer-events: none;
          background-color: unset !important;
        }

        :host([disabled]) casper-icon {
          --casper-icon-fill-color: lightgrey;
        }

        casper-icon {
          width: 100%;
          height: 100%;
        }
      </style>
      <paper-ripple></paper-ripple>
      <casper-icon icon="[[icon]]"></casper-icon>
    `;
  }
}

customElements.define(CasperIconButton.is, CasperIconButton);
