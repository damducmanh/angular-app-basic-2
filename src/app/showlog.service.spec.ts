import { TestBed, inject } from '@angular/core/testing';

import { ShowlogService } from './showlog.service';

describe('ShowlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowlogService]
    });
  });

  it('should be created', inject([ShowlogService], (service: ShowlogService) => {
    expect(service).toBeTruthy();
  }));
});
