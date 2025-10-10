class Footer extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../components/footer/footer.css'; 

    document.head.appendChild(link);
    
    this.innerHTML = `
    <footer>
        <p>© 2025 Explore Afghanistan | Designed by Mahfoza Sultani</p>
        <p><a href="../index.html">← Back to Home</a></p>
    </footer>
    `
  }
}

customElements.define('footer-component', Footer);