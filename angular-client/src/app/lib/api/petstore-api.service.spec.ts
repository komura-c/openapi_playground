import { TestBed } from '@angular/core/testing';

import { PetstoreApiService } from './petstore-api.service';

describe('PetstoreApiService', () => {
  let service: PetstoreApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetstoreApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
