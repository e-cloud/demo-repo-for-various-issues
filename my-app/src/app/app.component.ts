import { Component } from '@angular/core';
const imgUrl = require('../assets/angular.png')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  logoUrl = imgUrl;
}
