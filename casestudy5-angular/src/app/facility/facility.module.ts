import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FacilityRoutingModule} from './facility-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FacilityIndexComponent} from './facility-index/facility-index.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {FacilityDetailComponent} from './facility-detail/facility-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [FacilityIndexComponent, FacilityCreateComponent, FacilityEditComponent, FacilityDetailComponent],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class FacilityModule {
}
