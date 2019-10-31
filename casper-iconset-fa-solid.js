import './casper-iconset.js';

const template = document.createElement('template');
template.innerHTML =`
  <casper-iconset name="fa-solid">
    <template id="sort">
      <svg viewBox="0 0 320 512">
        <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"/>
      </svg>
    </template>

    <template id="sort-down">
      <svg viewBox="0 0 320 512">
        <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"/>
      </svg>
    </template>

    <template id="sort-up">
      <svg viewBox="0 0 320 512">
        <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"/>
      </svg>
    </template>

    <template id="caret-right">
      <svg viewBox="0 0 192 512">
        <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"/>
      </svg>
    </template>
  </casper-iconset>
`;

document.head.appendChild(template.content);
