import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContractRoutingModule} from './contract-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {ContractIndexComponent} from './contract-index/contract-index.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [ContractCreateComponent, ContractIndexComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ContractModule {
}
