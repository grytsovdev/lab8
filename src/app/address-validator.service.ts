import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AddressValidatorService {

  validateAddress(address: string) {

    address = address.trim();


    const streetPattern = /\b([a-zA-Z]+)\b/;
    const housNumberPattern = /\w+/
    const cityPattern = /\b([a-zA-Z]+)\b/;
    const postalCodePattern = /\b\d{5}\b/;


    const parts = address.split(",").map((part) => part.trim());


    if (parts.length !== 4) {
      return false;
    }


    const [street, housNumber, city, postalCode] = parts;

    if (
      !streetPattern.test(street) ||
      !cityPattern.test(city) ||
      !housNumberPattern.test(housNumber) ||
      !postalCodePattern.test(postalCode)
    ) {
      return false;
    }

    return true;
  }


  constructor() { }
}
