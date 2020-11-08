import { Component, Input, OnInit } from '@angular/core';
import { DailyInterface } from 'src/app/shered/interfaces/dailyWeather.interface';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  @Input() day: DailyInterface;
  constructor() { }

  ngOnInit() {}

}
