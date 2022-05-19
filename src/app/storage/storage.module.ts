import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageRoutingModule } from './storage-routing.module';
import { AddStorageComponent } from './add-storage/add-storage.component';
import { FormsModule } from '@angular/forms';
import { AddItemsComponent } from './add-items/add-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StorageDashboardComponent } from './storage-dashboard/storage-dashboard.component';
import { ViewStorageComponent } from './view-storage/view-storage.component';


@NgModule({
  declarations: [
    AddStorageComponent,
    AddItemsComponent,
    DashboardComponent,
    StorageDashboardComponent,
    ViewStorageComponent
  ],
  imports: [
    CommonModule,
    StorageRoutingModule,
    FormsModule
  ]
})
export class StorageModule { }
