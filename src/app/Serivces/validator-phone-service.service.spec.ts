import { TestBed } from '@angular/core/testing';

import { ValidatorPhoneServiceService } from './validator-phone-service.service';

describe('ValidatorPhoneServiceService', () => {
  let service: ValidatorPhoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorPhoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Валідний кейс +38050957555', () => {
    let s = service.validateMobileNumber("+380509579969")
    expect(s).toBe(true);
  })
  it('Не валідний кейс +55550957555', () => {
    let s = service.validateMobileNumber("+55550957555")
    expect(s).toBe(false);
  })
  it('Не валідний кейс 57555', () => {
    let s = service.validateMobileNumber("57555")
    expect(s).toBe(false);
  })
});
