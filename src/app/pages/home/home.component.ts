import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  openMenu: boolean;
  mediaQueryList: MediaQueryList;

  constructor(
    private mediaMatcher: MediaMatcher,
  ) {
    this.openMenu = (localStorage.getItem('openMenu') || 'true') === 'true';
    this.mediaQueryList = this.mediaMatcher.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {
  }

  saveMenuState(event?: boolean): void {
    console.log('event');
    /*this.openMenu = event;
    localStorage.setItem(`openMenu-${this.authService.user?.email}`, this.openMenu.toString());*/
  }

}
