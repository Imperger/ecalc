import { TestBed } from '@angular/core/testing';

import { ProgressiveTariffService } from './progressivetariff.service';

describe('ProgressiveTariffService', () => {
  let service: ProgressiveTariffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressiveTariffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
