import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageRoutingModule } from './storage-routing.module';
import { AddStorageComponent } from './add-storage/add-storage.component';
import { FormsModule } from '@angular/forms';
import { AddItemsComponent } from './add-items/add-items.component';
import { StorageDashboardComponent } from './storage-dashboard/storage-dashboard.component';
import { ViewStorageComponent } from './view-storage/view-storage.component';
import { EditStorageComponent } from './edit-storage/edit-storage.component';
import { EditItemsComponent } from './edit-items/edit-items.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AddStorageComponent,
    AddItemsComponent,
    StorageDashboardComponent,
    ViewStorageComponent,
    EditStorageComponent,
    EditItemsComponent
  ],
  imports: [
    CommonModule,
    StorageRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class StorageModule { }
