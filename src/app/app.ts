import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './layout/main/main';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Main],
  template: `<app-main></app-main>`,
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('mi-proyecto-angular');
}

