import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

class ClientsComponent extends LitElement {
  static styles = css`
    section {
      background-color: #1e255e;
      padding: 60px 40px;
      color: white;
      text-align: center;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 40px;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 30px;
    }

    .card {
      background-color: #2c3570;
      border-radius: 10px;
      padding: 30px 20px;
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .icon {
      font-size: 2rem;
      color: #ff8c00;
      margin-bottom: 15px;
    }

    .card-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .card-text {
      font-size: 0.95rem;
      color: #ccc;
    }
  `;

  render() {
    return html`
      <section>
        <h2>Every Client Matters</h2>
        <div class="cards">
          <div class="card">
            <div class="icon">📚</div>
            <div class="card-title">Flexible Learning</div>
            <div class="card-text">Study at your own pace with our flexible programs.</div>
          </div>
          <div class="card">
            <div class="icon">💼</div>
            <div class="card-title">Career Focused</div>
            <div class="card-text">Courses designed to get you job-ready fast.</div>
          </div>
          <div class="card">
            <div class="icon">🌍</div>
            <div class="card-title">Global Access</div>
            <div class="card-text">Join from anywhere in the world with online support.</div>
          </div>
          <div class="card">
            <div class="icon">🤝</div>
            <div class="card-title">Community Support</div>
            <div class="card-text">Be part of a learning community that supports you.</div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('clients-component', ClientsComponent);
