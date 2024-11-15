import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <div class="profile-container">
      <div class="profile-navbar">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <img src="https://via.placeholder.com/30?text=F" alt="Facebook">
        </a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <img src="https://via.placeholder.com/30?text=L" alt="LinkedIn">
        </a>
        <a href="https://github.com" target="_blank" aria-label="GitHub">
          <img src="https://via.placeholder.com/30?text=G" alt="GitHub">
        </a>
      </div>
      <div class="profile-header">
        <div class="profile-info">
          <h2>José Arturo</h2>
          <p class="profile-title">Programador Web</p>
          <p class="profile-email">admin&#64;gmail.com</p>
        </div>
      </div>
      <div class="profile-about">
        <h3>Acerca de mí</h3>
        <p>
          Soy un programador web graduado del Instituto Tecnológico de Oaxaca con más de 4 años de experiencia en desarrollo web y backend.
          Me apasiona la tecnología, la programación y el diseño de soluciones innovadoras.
        </p>
      </div>
      <div class="profile-skills">
        <h3>Habilidades</h3>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>MySQL</li>
          <li>Oracle</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      max-width: 900px;
      margin: 40px auto;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      background: linear-gradient(to right, #f8fafc, #e0e7ff);
      color: #333;
      font-family: Arial, sans-serif;
    }

    .profile-navbar {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }

    .profile-navbar a {
      margin: 0 15px;
      display: inline-block;
      transition: transform 0.3s ease;
    }

    .profile-navbar a:hover {
      transform: scale(1.1);
    }

    .profile-navbar img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    .profile-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .profile-info h2 {
      margin: 0;
      font-size: 36px;
      color: #2b2b2b;
    }

    .profile-title {
      margin: 5px 0;
      font-size: 20px;
      color: #5a67d8;
    }

    .profile-email {
      color: #555;
      font-size: 16px;
    }

    .profile-about,
    .profile-skills {
      margin-bottom: 20px;
      text-align: center;
    }

    .profile-about h3,
    .profile-skills h3 {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }

    .profile-about p {
      font-size: 18px;
      color: #444;
      line-height: 1.6;
      max-width: 750px;
      margin: 0 auto;
    }

    .profile-skills ul {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
    }

    .profile-skills li {
      background: #5a67d8;
      color: #fff;
      padding: 10px 15px;
      border-radius: 5px;
      font-size: 16px;
    }
  `]
})
export class ProfileComponent {}
