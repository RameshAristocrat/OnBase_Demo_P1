import { TestBed } from '@angular/core/testing';

import { RdSpinnerService } from './rd-spinner.service';

describe('RdSpinnerService', () => {
  let service: RdSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
