import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemsComponent } from './add-items/add-items.component';
import { AddStorageComponent } from './add-storage/add-storage.component';
import { StorageDashboardComponent } from './storage-dashboard/storage-dashboard.component';
import { ViewStorageComponent } from './view-storage/view-storage.component';

const routes: Routes = [
  
  {path:'',component:StorageDashboardComponent,
children:[
  {path:'all-storage',component:ViewStorageComponent},
  {path:'add-new-storage',component:AddStorageComponent},
  {path:'add-items',component:AddItemsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
