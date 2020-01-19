import { TestBed } from '@angular/core/testing';

import { TestScriptsService } from './test-scripts.service';

describe('TestScriptsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestScriptsService = TestBed.get(TestScriptsService);
    expect(service).toBeTruthy();
  });
});
