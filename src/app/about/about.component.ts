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
    anime({
      targets: '.image',
      translateX: -x / 2,
      direction: 'reverse',
      easing: 'easeInOutQuart'
    });
  }
}
