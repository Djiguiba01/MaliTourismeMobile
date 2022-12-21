import { TestBed } from '@angular/core/testing';

import { DetailregionService } from './detailregion.service';

describe('DetailregionService', () => {
  let service: DetailregionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailregionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
