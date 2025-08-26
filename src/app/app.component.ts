import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './parts/header/header.component';
import {FooterComponent} from './parts/footer/footer.component';
import axios from 'axios';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'anguraid';

  constructor() {
    axios.defaults.baseURL = `http://localhost:3000`;
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  }
}
