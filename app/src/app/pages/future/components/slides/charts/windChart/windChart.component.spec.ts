/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WindChartComponent } from './windChart.component';

describe('WindChartComponent', () => {
  let component: WindChartComponent;
  let fixture: ComponentFixture<WindChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
