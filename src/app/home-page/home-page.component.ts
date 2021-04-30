import { Component, OnInit } from '@angular/core';
import { cards } from './cards';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent implements OnInit {
  public cards = cards;

  constructor() {}

  ngOnInit(): void {}
}
