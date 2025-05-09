import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

class HeaderComponent extends LitElement {
  static styles = css`
    header {
      background-color: #1e255e;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 40px;
      flex-wrap: wrap;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

    nav {
      display: flex;
      gap: 20px;
    }

    nav a {
      color: white;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    nav a:hover {
      color: #b39ddb;
    }

    .right-actions {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .login {
      color: white;
      background: none;
      border: none;
      font-size: 1rem;
      cursor: pointer;
    }

    .join {
      background-color: #8e24aa;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .join:hover {
      background-color: #6a1b9a;
    }

    @media (max-width: 768px) {
      header {
        flex-direction: column;
        gap: 15px;
      }
    }
  `;

  render() {
    return html`
      <header>
        <div class="logo">BrandName</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
        <div class="right-actions">
          <button class="login">Login</button>
          <button class="join">JOIN US</button>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
