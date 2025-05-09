import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

class NewsletterComponent extends LitElement {
  static styles = css`
    section {
      background-color: #2c3570;
      color: white;
      padding: 60px 40px;
      text-align: center;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    p {
      color: #ccc;
      font-size: 1rem;
      margin-bottom: 30px;
    }

    form {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
    }

    input[type="email"] {
      padding: 12px 16px;
      border-radius: 6px;
      border: none;
      width: 280px;
      font-size: 1rem;
    }

    button {
      background-color: #8e24aa;
      color: white;
      border: none;
      padding: 12px 20px;
      font-size: 1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #6a1b9a;
    }
  `;

  render() {
    return html`
      <section>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest courses, offers, and more!</p>
        <form @submit=${this.subscribe}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    `;
  }

  subscribe(e) {
    e.preventDefault();
    const input = this.renderRoot.querySelector('input[type="email"]');
    if (input.value) {
      alert(`Subscribed with: ${input.value}`);
      input.value = '';
    }
  }
}

customElements.define('newsletter-component', NewsletterComponent);
