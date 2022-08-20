import { TestBed } from '@angular/core/testing';

import { TpmsService } from './tpms.service';

describe('TpmsService', () => {
  let service: TpmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TpmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
