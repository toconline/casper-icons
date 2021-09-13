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

import { LitElement, html, css } from 'lit';
import './casper-icons.js';
import { CasperIcon } from './casper-icon.js';
import {repeat} from 'lit/directives/repeat.js';

/**
 * Little more than a glorified SVG element, with square aspect ratio,
 * that uses an in memory cache to keep a collection of often used SVG.
 * 
 * To improve loading performance of application's often used fa-awsome icons
 * are grouped into to three dynmically loaded predefined sets organized by icon family  
 */
export class CasperIconGallery extends LitElement {

  static styles = css`

    :host {
      color: var(--dark-primary-color,#4056A2);
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, 200px);
      column-gap: 10px;
      row-gap: 10px;
    }

    .icon-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--dark-primary-color,#4056A2);
      padding: 15px 30px;
      border: solid 1px #ccc;
      border-radius: 20px;
      font-size: 12px;
      font-weight: bold;
    }

    .icon-box casper-icon {
      width:  80px;
      height: 80px;
      padding-top: 5px;
      color: var(--primary-color,#5C92CD);
      flex-align: end;
    }

  `;

  constructor () {
    super();
    const iconset = new Map();
    CasperIcon._registry.forEach( (svg, name) => {
      let [setName, icon] = name.split(':');
      if (!icon) setName = 'default';
      let iset = iconset.get(setName);
      if ( !iset ) {
        iconset.set(setName, []);
        iset = iconset.get(setName);
      }
      iset.push(name);
    });
    this.iconset = iconset;
  }

  render () {
    return html`
      <div>
        ${repeat(this.iconset.keys(), (iconSet) => html`
          <h1>Icon set: ${iconSet}</h1>
          <div class="gallery">
            ${repeat(this.iconset.get(iconSet), (icon) => html`
              <div class="icon-box">
                <span>${icon.split(':')[1]}</span>
                <casper-icon icon=${icon}></casper-icon>
              </div>`)
            }
          </div>`)}
      </div>
    `;
  }
}

window.customElements.define('casper-icon-gallery', CasperIconGallery);

