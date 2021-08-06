/*
  - Copyright (c) 2014-2021 Cloudware S.A. All rights reserved.
  -
  - This file is part of casper-icon.
  -
  - casper-icon is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as published by
  - the Free Software Foundation, either version 3 of the License, or
  - (at your option) any later version.
  -
  - casper-icon  is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with casper-icon.  If not, see <http://www.gnu.org/licenses/>.
  -
 */

import { LitElement, css, html } from 'lit';
import './casper-icon.js';
import 'ink-ripple/ink-ripple.js';

class CasperIconButton extends LitElement {

  static styles = css`
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
      background-color: var(--casper-icon-button-background-color, var(--primary-color, red));
      border: 1px solid var(--casper-icon-button-background-color, var(--primary-color, red));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    ink-ripple {
      --ink-ripple-accent-color: var(--dark-primary-color);
    }

    casper-icon {
      flex-shrink: 0;
    }

    :host([reverse]) {
      color: var(--casper-icon-button-background-color, var(--primary-color, red));
      background-color: var(--casper-icon-button-color, var(--on-primary-color, pink));
    }

    :host([disabled]) {
      border: none;
      pointer-events: none;
      color: var(--disabled-text-color);
      background-color: var(--disabled-background-color);
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([with-text]) {
      border-radius: 20px;
      width: auto;
    }

    :host([with-text][disable-text-auto-width]) {
      justify-content: center;
    }

    /*:host([with-text]:not([disable-text-auto-width])) {
      width: auto;
    }*/

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
    }`;

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
        reflect: true
      },
      /**
       * Flag that states if the button should not set its width automatically to fit the content when there's text.
       *
       * @type {Boolean}
       */
      disableTextAutoWidth: {
        type: Boolean,
        attribute: 'disable-text-auto-width',
        reflect: true
      },
      /**
       * Flag that reversed the current style of the button.
       *
       * @type {Boolean}
       */
      reverse: {
        type: Boolean,
        reflect: true
      },
      /**
       * Text that should appear on the button.
       *
       * @type {String}
       */
      text: {
        type: String,
        reflect: true
      },
      /**
       * Flag that states if the button has text or is only an icon.
       *
       * @type {Boolean}
       */
      withText: {
        type: Boolean,
        attribute: 'with-text',
        reflect: true
      },
      /**
       * Flag that states if the button should have a border or not.
       *
       * @type {Boolean}
       */
      withBorder: {
        type: Boolean,
        attribute: 'with-border',
        reflect: true
      }
    };
  }

  constructor () {
    super();
    this.disabled   = false;
    this.reverse    = false;
    this.withText   = false;
    this.withBorder = false;
    this.disableTextAutoWidth = false;
  }

  willUpdate (changedProperties) {
    if ( changedProperties.has('text') ) {
      this.withText = !! this.text;
      this.style.width = 'auto';
    }
  }

  render () {
    return html`
      <ink-ripple></ink-ripple>
      <casper-icon icon=${this.icon} id="icon"></casper-icon>
      ${this.text}
    `;
  }

  firstUpdated () {
    if ( this.disableTextAutoWidth ) {
      const elementComputedStyle = window.getComputedStyle(this);
      this.style.width  = elementComputedStyle['width'];
      this.style.height = elementComputedStyle['height'];  
    }
  }

}

window.customElements.define('casper-icon-button', CasperIconButton);