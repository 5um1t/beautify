import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './auth/auth.service';
import { cards } from './home-page/cards';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'beautfy';
  cardList = cards;
  constructor(private primengConfig: PrimeNGConfig, public auth: AuthService) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
