const footerTemplate = document.createElement('template');
const headerTemplade = document.createElement('template');

footerTemplate.innerHTML = `
<div class="footer-main">
<p class="footer-text"><a class="footer-link" href="https://vicharaka.iisc.ac.in/">IISc's Vicharaka Rover team</a></p>
</div>
`;

headerTemplade.innerHTML = `
<div class="header-main">
<img src="/img/logo-symbol-white-256.png" class="vicharaka_logo" width="50px">
<h2 class="header-text">Team Vicharaka</h2>
<div class="menu-icon" id="menu-icon">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
</div>
<ul class="menu" id="menu">
    <li><a href="/index.html">Home</a></li>
    <li><a href="pages/team.html">Team</a></li>
    <li><a href="pages/rover.html">Rover</a></li>
    <li><a href="/index.html#contact">Contact us</a></li>
</ul>
</div>`;

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