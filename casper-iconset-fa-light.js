import './casper-iconset.js';

const template = document.createElement('template');
template.innerHTML =`
  <casper-iconset name="fa-light">
    <template id="clipboard">
      <svg viewBox="0 0 384 512">
        <path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"/>
      </svg>
    </template>

    <template id="arrow-left">
      <svg viewBox="0 0 448 512">
        <path d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"/>
      </svg>
    </template>

    <template id="arrow-right">
      <svg viewBox="0 0 448 512">
        <path d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"/>
      </svg>
    </template>

    <template id="minus">
      <svg viewBox="0 0 384 512">
        <path d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"/>
      </svg>
    </template>

    <template id="plus">
      <svg viewBox="0 0 384 512">
        <path d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"/>
      </svg>
    </template>

    <template id="print">
      <svg viewBox="0 0 512 512">
        <path d="M432 192h-16v-82.75c0-8.49-3.37-16.62-9.37-22.63L329.37 9.37c-6-6-14.14-9.37-22.63-9.37H126.48C109.64 0 96 14.33 96 32v160H80c-44.18 0-80 35.82-80 80v96c0 8.84 7.16 16 16 16h80v112c0 8.84 7.16 16 16 16h288c8.84 0 16-7.16 16-16V384h80c8.84 0 16-7.16 16-16v-96c0-44.18-35.82-80-80-80zM320 45.25L370.75 96H320V45.25zM128.12 32H288v64c0 17.67 14.33 32 32 32h64v64H128.02l.1-160zM384 480H128v-96h256v96zm96-128H32v-80c0-26.47 21.53-48 48-48h352c26.47 0 48 21.53 48 48v80zm-80-88c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24z"/>
      </svg>
    </template>

    <template id="bars">
      <svg viewBox="0 0 448 512">
        <path d="M442 114H6a6 6 0 01-6-6V84a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6z"/>
      </svg>
    </template>

    <template id="exclamation-triangle">
      <svg viewBox="0 0 576 512">
        <path d="M270.2 160h35.5c3.4 0 6.1 2.8 6 6.2l-7.5 196c-.1 3.2-2.8 5.8-6 5.8h-20.5c-3.2 0-5.9-2.5-6-5.8l-7.5-196c-.1-3.4 2.6-6.2 6-6.2zM288 388c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm281.5 52L329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.8 0 60-40 41.5-72zM528 480H48c-12.3 0-20-13.3-13.9-24l240-416c6.1-10.6 21.6-10.7 27.7 0l240 416c6.2 10.6-1.5 24-13.8 24z"/>
      </svg>
    </template>

    <template id="download">
      <svg viewBox="0 0 512 512">
        <path d="M452 432c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-84-20c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm144-48v104c0 24.3-19.7 44-44 44H44c-24.3 0-44-19.7-44-44V364c0-24.3 19.7-44 44-44h99.4L87 263.6c-25.2-25.2-7.3-68.3 28.3-68.3H168V40c0-22.1 17.9-40 40-40h96c22.1 0 40 17.9 40 40v155.3h52.7c35.6 0 53.4 43.1 28.3 68.3L368.6 320H468c24.3 0 44 19.7 44 44zm-261.7 17.7c3.1 3.1 8.2 3.1 11.3 0L402.3 241c5-5 1.5-13.7-5.7-13.7H312V40c0-4.4-3.6-8-8-8h-96c-4.4 0-8 3.6-8 8v187.3h-84.7c-7.1 0-10.7 8.6-5.7 13.7l140.7 140.7zM480 364c0-6.6-5.4-12-12-12H336.6l-52.3 52.3c-15.6 15.6-41 15.6-56.6 0L175.4 352H44c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12V364z"/>
      </svg>
    </template>

    <template id="file-archive">
      <svg viewBox="0 0 384 512">
        <path d="M128 96v32h32V96zm65.9 169.6c-1.1-5.6-6-9.6-11.8-9.6H160v-32h-32v32l-19.4 97.2c-6.5 32.5 18.3 62.8 51.4 62.8s57.9-30.3 51.4-62.8zm-33.6 124.5c-17.9 0-32.4-12.1-32.4-27s14.5-27 32.4-27 32.4 12.1 32.4 27-14.5 27-32.4 27zM128 160v32h32v-32zm64-96h-32v32h32zm177.9 33.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.4 2.1 7.4 4.2l83.9 83.9c2 2 3.5 4.6 4.2 7.4H256zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h79.7v32h32V32H224v104c0 13.3 10.7 24 24 24h104zM192 192h-32v32h32zm0-64h-32v32h32z"/>
      </svg>
    </template>

    <template id="file-pdf">
      <svg viewBox="0 0 384 512">
        <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z"/>
      </svg>
    </template>

    <template id="file-code">
      <svg viewBox="0 0 384 512">
        <path d="M369.941 97.941l-83.882-83.882A48 48 0 00252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 00-14.059-33.941zm-22.627 22.628a15.89 15.89 0 014.195 7.431H256V32.491a15.88 15.88 0 017.431 4.195l83.883 83.883zM336 480H48c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16h176v104c0 13.255 10.745 24 24 24h104v304c0 8.837-7.163 16-16 16zm-161.471-67.404l-25.928-7.527a5.1 5.1 0 01-3.476-6.32l58.027-199.869a5.1 5.1 0 016.32-3.476l25.927 7.527a5.1 5.1 0 013.476 6.32L180.849 409.12a5.1 5.1 0 01-6.32 3.476zm-48.446-47.674l18.492-19.724a5.101 5.101 0 00-.351-7.317L105.725 304l38.498-33.881a5.1 5.1 0 00.351-7.317l-18.492-19.724a5.1 5.1 0 00-7.209-.233L57.61 300.279a5.1 5.1 0 000 7.441l61.263 57.434a5.1 5.1 0 007.21-.232zm139.043.232l61.262-57.434a5.1 5.1 0 000-7.441l-61.262-57.434a5.1 5.1 0 00-7.209.233l-18.492 19.724a5.101 5.101 0 00.351 7.317L278.275 304l-38.499 33.881a5.1 5.1 0 00-.351 7.317l18.492 19.724a5.1 5.1 0 007.209.232z"/>
      </svg>
    </template>

    <template id="file-image">
      <svg viewBox="0 0 384 512">
        <path d="M159 336l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0l-39 39L63 448h256V304l-55.5-55.5c-4.7-4.7-12.3-4.7-17 0L159 336zm96-50.7l32 32V416H95.1l.3-67.2 15.6-15.6 48 48c20.3-20.3 77.7-77.6 96-95.9zM127 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-96c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm242.9-62.1L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304z"/>
      </svg>
    </template>

    <template id="file-alt">
      <svg viewBox="0 0 384 512">
        <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z"/>
      </svg>
    </template>

    <template id="lock">
      <svg viewBox="0 0 448 512">
        <path d="M400 224h-16v-62.5C384 73.1 312.9.3 224.5 0 136-.3 64 71.6 64 160v64H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM96 160c0-70.6 57.4-128 128-128s128 57.4 128 128v64H96v-64zm304 320H48c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16z"/>
      </svg>
    </template>

    <template id="unlock">
      <svg viewBox="0 0 384 512">
        <path d="M336 256H96v-96c0-70.6 25.4-128 96-128s96 57.4 96 128v20c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12v-18.5C320 73.1 280.9.3 192.5 0 104-.3 64 71.6 64 160v96H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm16 208c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v160z"/>
      </svg>
    </template>

    <template id="calculator-alt">
      <svg viewBox="0 0 480 512">
        <path d="M72 160h112c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm5.09 247.6l11.31 11.31c3.12 3.12 8.19 3.12 11.31 0L128 390.63l28.29 28.29c3.12 3.12 8.19 3.12 11.31 0l11.31-11.31c3.12-3.12 3.12-8.19 0-11.31L150.63 368l28.29-28.29c3.12-3.12 3.12-8.19 0-11.31l-11.31-11.31c-3.12-3.12-8.19-3.12-11.31 0L128 345.37l-28.29-28.29c-3.12-3.12-8.19-3.12-11.31 0L77.09 328.4c-3.12 3.12-3.12 8.19 0 11.31L105.37 368l-28.29 28.28a8.006 8.006 0 00.01 11.32zM448 16H32C14.33 16 0 30.33 0 48v416c0 17.67 14.33 32 32 32h416c17.67 0 32-14.33 32-32V48c0-17.67-14.33-32-32-32zM224 464H32V272h192v192zm0-224H32V48h192v192zm224 224H256V272h192v192zm0-224H256V48h192v192zm-152-80h40v40c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-40h40c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-40V88c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v40h-40c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm0 256h112c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H296c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm0-64h112c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H296c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z"/>
      </svg>
    </template>

    <template id="edit">
      <svg viewBox="0 0 576 512">
        <path d="M417.8 315.5l20-20c3.8-3.8 10.2-1.1 10.2 4.2V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h292.3c5.3 0 8 6.5 4.2 10.2l-20 20c-1.1 1.1-2.7 1.8-4.2 1.8H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V319.7c0-1.6.6-3.1 1.8-4.2zm145.9-191.2L251.2 436.8l-99.9 11.1c-13.4 1.5-24.7-9.8-23.2-23.2l11.1-99.9L451.7 12.3c16.4-16.4 43-16.4 59.4 0l52.6 52.6c16.4 16.4 16.4 43 0 59.4zm-93.6 48.4L403.4 106 169.8 339.5l-8.3 75.1 75.1-8.3 233.5-233.6zm71-85.2l-52.6-52.6c-3.8-3.8-10.2-4-14.1 0L426 83.3l66.7 66.7 48.4-48.4c3.9-3.8 3.9-10.2 0-14.1z"/>
      </svg>
    </template>

    <template id="envelope">
      <svg viewBox="0 0 512 512">
        <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"/>
      </svg>
    </template>

    <template id="cog">
      <svg viewBox="0 0 512 512">
        <path d="M482.696 299.276l-32.61-18.827a195.168 195.168 0 000-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 00-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 00-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 000 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0042.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0042.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 01-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0187.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"/>
      </svg>
    </template>

    <template id="thumbtack">
      <svg viewBox="0 0 384 512">
        <path d="M300.8 203.9L290.7 128H328c13.2 0 24-10.8 24-24V24c0-13.2-10.8-24-24-24H56C42.8 0 32 10.8 32 24v80c0 13.2 10.8 24 24 24h37.3l-10.1 75.9C34.9 231.5 0 278.4 0 335.2c0 8.8 7.2 16 16 16h160V472c0 .7.1 1.3.2 1.9l8 32c2 8 13.5 8.1 15.5 0l8-32c.2-.6.2-1.3.2-1.9V351.2h160c8.8 0 16-7.2 16-16 .1-56.8-34.8-103.7-83.1-131.3zM33.3 319.2c6.8-42.9 39.6-76.4 79.5-94.5L128 96H64V32h256v64h-64l15.3 128.8c40 18.2 72.7 51.8 79.5 94.5H33.3z"/>
      </svg>
    </template>

    <template id="repeat">
      <svg viewBox="0 0 512 512">
        <path d="M512 256c0 88.225-71.775 160-160 160H110.628l68.201 68.201c4.686 4.686 4.686 12.284 0 16.971l-5.656 5.656c-4.686 4.686-12.284 4.686-16.971 0l-98.343-98.343c-4.686-4.686-4.686-12.284 0-16.971l98.343-98.343c4.686-4.686 12.284-4.686 16.971 0l5.656 5.656c4.686 4.686 4.686 12.284 0 16.971L110.628 384H352c70.579 0 128-57.421 128-128 0-28.555-9.403-54.952-25.271-76.268-3.567-4.792-3.118-11.462 1.106-15.686l5.705-5.705c5.16-5.16 13.678-4.547 18.083 1.271C499.935 186.438 512 219.835 512 256zM57.271 332.268C41.403 310.952 32 284.555 32 256c0-70.579 57.421-128 128-128h241.372l-68.201 68.201c-4.686 4.686-4.686 12.284 0 16.971l5.656 5.656c4.686 4.686 12.284 4.686 16.971 0l98.343-98.343c4.686-4.686 4.686-12.284 0-16.971L355.799 5.172c-4.686-4.686-12.284-4.686-16.971 0l-5.656 5.656c-4.686 4.686-4.686 12.284 0 16.971L401.372 96H160C71.775 96 0 167.775 0 256c0 36.165 12.065 69.562 32.376 96.387 4.405 5.818 12.923 6.432 18.083 1.271l5.705-5.705c4.225-4.224 4.674-10.893 1.107-15.685z"/>
      </svg>
    </template>

    <template id="calendar">
      <svg viewBox="0 0 448 512">
        <path d="M400 64h-48V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H128V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM48 96h352c8.822 0 16 7.178 16 16v48H32v-48c0-8.822 7.178-16 16-16zm352 384H48c-8.822 0-16-7.178-16-16V192h384v272c0 8.822-7.178 16-16 16z"/>
      </svg>
    </template>

    <template id="trash-alt">
      <svg viewBox="0 0 448 512">
        <path d="M296 432h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zm-160 0h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zM440 64H336l-33.6-44.8A48 48 0 00264 0h-80a48 48 0 00-38.4 19.2L112 64H8a8 8 0 00-8 8v16a8 8 0 008 8h24v368a48 48 0 0048 48h288a48 48 0 0048-48V96h24a8 8 0 008-8V72a8 8 0 00-8-8zM171.2 38.4A16.1 16.1 0 01184 32h80a16.1 16.1 0 0112.8 6.4L296 64H152zM384 464a16 16 0 01-16 16H80a16 16 0 01-16-16V96h320zm-168-32h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8z"/>
      </svg>
    </template>
  </casper-iconset>
`;

document.head.appendChild(template.content);
