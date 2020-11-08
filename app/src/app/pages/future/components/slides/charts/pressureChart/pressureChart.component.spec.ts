/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PressureChartComponent } from './pressureChart.component';

describe('PressureChartComponent', () => {
  let component: PressureChartComponent;
  let fixture: ComponentFixture<PressureChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressureChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
