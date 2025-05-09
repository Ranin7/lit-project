import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

class TestimonialsComponent extends LitElement {
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

    .reviews {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 30px;
    }

    .card {
      background-color: #2c3570;
      border-radius: 12px;
      padding: 20px;
      text-align: left;
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .profile {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 15px;
    }

    .profile img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .name {
      font-weight: bold;
    }

    .job {
      font-size: 0.85rem;
      color: #ccc;
    }

    .text {
      font-size: 0.95rem;
      color: #ddd;
      line-height: 1.5;
    }

    .stars {
      color: #ffca28;
      margin-top: 10px;
    }
  `;

  static properties = {
    reviews: { type: Array }
  };

  constructor() {
    super();
    this.reviews = [
      {
        name: 'Sarah Ali',
        job: 'UX Designer',
        image: 'https://i.ibb.co/vJvbjT9/user1.jpg',
        text: 'This platform really helped me build a strong portfolio and improve my design thinking!',
        rating: 5
      },
      {
        name: 'Omar Nasser',
        job: 'Data Analyst',
        image: 'https://i.ibb.co/gTzdkzD/user2.jpg',
        text: 'Thanks to their courses, I landed my dream job at a tech company!',
        rating: 4
      },
      {
        name: 'Lina Hassan',
        job: 'Marketing Lead',
        image: 'https://i.ibb.co/JHyRxsh/user3.jpg',
        text: 'The learning experience is smooth, flexible, and full of value.',
        rating: 5
      }
    ];
  }

  renderStars(count) {
    return html`${'⭐'.repeat(count)}`;
  }

  render() {
    return html`
      <section>
        <h2>Get Quality Education</h2>
        <div class="reviews">
          ${this.reviews.map(
            (r) => html`
              <div class="card">
                <div class="profile">
                  <img src="${r.image}" alt="${r.name}" />
                  <div>
                    <div class="name">${r.name}</div>
                    <div class="job">${r.job}</div>
                  </div>
                </div>
                <div class="text">${r.text}</div>
                <div class="stars">${this.renderStars(r.rating)}</div>
              </div>
            `
          )}
        </div>
      </section>
    `;
  }
}

customElements.define('testimonials-component', TestimonialsComponent);
