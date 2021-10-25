import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  circleIcon = faCircle;
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
