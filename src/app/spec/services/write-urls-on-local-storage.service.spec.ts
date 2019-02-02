import { TestBed } from '@angular/core/testing';

import { WriteUrlsOnLocalStorageService } from '../../services/write-urls-on-local-storage.service';

describe('WriteUrlsOnLocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WriteUrlsOnLocalStorageService = TestBed.get(WriteUrlsOnLocalStorageService);
    expect(service).toBeTruthy();
  });
});
