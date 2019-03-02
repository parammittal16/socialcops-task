import { TestBed } from '@angular/core/testing';

import { GetFileService } from './get-file.service';

describe('GetFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFileService = TestBed.get(GetFileService);
    expect(service).toBeTruthy();
  });
});
