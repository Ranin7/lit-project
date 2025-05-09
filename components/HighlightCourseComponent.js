import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

class HighlightCourseComponent extends LitElement {
  static styles = css`
    section {
      background-color: #f3e5f5;
      color: #1e255e;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 60px 40px;
      gap: 40px;
    }

    .image {
      flex: 1 1 400px;
      max-width: 450px;
    }

    .image img {
      width: 100%;
      border-radius: 12px;
    }

    .content {
      flex: 1 1 400px;
      max-width: 500px;
    }

    .content h2 {
      font-size: 2rem;
      margin-bottom: 20px;
    }

    .content p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #333;
      margin-bottom: 20px;
    }

    .btn {
      background-color: #8e24aa;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn:hover {
      background-color: #6a1b9a;
    }

    @media (max-width: 768px) {
      section {
        flex-direction: column;
        text-align: center;
      }
    }
  `;

  render() {
    return html`
      <section>
        <div class="image">
          <img src="./assets/images/highlight-girl.png" alt="Highlight">

        </div>
        <div class="content">
          <h2>Our Popular Courses</h2>
          <p>Discover the best courses loved by thousands of students worldwide. Build skills that help you grow and succeed.</p>
          <button class="btn">Get Started</button>
        </div>
      </section>
    `;
  }
}

customElements.define('highlight-course-component', HighlightCourseComponent);
