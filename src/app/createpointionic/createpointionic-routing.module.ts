import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatepointionicPage } from './createpointionic.page';

const routes: Routes = [
  {
    path: '',
    component: CreatepointionicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatepointionicPageRoutingModule {}
