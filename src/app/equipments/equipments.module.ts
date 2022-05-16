import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentsRoutingModule } from './equipments-routing.module';
import { ViewEquipmentsComponent } from './view-equipments/view-equipments.component';
import { AddEquipmentsComponent } from './add-equipments/add-equipments.component';
import { EquipDetailComponent } from './equip-detail/equip-detail.component';


@NgModule({
  declarations: [
    ViewEquipmentsComponent,
    AddEquipmentsComponent,
    EquipDetailComponent
  ],
  imports: [
    CommonModule,
    EquipmentsRoutingModule
  ]
})
export class EquipmentsModule { }
