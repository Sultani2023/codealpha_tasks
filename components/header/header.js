class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Add external CSS for the header
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../components/header/header.css';
    document.head.appendChild(link);

    // Minimal nav HTML
    this.innerHTML = `
<nav>
  <h1>Explore Afghanistan</h1>

  <div class="menu-toggle" id="menu-toggle">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <ul id="nav-links">
    <li><a href="../index.html">Home</a></li>
    <li><a href="../about.html">About</a></li>
    <li><a href="./services.html">Services</a></li>
    <li><a href="./contactUs.html">Contact</a></li>
  </ul>
</nav>


    `;
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }
}

customElements.define('header-component', Header);
