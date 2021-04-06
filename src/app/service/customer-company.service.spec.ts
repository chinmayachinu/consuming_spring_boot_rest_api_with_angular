import { TestBed } from '@angular/core/testing';

import { CustomerCompanyService } from './customer-company.service';

describe('CustomerCompanyService', () => {
  let service: CustomerCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
