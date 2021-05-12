import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';
@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.sass'],
})
export class ParallaxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image);
  }
}
