import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStorageComponent } from './add-storage/add-storage.component';

const routes: Routes = [
  {path:'',component:AddStorageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
