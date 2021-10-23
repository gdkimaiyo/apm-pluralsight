import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import {
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay(),
  );

  barsIcon = faBars;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router,
  ) {}

  ngOnInit(): void {
  }

  navigateTo(name: string = ''): void {
    this.router.navigate([name]);
  }

}
