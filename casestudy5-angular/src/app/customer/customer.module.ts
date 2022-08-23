import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomerIndexComponent} from './customer-index/customer-index.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [CustomerIndexComponent, CustomerEditComponent, CustomerCreateComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class CustomerModule {
}
