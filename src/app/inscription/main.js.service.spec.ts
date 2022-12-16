import { TestBed } from '@angular/core/testing';

import { MainJsService } from './main.js.service';

describe('MainJsService', () => {
  let service: MainJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
