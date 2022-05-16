import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipmentsComponent } from './add-equipments/add-equipments.component';
import { ViewEquipmentsComponent } from './view-equipments/view-equipments.component';

const routes: Routes = [
  {path:'',component:ViewEquipmentsComponent,
children:[
  {path:'add-equips',component:AddEquipmentsComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentsRoutingModule { }
