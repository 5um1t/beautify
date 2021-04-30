import {
  Component,
  ChangeDetectionStrategy,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { PrimeNGConfig } from 'primeng/api';
import { cards } from './home-page/cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'beautfy';
  options: AnimationOptions = {
    path: '/assets/animation.json',
  };
  cardList = cards;
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
