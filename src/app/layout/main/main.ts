import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [Header, Footer],
  template: `
    <app-header></app-header>

    <div id="main">
      <!-- Intro Section -->
      <article id="intro">
        <h2 class="major">Intro</h2>
        <span class="image main">
          <img src="assets/images/pic01.jpg" alt="Intro Image" />
        </span>
        <p>
          Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante
          interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet
          egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis.
          Etiam tristique libero eu nibh porttitor fermentum.
        </p>
      </article>

      <!-- Work Section -->
      <article id="work">
        <h2 class="major">Work</h2>
        <span class="image main">
          <img src="assets/images/pic02.jpg" alt="Work Image" />
        </span>
        <p>
          Describe aquí tus proyectos o trabajos destacados.
        </p>
      </article>

      <!-- About Section -->
      <article id="about">
        <h2 class="major">About</h2>
        <span class="image main">
          <img src="assets/images/pic03.jpg" alt="About Image" />
        </span>
        <p>
          Información sobre ti o sobre el proyecto.
        </p>
      </article>

      <!-- Contact Section -->
      <article id="contact">
        <h2 class="major">Contact</h2>
        <p>
          Aquí puedes poner un formulario de contacto o información para que te contacten.
        </p>
      </article>
    </div>

    <app-footer></app-footer>
  `,
  styleUrls: ['./main.scss']
})
export class Main {}




