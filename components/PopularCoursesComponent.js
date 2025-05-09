import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

class PopularCoursesComponent extends LitElement {
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

    .courses {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 30px;
    }

    .card {
      background-color: #2c3570;
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    .card-body {
      padding: 20px;
    }

    .title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .description {
      font-size: 0.95rem;
      color: #ccc;
      margin-bottom: 15px;
    }

    .price {
      font-size: 1rem;
      font-weight: bold;
      color: #a78bfa;
    }

    .enroll-btn {
      margin-top: 15px;
      background-color: #8e24aa;
      color: white;
      border: none;
      padding: 10px;
      font-size: 1rem;
      width: 100%;
      border-radius: 6px;
      cursor: pointer;
    }

    .enroll-btn:hover {
      background-color: #6a1b9a;
    }
  `;

  static properties = {
    courses: { type: Array },
  };

  constructor() {
    super();
    this.courses = [
      {
        title: 'Web Development',
        description: 'Learn HTML, CSS, and JavaScript from scratch.',
        price: '$29',
        image: './assets/1-image.jpg'
      },
      {
        title: 'Graphic Design',
        description: 'Master Photoshop and Illustrator.',
        price: '$35',
        image: './assets/images/2-image.jpg'
      },
      {
        title: 'Data Science',
        description: 'Python, Pandas, and Machine Learning.',
        price: '$49',
        image: './assets/images/3-image.jpg'
      },
      {
        title: 'Marketing Fundamentals',
        description: 'SEO, Social Media & More.',
        price: '$19',
        image: './assets/images/4-image.jpg'
      }
    ];
  }

  render() {
    return html`
      <section>
        <h2>Most Popular Courses</h2>
        <div class="courses">
          ${this.courses.map(course => html`
            <div class="card">
              <img src="${course.image}" alt="${course.title}" />
              <div class="card-body">
                <div class="title">${course.title}</div>
                <div class="description">${course.description}</div>
                <div class="price">${course.price}</div>
                <button class="enroll-btn">Enroll Now</button>
              </div>
            </div>
          `)}
        </div>
      </section>
    `;
  }
}

customElements.define('popular-courses-component', PopularCoursesComponent);
