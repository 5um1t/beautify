import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { cards } from './home-page/cards';
import { ParallaxScrollComponent } from './parallax-scroll/parallax-scroll.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'beautfy';
  cardList = cards;
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
