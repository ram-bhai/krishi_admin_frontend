import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from '../errorpage/errorpage.component';
import { AddEquipmentsComponent } from './add-equipments/add-equipments.component';
import { EquipDetailComponent } from './equip-detail/equip-detail.component';
import { ViewEquipmentsComponent } from './view-equipments/view-equipments.component';
import {DashboardComponent} from './dashboard/dashboard.component';
const routes: Routes = [
  {path:'',component:DashboardComponent,
children:[
  {path:'add-equips',component:AddEquipmentsComponent},
  {path:'view-equips',component:ViewEquipmentsComponent},
  {path:'euip-info/:id',component:EquipDetailComponent},

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentsRoutingModule { }
