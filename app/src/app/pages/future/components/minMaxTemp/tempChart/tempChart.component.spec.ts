/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TempChartComponent } from './tempChart.component';

describe('TempChartComponent', () => {
  let component: TempChartComponent;
  let fixture: ComponentFixture<TempChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
