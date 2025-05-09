import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

class TeamComponent extends LitElement {
  static styles = css`
    section {
      background-color: #f3e5f5;
      color: #1e255e;
      padding: 60px 40px;
      text-align: center;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 40px;
    }

    .team {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 30px;
    }

    .member {
      background-color: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .member:hover {
      transform: translateY(-5px);
    }

    .member img {
      width: 100%;
      height: 240px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 15px;
    }

    .name {
      font-weight: bold;
      font-size: 1.1rem;
    }

    .role {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 10px;
    }

    .socials {
      display: flex;
      justify-content: center;
      gap: 10px;
    }

    .socials a {
      color: #8e24aa;
      font-size: 1.2rem;
      text-decoration: none;
      transition: color 0.2s;
    }

    .socials a:hover {
      color: #6a1b9a;
    }
  `;

  static properties = {
    team: { type: Array },
  };

  constructor() {
    super();
    this.team = [
      {
        name: 'Rami Hassan',
        role: 'Web Developer',
        image: './assets/images/user-cover-2.png',
        socials: {
          linkedin: '#',
          twitter: '#'
        }
      },
      {
        name: 'Dana Youssef',
        role: 'UX Designer',
        image: './assets/images/user-cover-1.png',
        socials: {
          linkedin: '#',
          twitter: '#'
        }
      },
      {
        name: 'Khaled Omar',
        role: 'Instructor',
        image: './assets/images/fixed-height sec-.png',
        socials: {
          linkedin: '#',
          twitter: '#'
        }
      }
    ];
  }

  render() {
    return html`
      <section>
        <h2>Meet Our Team</h2>
        <div class="team">
          ${this.team.map(
            (member) => html`
              <div class="member">
                <img src="${member.image}" alt="${member.name}" />
                <div class="name">${member.name}</div>
                <div class="role">${member.role}</div>
                <div class="socials">
                  <a href="${member.socials.linkedin}" target="_blank">🔗</a>
                  <a href="${member.socials.twitter}" target="_blank">🐦</a>
                </div>
              </div>
            `
          )}
        </div>
      </section>
    `;
  }
}

customElements.define('team-component', TeamComponent);
