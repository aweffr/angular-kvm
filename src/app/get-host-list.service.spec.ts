import { TestBed, inject } from '@angular/core/testing';

import { GetHostListService } from './get-host-list.service';

describe('GetHostListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHostListService]
    });
  });

  it('should be created', inject([GetHostListService], (service: GetHostListService) => {
    expect(service).toBeTruthy();
  }));
});
