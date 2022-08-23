import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityIndexComponent} from './facility-index/facility-index.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';


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
    component: FacilityIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
