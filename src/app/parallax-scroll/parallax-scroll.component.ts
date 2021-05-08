import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';
@Component({
  selector: 'app-parallax-scroll',
  templateUrl: './parallax-scroll.component.html',
  styleUrls: ['./parallax-scroll.component.sass'],
})
export class ParallaxScrollComponent implements OnInit {
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
