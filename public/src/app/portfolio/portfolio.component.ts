import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  video: string

  constructor() { }

  ngOnInit() {
    this.video = ""
  }

  changeVideo(name) {
    this.video = name;
    console.log(this.video)
  }

}
