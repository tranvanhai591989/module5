import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerIndexComponent} from './customer-index/customer-index.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerIndexComponent
  },
  {
    path: 'create',
    component: CustomerCreateComponent
  },
  {
    path: 'edit/:id',
    component: CustomerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
