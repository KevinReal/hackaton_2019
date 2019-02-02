import { TestBed } from '@angular/core/testing';

import { BusesDataService } from '../../services/buses-data.service';

describe('BusesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusesDataService = TestBed.get(BusesDataService);
    expect(service).toBeTruthy();
  });
});
