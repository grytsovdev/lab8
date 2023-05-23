import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MyFormComponent } from '../my-form/my-form.component';
import { ViewformComponent } from '../viewform/viewform.component';
import { UpdateformComponent } from '../updateform/updateform.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [HomePage, MyFormComponent, ViewformComponent, UpdateformComponent]
})
export class HomePageModule { }
