import { TestBed } from '@angular/core/testing';

import { HeroRestrictedService } from './hero-restricted.service';

describe('HeroRestrictedService', () => {
  let service: HeroRestrictedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroRestrictedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
