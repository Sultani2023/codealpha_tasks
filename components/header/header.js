class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // --- Detect correct path dynamically ---
    const depth = window.location.pathname.split("/").length;
    const isSubPage = depth > 3; // e.g., /provinces/kabul.html has 4 segments
    const basePath = isSubPage ? "../" : "./";

    // --- Load the header CSS dynamically ---
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${basePath}components/header/header.css`;
    document.head.appendChild(link);

    // --- Insert header HTML ---
    this.innerHTML = `
      <nav>
        <h1>Explore Afghanistan</h1>

        <div class="menu-toggle" id="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul id="nav-links">
          <li><a href="${basePath}index.html">Home</a></li>
          <li><a href="${basePath}about.html">About</a></li>
          <li><a href="${basePath}services.html">Services</a></li>
          <li><a href="${basePath}contactUs.html">Contact</a></li>
        </ul>
      </nav>
    `;

    // --- Menu toggle logic ---
    const menuToggle = this.querySelector("#menu-toggle");
    const navLinks = this.querySelector("#nav-links");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }
}

customElements.define("header-component", Header);
