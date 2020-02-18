import { TestBed } from '@angular/core/testing';

import { HrmsmastersService } from './hrmsmasters.service';

describe('HrmsmastersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HrmsmastersService = TestBed.get(HrmsmastersService);
    expect(service).toBeTruthy();
  });
});
