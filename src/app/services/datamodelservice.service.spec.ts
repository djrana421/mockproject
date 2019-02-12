import { TestBed } from '@angular/core/testing';

import { DatamodelserviceService } from './datamodelservice.service';

describe('DatamodelserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatamodelserviceService = TestBed.get(DatamodelserviceService);
    expect(service).toBeTruthy();
  });
});
