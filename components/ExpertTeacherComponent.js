import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

class ExpertTeacherComponent extends LitElement {
  static styles = css`
    section {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 40px;
      background-color: #1e255e;
      padding: 60px 40px;
      color: white;
    }

    .image-container {
      position: relative;
      flex: 1 1 400px;
      max-width: 450px;
    }

    .image-container img {
      width: 100%;
      border-radius: 12px;
    }

    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #ff8c00;
      color: white;
      border: none;
      border-radius: 50%;
      width: 70px;
      height: 70px;
      font-size: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .play-button:hover {
      background-color: #e67600;
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
      color: #ccc;
      margin-bottom: 20px;
    }

    .btn {
      background-color: #8e24aa;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 1rem;
      border-radius: 6px;
      cursor: pointer;
    }

    .btn:hover {
      background-color: #6a1b9a;
    }
  `;

  render() {
    return html`
      <section>
        <div class="image-container">
          <img src="./assets/images/col-md-6.png" alt="Expert Teacher">

          <button class="play-button" @click=${this.playVideo}>▶</button>
        </div>
        <div class="content">
          <h2>Our Expert Teachers</h2>
          <p>Learn from the best in the field. Our instructors are passionate professionals ready to share their knowledge with you.</p>
          <button class="btn">Learn More</button>
        </div>
      </section>
    `;
  }

  playVideo() {
    alert("Video is playing...");
  }
}

customElements.define('expert-teacher-component', ExpertTeacherComponent);
