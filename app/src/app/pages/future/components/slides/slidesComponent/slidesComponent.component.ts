import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-component',
  templateUrl: './slidesComponent.component.html',
  styleUrls: ['./slidesComponent.component.scss']
})
export class SlidesComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 200
  };
  constructor() { }

  ngOnInit() {
  }

}
