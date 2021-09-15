/*
  - Copyright (c) 2014-2021 Cloudware S.A. All rights reserved.
  -
  - This file is part of casper-icons.
  -
  - casper-icons is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as published by
  - the Free Software Foundation, either version 3 of the License, or
  - (at your option) any later version.
  -
  - casper-icons  is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with casper-icons.  If not, see <http://www.gnu.org/licenses/>.
  -
 */

import { LitElement, html, css } from 'lit';
import './casper-icons.js';
import { CasperIcon } from './casper-icon.js';
import {repeat} from 'lit/directives/repeat.js';

/**
 * Helper to display a gallery of all registered icons, organized by set
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
      padding: 6px;
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

    h1 {
      margin: 0px;
      margin-top: 12px;
    }

    h2 {
      color: #888;
      margin: 0px;
      font-size: 14px;
    }

  `;

  constructor () {
    super();
    const iconSets = new Map();
    CasperIcon._registry.forEach( (svg, name) => {
      let [setName, icon] = name.split(':');
      if (!icon) setName = 'static';
      let iset = iconSets.get(setName);
      if ( !iset ) {
        iconSets.set(setName, []);
        iset = iconSets.get(setName);
      }
      iset.push(name);
    });
    this.iconSets = iconSets;
  }

  render () {
    return html`
      <div>
        ${repeat(this.iconSets.keys(), (iconSet) => html`
          <h1>${ iconSet != 'static' ? `Icon set: ${iconSet}` : `From /static/icons`}</h1>
          <h2>${this.iconSets.get(iconSet).length} icons</h2>
          <div class="gallery">
            ${repeat(this.iconSets.get(iconSet), (icon) => html`
              <div class="icon-box">
                <span>${this._nameHelper(icon)}</span>
                <casper-icon icon=${icon}></casper-icon>
              </div>`)
            }
          </div>`)}
      </div>
    `;
  }

  _nameHelper (name) {
    let [setName, iconName] = name.split(':');
    if ( iconName ) {
      return iconName;
    } else {
      return setName;
    }
  }

}

window.customElements.define('casper-icon-gallery', CasperIconGallery);