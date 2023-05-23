import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Faculty } from '../my-form/Class/Faculty';
import { ValidatorPhoneServiceService } from '../Serivces/validator-phone-service.service';
import { AddressValidatorService } from '../address-validator.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {

  @Input() faculty!: Faculty;
  @Input() show: boolean = true;
  @Output() facultyChange: EventEmitter<Faculty> = new EventEmitter<Faculty>();
  @Output() showChange = new EventEmitter();
  constructor() { }

  validate_phone(p: string): boolean {
    let validator = new ValidatorPhoneServiceService();

    if (p) {
      if (!validator.validateMobileNumber(p)) return false;
      else return true;
    }
    else return true;

  }

  validate_address(a: string): boolean {
    let validator = new AddressValidatorService()

    if (a) {
      if (!validator.validateAddress(a)) return false;
      else return true;
    }
    else return true;

  }

  save(n: any, d: any, p: any, a: any) {


    this.show = false;
    if (!(this.validate_phone(p) && this.validate_address(a))) {
      console.log(p)
      console.log(a)
      throw Error("phone or Address error")
    }
    this.faculty = new Faculty(n, d, p, a, this.faculty.professors)
    this.facultyChange.emit(this.faculty);
    this.showChange.emit(this.show)
  }

  ngOnInit() { }

}
