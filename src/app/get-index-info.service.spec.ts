import { TestBed, inject } from '@angular/core/testing';

import { GetIndexInfoService } from './get-index-info.service';

describe('GetIndexInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetIndexInfoService]
    });
  });

  it('should be created', inject([GetIndexInfoService], (service: GetIndexInfoService) => {
    expect(service).toBeTruthy();
  }));
});
