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
      targets: '.image',
      translateY: -y / 3,
      rotateX: '0.02turn',
      direction: 'reverse',
      duration,
      easing: 'easeInOutBack'
    });
    anime({
      targets: '.image-abstract',
      translateY: y / 3,
      rotateX: '-0.02turn',
      direction: 'reverse',
      duration,
      easing: 'easeInOutBack'
    });
  }
}
