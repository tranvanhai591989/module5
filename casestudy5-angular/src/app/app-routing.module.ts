import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
import {FacilityIndexComponent} from './facility/facility-index/facility-index.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {ContractIndexComponent} from './contract/contract-index/contract-index.component';
import {CustomerIndexComponent} from './customer/customer-index/customer-index.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'facility/add', component: FacilityCreateComponent},
  {path: 'facility/edit/:id', component: FacilityEditComponent},
  {path: 'facility', component: FacilityIndexComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/edit/:id', component: CustomerEditComponent},
  {path: 'customer', component: CustomerIndexComponent},
  {path: 'contract/add', component: ContractCreateComponent},
  {path: 'contract', component: ContractIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
