import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

class FooterComponent extends LitElement {
  static styles = css`
    footer {
      background-color: #1a1f3c;
      color: #ccc;
      padding: 40px 20px 20px;
      text-align: center;
    }

    .top {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
      margin-bottom: 20px;
    }

    .brand {
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;
    }

    .links {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .links a {
      color: #ccc;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.3s ease;
    }

    .links a:hover {
      color: #a78bfa;
    }

    .copyright {
      font-size: 0.85rem;
      color: #888;
    }
  `;

  render() {
    return html`
      <footer>
        <div class="top">
          <div class="brand">LearnPlatform</div>
          <div class="links">
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} LearnPlatform. All rights reserved.
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
