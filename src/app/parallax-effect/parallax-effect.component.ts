import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';

@Component({
  selector: 'app-parallax-effect',
  templateUrl: './parallax-effect.component.html',
  styleUrls: ['./parallax-effect.component.sass'],
})
export class ParallaxEffectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var image = document.getElementsByClassName('parallax');
    new simpleParallax(image, {
      scale: 1.5,
      overflow: false,
      orientation: 'up',
    });
  }
}
