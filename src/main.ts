import { bootstrapApplication } from '@angular/platform-browser';
import { Main } from './app/layout/main/main';

bootstrapApplication(Main)
  .catch((err) => console.error(err));

