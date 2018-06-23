import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import * as anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  version: string;

  ngOnInit() {
    const { innerWidth: x, innerHeight: y } = window;

    const createdAt = dayjs(new Date('1997-10-07'));
    const updatedAt = dayjs();
    const years = updatedAt.diff(createdAt, 'year');
    const months = updatedAt.subtract(years, 'year').diff(createdAt, 'month');
    const days = updatedAt
      .subtract(years, 'year')
      .subtract(months, 'month')
      .diff(createdAt, 'day');
    this.version = [years, months, days].join('.');

    anime({
      targets: '.image',
      translateX: -x / 2,
      direction: 'reverse',
      easing: 'easeInOutQuart'
    });
  }
}
