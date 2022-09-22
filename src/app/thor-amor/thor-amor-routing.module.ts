import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThorAmorPage } from './thor-amor.page';

const routes: Routes = [
  {
    path: '',
    component: ThorAmorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThorAmorPageRoutingModule {}
