import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';

import {RouterModule, Routes} from '@angular/router';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerIndexComponent} from './customer/customer-index/customer-index.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityIndexComponent} from './facility/facility-index/facility-index.component';
import {ContractIndexComponent} from './contract/contract-index/contract-index.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './footer/footer.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {CustomerTypeComponent} from './customer/customer-type/customer-type.component';
import {FacilityDetailComponent} from './facility/facility-detail/facility-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomerModule} from './customer/customer.module';
import {ContractModule} from './contract/contract.module';
import {FacilityModule} from './facility/facility.module';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomerModule,
    ContractModule,
    FacilityModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
