import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  
  visable: Boolean;
  
  constructor() { }

  ngOnInit() {
    this.visable = true;
  }

  turnFalse() {
    this.visable = false;
    console.log("working")
  }



}
