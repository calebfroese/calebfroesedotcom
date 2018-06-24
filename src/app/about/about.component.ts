import { Component, OnInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    const { innerWidth: x, innerHeight: y } = window;
    const duration = 2000;
    anime({
      targets: '.about',
      scale: 0.4,
      direction: 'reverse',
      duration,
      easing: 'easeInOutQuart'
    });
    anime({
      targets: '.image',
      translateY: -y / 2,
      rotateX: '0.05turn',
      direction: 'reverse',
      duration,
      easing: 'easeInOutQuart'
    });
    anime({
      targets: '.image-abstract',
      translateY: y / 2,
      rotateX: '-0.05turn',
      direction: 'reverse',
      duration,
      easing: 'easeInOutQuart'
    });
  }
}