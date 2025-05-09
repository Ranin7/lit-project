import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

class HeroSectionComponent extends LitElement {
  static styles = css`
    section {
      background-color: #1e255e;
      color: white;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      padding: 60px 40px;
      gap: 40px;
    }

    .text-content {
      flex: 1 1 400px;
      max-width: 600px;
    }

    .text-content span {
      color: #9575cd;
      font-size: 0.9rem;
      font-weight: 600;
      display: block;
      margin-bottom: 10px;
    }

    .text-content h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      line-height: 1.2;
    }

    .text-content p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #cccccc;
      margin-bottom: 30px;
    }

    .buttons {
      display: flex;
      gap: 15px;
    }

    .btn-primary {
      background-color: #8e24aa;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn-primary:hover {
      background-color: #6a1b9a;
    }

    .btn-outline {
      background-color: transparent;
      color: white;
      border: 2px solid #8e24aa;
      padding: 12px 24px;
      font-size: 1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .btn-outline:hover {
      background-color: #8e24aa;
      color: white;
    }

    .image {
      flex: 1 1 400px;
      text-align: center;
    }

    .image img {
      width: 100%;
      max-width: 400px;
      height: auto;
    }

    @media (max-width: 768px) {
      section {
        flex-direction: column-reverse;
        text-align: center;
      }

      .buttons {
        justify-content: center;
      }
    }
  `;

  render() {
    return html`
      <section>
        <div class="text-content">
          <span>Welcome</span>
          <h1>Best Learning Opportunities</h1>
          <p>Every day brings with it a fresh set of learning possibilities.</p>
          <div class="buttons">
            <button class="btn-primary">Get Quote Now</button>
            <button class="btn-outline">Learn More</button>
          </div>
        </div>
        <div class="image">
          <img src="./assets/images/hero-image.png" alt="Hero" />
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section-component', HeroSectionComponent);
