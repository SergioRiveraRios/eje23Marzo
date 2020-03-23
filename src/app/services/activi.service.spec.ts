import { TestBed } from '@angular/core/testing';

import { ActiviService } from './activi.service';

describe('ActiviService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiviService = TestBed.get(ActiviService);
    expect(service).toBeTruthy();
  });
});
