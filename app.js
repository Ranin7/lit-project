import { LitElement, html, css } from 'https://unpkg.com/lit@3/index.js?module';

// Import all components
import './components/HeaderComponent.js';
import './components/HeroSectionComponent.js';
import './components/StatisticsComponent.js';
import './components/ExpertTeacherComponent.js';
import './components/ClientsComponent.js';
import './components/PopularCoursesComponent.js';
import './components/HighlightCourseComponent.js';
import './components/TestimonialsComponent.js';
import './components/TeamComponent.js';
import './components/NewsletterComponent.js';
import './components/FooterComponent.js';

class MainApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Arial', sans-serif;
      background-color: #1e255e;
      color: white;
    }
  `;

  render() {
    return html`
      <header-component></header-component>
      <hero-section-component></hero-section-component>
      <statistics-component></statistics-component>
      <expert-teacher-component></expert-teacher-component>
      <clients-component></clients-component>
      <popular-courses-component></popular-courses-component>
      <highlight-course-component></highlight-course-component>
      <testimonials-component></testimonials-component>
      <team-component></team-component>
      <newsletter-component></newsletter-component>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('main-app', MainApp);
