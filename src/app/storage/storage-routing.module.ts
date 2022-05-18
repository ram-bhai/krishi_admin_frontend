import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemsComponent } from './add-items/add-items.component';
import { AddStorageComponent } from './add-storage/add-storage.component';

const routes: Routes = [
  //{path:'',component:AddStorageComponent}
  {path:'',component:AddItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
