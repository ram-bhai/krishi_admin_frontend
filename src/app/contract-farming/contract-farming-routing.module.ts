import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../equipments/dashboard/dashboard.component';
import { ErrorpageComponent } from '../errorpage/errorpage.component';
import { AcceptedComponent } from './accepted/accepted.component';
import { ContractDashboardComponent } from './contract-dashboard/contract-dashboard.component';
import { ViewCancelledComponent } from './view-cancelled/view-cancelled.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';

const routes: Routes = [
  {path:'',component:ContractDashboardComponent,
    children:[
      {path:'all-reqs',component:ViewRequestsComponent},
      {path:'reject-reqs',component:ViewCancelledComponent},
      {path:'accept-reqs',component:AcceptedComponent},
    ]
  
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractFarmingRoutingModule { }
