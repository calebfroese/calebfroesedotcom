import { Component, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  sliders = new Array(4);
  ngAfterViewInit() {
    const { innerHeight: y } = window;
    anime({
      targets: '.slider',
      duration: (_, i) => 500 + i * 300,
      delay: (_, i) => (this.sliders.length - i) * 500,
      translateY: y,
      easing: 'easeInCubic'
    });
  }
}
