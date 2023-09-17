import { TestBed } from '@angular/core/testing';

import { CirsisService } from './cirsis.service';

describe('CirsisService', () => {
  let service: CirsisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CirsisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
