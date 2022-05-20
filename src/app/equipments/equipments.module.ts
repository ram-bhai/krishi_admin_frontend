import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { EquipmentsRoutingModule } from './equipments-routing.module';
import { ViewEquipmentsComponent } from './view-equipments/view-equipments.component';
import { AddEquipmentsComponent } from './add-equipments/add-equipments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditEquipmentComponent } from './edit-equipment/edit-equipment.component';
import { BookingComponent } from './booking/booking.component';


@NgModule({
  declarations: [
    ViewEquipmentsComponent,
    AddEquipmentsComponent,
    DashboardComponent,
    EditEquipmentComponent,
    BookingComponent,
  ],
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    NgxPaginationModule,
     FormsModule,
     MatTableModule,
     MatFormFieldModule
  ]
})
export class EquipmentsModule { 
  constructor(){
    console.log("comment");
  }
}

