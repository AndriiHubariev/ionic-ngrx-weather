/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FetchService } from './fetch.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('Service: Fetch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([FetchService], (service: FetchService) => {
    expect(service).toBeTruthy();
  }));
});
