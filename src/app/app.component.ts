import { Component } from '@angular/core';
import { cards } from './home-page/cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'beautfy';

  cardList = cards;
  constructor() {}

  ngOnInit() {}
}
