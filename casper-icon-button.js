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
      },
      reverse: {
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
          position: relative;
          border-radius: 50%;
          align-items: center;
          justify-items: center;
          box-sizing: border-box;
          background-color: var(--casper-icon-button-background-color, var(--primary-color));
        }

        :host([reverse]) {
          background-color: var(--on-primary-color);
        }

        :host([disabled]) {
          pointer-events: none;
          background-color: var(--disabled-background-color);
        }

        :host casper-icon {
          width: 100%;
          height: 100%;
          --casper-icon-fill-color: var(--casper-icon-button-icon-color, var(--on-primary-color));
        }

        :host([reverse]) casper-icon {
          --casper-icon-fill-color: var(--primary-color);
        }

        :host([disabled]) casper-icon {
          --casper-icon-fill-color: var(--disabled-text-color);
        }

        /* Hover styling */
        :host(:hover) {
          cursor: pointer;
          background-color: var(--casper-icon-button-hover-background-color, var(--on-primary-color));
        }

        :host([reverse]:hover) {
          background-color: var(--primary-color);
        }

        :host(:hover) casper-icon {
          --casper-icon-fill-color: var(--casper-icon-button-hover-icon-color, var(--primary-color));
        }

        :host([reverse]:hover) casper-icon {
          --casper-icon-fill-color: var(--on-primary-color);
        }

      </style>
      <paper-ripple></paper-ripple>
      <casper-icon icon="[[icon]]"></casper-icon>
    `;
  }
}

customElements.define(CasperIconButton.is, CasperIconButton);
