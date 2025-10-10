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
        <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('header-component', Header);
