/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DaysChartComponent } from './daysChart.component';

describe('DaysChartComponent', () => {
  let component: DaysChartComponent;
  let fixture: ComponentFixture<DaysChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
