import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

class StatisticsComponent extends LitElement {
  static styles = css`
    section {
      background-color: #1e255e;
      padding: 60px 40px;
      text-align: center;
      color: white;
    }

    .stats-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
    }

    .stat-box {
      min-width: 160px;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: bold;
      color: #a78bfa; /* purple tone */
      margin-bottom: 10px;
    }

    .stat-label {
      font-size: 1rem;
      color: #cccccc;
    }

    @media (max-width: 768px) {
      .stat-box {
        flex: 1 1 100%;
      }
    }
  `;

  render() {
    return html`
      <section>
        <div class="stats-container">
          <div class="stat-box">
            <div class="stat-number">15K</div>
            <div class="stat-label">Happy Customers</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">150K</div>
            <div class="stat-label">Monthly Visitors</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">15</div>
            <div class="stat-label">Countries Worldwide</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">100+</div>
            <div class="stat-label">Top Partners</div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('statistics-component', StatisticsComponent);
