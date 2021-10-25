import { Component, OnInit } from '@angular/core';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrowUp = faArrowCircleUp;
  twitterIcon = faTwitter;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;

  title = 'Angular: Getting Started';

  constructor() { }

  ngOnInit(): void {
  }

}
