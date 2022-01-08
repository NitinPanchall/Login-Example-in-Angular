import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-example';
  constructor() {
    localStorage.setItem("user", JSON.stringify([{ "firstName": "Nitin", "lastName": "Panchal", "username": "Nitin", "password": "123456", "id": 1 }]))
  }
}
