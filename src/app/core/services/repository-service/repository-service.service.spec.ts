import { TestBed } from '@angular/core/testing';

import { RepositoryServiceService } from './repository-service.service';

describe('RepositoryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryServiceService = TestBed.get(RepositoryServiceService);
    expect(service).toBeTruthy();
  });
});
