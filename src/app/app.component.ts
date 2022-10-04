import { Component, ElementRef, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  odd = true;
  item = [1, 2, 3, 4, 5];
  constructor() {}
}
