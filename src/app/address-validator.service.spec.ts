import { TestBed } from '@angular/core/testing';

import { AddressValidatorService } from './address-validator.service';

describe('AddressValidatorService', () => {
  let service: AddressValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Перевірка адреси', () => {
    expect(service.validateAddress("Kostyantyna Dan'kevycha St, 8, Kyiv, 02232")).toBe(true)
  });

}
)
