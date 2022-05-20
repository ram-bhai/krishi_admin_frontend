import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipmentsComponent } from './add-equipments/add-equipments.component';
import { ViewEquipmentsComponent } from './view-equipments/view-equipments.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { EditEquipmentComponent } from './edit-equipment/edit-equipment.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [

  {path:'',component:DashboardComponent,
children:[
  {path:'add-equips',component:AddEquipmentsComponent},
  {path:'view-equips',component:ViewEquipmentsComponent},
  {path:'edit-equip/:id',component:EditEquipmentComponent},
  {path:'booking',component:BookingComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentsRoutingModule { }
