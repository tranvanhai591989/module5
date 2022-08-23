import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractIndexComponent} from './contract-index/contract-index.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';


const routes: Routes = [
  {
    path: '',
    component: ContractIndexComponent
  },
  {
    path: 'create',
    component: ContractCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
