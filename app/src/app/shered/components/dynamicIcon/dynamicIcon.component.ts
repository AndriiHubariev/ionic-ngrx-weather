import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-dynamicIcon',
  templateUrl: './dynamicIcon.component.html',
  styleUrls: ['./dynamicIcon.component.scss']
})
export class DynamicIconComponent implements OnInit {
  @Input() weatherState;
  constructor() { }

  ngOnInit() {
  }

}
