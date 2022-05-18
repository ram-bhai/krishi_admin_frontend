import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';
import { EquipmentsRoutingModule } from './equipments-routing.module';
import { ViewEquipmentsComponent } from './view-equipments/view-equipments.component';
import { AddEquipmentsComponent } from './add-equipments/add-equipments.component';
import { EquipDetailComponent } from './equip-detail/equip-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewEquipmentsComponent,
    AddEquipmentsComponent,
    EquipDetailComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    NgxPaginationModule,
     FormsModule
  ]
})
export class EquipmentsModule { 
  constructor(){
    console.log("comment");
  }
}

export class EquipmentsModule { }
