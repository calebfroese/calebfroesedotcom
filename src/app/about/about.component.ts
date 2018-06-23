import { Component, OnInit } from '@angular/core';
import * as anime from 'animejs';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
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
