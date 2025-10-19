class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Add external CSS for footer
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../components/footer/footer.css';
    document.head.appendChild(link);

    // Insert footer HTML
    this.innerHTML = `
      <footer>
        <p>© 2025 Explore Afghanistan | Designed by Mahfoza Sultani</p>

        <div class="footer-buttons">
          <a href="../index.html" class="home-btn"> ← Back to Home</a>
          <button id="back-to-top" class="back-to-top" title="Back to Top">↑</button>
        </div>
      </footer>
    `;

    // === Back to Top logic ===
    const backToTopBtn = this.querySelector('#back-to-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

customElements.define('footer-component', Footer);
