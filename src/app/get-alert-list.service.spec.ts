import { TestBed, inject } from '@angular/core/testing';

import { GetAlertListService } from './get-alert-list.service';

describe('GetAlertListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAlertListService]
    });
  });

  it('should be created', inject([GetAlertListService], (service: GetAlertListService) => {
    expect(service).toBeTruthy();
  }));
});
