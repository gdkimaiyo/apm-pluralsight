import { Component } from '@angular/core';
import {
  faArrowCircleUp
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arrowUp = faArrowCircleUp;
  title = 'Angular: Getting Started';

  constructor() { }

  ngOnInit(): void {
  }

}
