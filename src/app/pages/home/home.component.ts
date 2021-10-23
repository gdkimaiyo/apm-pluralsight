import { Component, OnInit } from '@angular/core';
import {
  faArrowCircleUp
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrowUp = faArrowCircleUp;
  title = 'Angular: Getting Started';

  constructor() { }

  ngOnInit(): void {
  }

}
