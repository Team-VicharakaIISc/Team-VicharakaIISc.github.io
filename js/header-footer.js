const footerTemplate = document.createElement('template');
const headerTemplade = document.createElement('template');

footerTemplate.innerHTML = ``;
headerTemplade.innerHTML = ``;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = footerTemplate.innerHTML;
  }
}

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = headerTemplade.innerHTML;
  }
}

customElements.define('footer-component', Footer);
customElements.define('header-component', Header);