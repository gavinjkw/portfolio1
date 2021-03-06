import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Router, RouterOutlet, NavigationEnd } from "@angular/router";
import { slideInAnimation } from './animations';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit {



  constructor(private _httpService: HttpService, private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Gavin Wilson - Home");

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }




}
