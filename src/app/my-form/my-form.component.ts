import { Component, OnInit } from '@angular/core';
import { Faculty } from './Class/Faculty';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneValidaror } from './Service/phoneValidator';
import { AddressValidatorService } from '../address-validator.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {

  facultyForm!: FormGroup;
  faculty!: Faculty;


  constructor(private fb: FormBuilder) {
    this.facultyForm = this.fb.group({
      facultyName: ['', [Validators.required]],
      facultyDekan: ['', [Validators.required]],
      facultyPhoneNumber: ['', [phoneValidaror()]],
      facultyAddress: [''],
      professors: new FormArray([new FormControl()]),

    });
  }

  addProfessors() {
    (this.facultyForm.controls['professors'] as FormArray)
      .push(new FormControl())
  }
  deleteProfessor(i: any) {
    (this.facultyForm.controls['professors'] as FormArray).removeAt(i);
  }
  getControls() {
    return (this.facultyForm.get('professors') as FormArray).controls;
  }
  onSubmit() {
    let name = this.facultyForm.value.facultyName;
    let dekan = this.facultyForm.value.facultyDekan;
    let phone = this.facultyForm.value.facultyPhoneNumber;
    let address = this.facultyForm.value.facultyAddress;
    let professors = this.facultyForm.value.professors;
    let valid = new AddressValidatorService();
    if (valid.validateAddress(address)) {
      this.faculty = new Faculty(name, dekan, phone, address, professors)
      console.log("submit")
      console.log(this.faculty)
    }
    else
      alert("Помилка")
  }

  ngOnInit() { }

}
