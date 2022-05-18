import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContractFarmingRoutingModule } from './contract-farming-routing.module';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { ViewCancelledComponent } from './view-cancelled/view-cancelled.component';


@NgModule({
  declarations: [
    ViewRequestsComponent,
    ViewCancelledComponent
  ],
  imports: [
    CommonModule,
    ContractFarmingRoutingModule,
    NgxPaginationModule
  ]
})
export class ContractFarmingModule { }
