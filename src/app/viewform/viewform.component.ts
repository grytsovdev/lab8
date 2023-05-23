import { Component, OnInit, Output } from '@angular/core';
import { Faculty } from '../my-form/Class/Faculty';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})


export class ViewformComponent implements OnInit {

  show_update: boolean = false;
  faculties: Faculty[] = [];
  constructor() { }
  ngOnInit() { }
  addFaculty(event: any) {
    if (event as Faculty) {
      let faculty: Faculty = event;
      this.faculties.push(faculty);
      console.log(this.faculties)
    } else throw new Error("Error of type")
  }
  update() { this.show_update = true; }
  showUp(event: any) {
    if (typeof event === "boolean") { this.show_update = event }
    else
      throw new Error("Error of type")
  }

  updateSave(event: any, i: number) {
    if (event as Faculty) {
      this.faculties[i] = event;
    } else throw new Error("Error of type")
  }

}
