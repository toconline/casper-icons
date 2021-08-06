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

import { LitElement, css } from 'lit';
import { unsafeSVG }       from 'lit/directives/unsafe-svg.js';

/**
 * Little more than a glorified SVG element, with square aspect ratio,
 * that uses an in memory cache to keep a collection of often used SVG.
 * 
 * To improve loading performance of application's often used fa-awsome icons
 * are grouped into to three dynmically loaded predefined sets organized by icon family  
 */
export class CasperIcon extends LitElement {

  static get properties() {
    return {
      /**
       * The icon's name.
       *
       * @type {String}
       */
      icon: {
        type: String,
        reflect: true
      }
    };
  }

  static styles = css`
    :host {
      width: 18px;
      height: 18px;
      display: inline-flex;
    }

    :host([hidden]) {
      display: none !important;
    }

    svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      pointer-events: none;
    }
  `;
      
  /**
   * Global registry or cache of template literals tagged with lit's svg
   */
  static _registry = new Map();

  /**
   * Register an SVG lit template 
   * 
   * @param {String} name   full name of the icon attribute
   * @param {Object} svgTag SVG literal template tagged with lit's svg
   */
  static register (name, svgTag) {
    CasperIcon._registry.set(name, svgTag);
  }

  shouldUpdate (changedProperties) {
    if ( changedProperties.has('icon') ) {
      // fetch the SVG literal from the registry ...
      this._icon = CasperIcon._registry.get(this.icon); 

      if ( this._icon !== undefined ) {
        // ... we already have the icon in stock, let the update proceed ...
        return true; 
      } else {
        if ( !! this.icon && this.icon.length ) {
          // ... not found, trigger the async load process the stop this render ...
          this._lazyLoadIcon();
          return false;
        }
      }
    }
    return true;
  }

  render () {
    return this._icon;
  }

  async _lazyLoadIcon () {
    // first check if it belongs to a icon set ...
    const [iconSet, iconName] = this.icon.split(':');

    if ( iconName ) {
      // ... it's in a predefined set, so we need to import the set.
      try {       
        await import(`./casper-iconset-${iconSet}.js`);

        // ... if all goes well the set should have registered the new icon ...
        this._icon = CasperIcon._registry.get(this.icon);
        if ( ! this._icon ) {
          console.warn(`CasperIcon: there is no icon named '${iconName}' in the predefined set '${iconSet}'!!!`);
        }
      } catch (e) {
        // ... ignore just blank the icon ...
        this._icon = undefined;
        console.warn(`CasperIcon: loading of predefined set '${iconSet}' failed for icon named '${iconName}'!!!`);
      }
    } else {
      if ( !! this.icon ) {
        // ... the icon does not belong to a set, so it will be loaded from a SVG file ...
        const lazySvg = await fetch(`${this.icon[0] === '/' ? this.icon : `/static/icons/${this.icon}`}.svg`);
        if ( lazySvg.ok ) {
          this._icon = unsafeSVG(await lazySvg.text());
          CasperIcon.register(this.icon, this._icon);
        } else {
          // ... bummer, someone is screwing up here, the file does not exist where it should ...
          this._icon = undefined;
          console.warn(`CasperIcon: unable to load icon named '${this.icon}'`);
        }
      }
    }
    this.requestUpdate();
  }

}

window.customElements.define('casper-icon', CasperIcon);