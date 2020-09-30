import { TestBed } from '@angular/core/testing';

import { StyleSearchService } from './style-search.service';

describe('StyleSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StyleSearchService = TestBed.get(StyleSearchService);
    expect(service).toBeTruthy();
  });
});
