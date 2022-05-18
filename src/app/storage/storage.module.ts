import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageRoutingModule } from './storage-routing.module';
import { AddStorageComponent } from './add-storage/add-storage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddStorageComponent
  ],
  imports: [
    CommonModule,
    StorageRoutingModule,
    FormsModule
  ]
})
export class StorageModule { }
