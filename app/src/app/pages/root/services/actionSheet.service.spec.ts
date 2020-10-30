/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { ActionSheetService } from './actionSheet.service';


describe('Service: ActionSheet', () => {
  const storeMock = jasmine.createSpyObj('Store', ['select']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ActionSheetService,
        { provide: Store, useValue: storeMock }],
    });
  });

  it('should ...', inject([ActionSheetService], (service: ActionSheetService) => {
    expect(service).toBeTruthy();
  }));
});
