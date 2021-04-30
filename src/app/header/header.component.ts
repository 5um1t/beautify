import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  public options: AnimationOptions = {
    path: '/assets/lottie/cart.json',
  };

  constructor() {}

  ngOnInit(): void {}
}
