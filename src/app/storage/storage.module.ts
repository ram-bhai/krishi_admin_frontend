import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageRoutingModule } from './storage-routing.module';
import { AddStorageComponent } from './add-storage/add-storage.component';
import { FormsModule } from '@angular/forms';
import { AddItemsComponent } from './add-items/add-items.component';


@NgModule({
  declarations: [
    AddStorageComponent,
    AddItemsComponent
  ],
  imports: [
    CommonModule,
    StorageRoutingModule,
    FormsModule
  ]
})
export class StorageModule { }
