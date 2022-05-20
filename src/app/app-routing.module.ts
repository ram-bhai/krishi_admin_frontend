import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'home',component:HomePageComponent},
  {path:'sign-in', component:SigninComponent},
  {path:'services',
loadChildren:()=> import('./equipments/equipments.module').then
(module=>module.EquipmentsModule)},
{path:'storage',
loadChildren:()=> import('./storage/storage.module').then
(module=>module.StorageModule)},
{path:'contract-farming',
loadChildren:()=> import('./contract-farming/contract-farming.module').then
(module=>module.ContractFarmingModule)},
{path:'customers',
loadChildren:()=> import('./customers/customers.module').then(m => m.CustomersModule)},
   {path:'**', component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
