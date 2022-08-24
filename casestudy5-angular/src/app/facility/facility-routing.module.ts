import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityIndexComponent} from './facility-index/facility-index.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {FacilityDetailComponent} from './facility-detail/facility-detail.component';


const routes: Routes = [
  {
    path: '',
    component: FacilityIndexComponent
  },
  {
    path: 'create',
    component: FacilityCreateComponent
  },
  {
    path: 'edit/:id',
    component: FacilityEditComponent
  },
  {
    path: 'detail/:id',
    component: FacilityDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
