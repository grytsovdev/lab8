import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorPhoneServiceService {

  constructor() { }
  validateMobileNumber(number: string): boolean {
    const pattern = /^\+380\d{9}$/;

    return pattern.test(number);
  }

}
