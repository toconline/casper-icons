import './casper-icon.js';
import '@polymer/paper-ripple/paper-ripple.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';

class CasperIconButton extends PolymerElement {

  static get properties () {
    return {
      /**
       * The name of the icon.
       *
       * @type {String}
       */
      icon: {
        type: String,
      },
      /**
       * Flag that states if the button is disabled or not.
       *
       * @type {Boolean}
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Flag that states if the button should not set its width automatically to fit the content when there's text.
       *
       * @type {Boolean}
       */
      disableTextAutoWidth: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Flag that reversed the current style of the button.
       *
       * @type {Boolean}
       */
      reverse: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Text that should appear on the button.
       *
       * @type {String}
       */
      text: {
        type: String,
        observer: '__textChanged'
      },
      /**
       * Flag that states if the button has text or is only an icon.
       *
       * @type {Boolean}
       */
      withText: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Flag that states if the button should have a border or not.
       *
       * @type {Boolean}
       */
      withBorder: {
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
          user-select: none;
          position: relative;
          align-items: center;
          justify-items: center;
          box-sizing: border-box;
          color: var(--casper-icon-button-color, var(--on-primary-color));
          background-color: var(--casper-icon-button-background-color, var(--primary-color));
          border: 1px solid var(--casper-icon-button-background-color, var(--primary-color));
        }

        :host([reverse]) {
          color: var(--casper-icon-button-background-color, var(--primary-color));
          background-color: var(--casper-icon-button-color, var(--on-primary-color));
        }

        :host([disabled]) {
          border: none;
          pointer-events: none;
          color: var(--disabled-text-color);
          background-color: var(--disabled-background-color);
        }

        :host([hidden]) {
          display: none;
        }

        :host([with-text]) {
          border-radius: 20px;
        }

        :host([with-text][disable-text-auto-width]) {
          display: flex;
          justify-content: center;
        }

        :host([with-text]:not([disable-text-auto-width])) {
          width: fit-content !important;
        }

        :host(:not([with-text])) {
          border-radius: 50%;
        }

        :host([with-text]) casper-icon {
          margin-right: 5px;
        }

        :host(:not([with-text])) casper-icon {
          width: 100%;
          height: 100%;
        }

        /* Hover styling */
        :host(:hover) {
          cursor: pointer;
          color: var(--casper-icon-button-background-color, var(--primary-color));
          background-color: var(--casper-icon-button-color, var(--on-primary-color));
        }

        :host([reverse]:hover) {
          color: var(--casper-icon-button-color, var(--on-primary-color));
          background-color: var(--casper-icon-button-background-color, var(--primary-color));
        }
      </style>

      <paper-ripple></paper-ripple>
      <casper-icon icon="[[icon]]" id="icon"></casper-icon>
      [[text]]
    `;
  }

  /**
   * This method gets invoked when the button's text changes.
   *
   * @param {String} text The button's text.
   */
  __textChanged (text) {
    this.withText = !!text;

    if (this.withText) {
      afterNextRender(this, () => {
        const elementComputedStyle = window.getComputedStyle(this);

        const iconDimensions = this.clientHeight - parseInt(elementComputedStyle.paddingBottom) - parseInt(elementComputedStyle.paddingTop);
        this.$.icon.style.width = `${iconDimensions}px`;
        this.$.icon.style.height = `${iconDimensions}px`;
      });
    } else {
      this.$.icon.removeAttribute('style');
    }
  }
}

window.customElements.define('casper-icon-button', CasperIconButton);