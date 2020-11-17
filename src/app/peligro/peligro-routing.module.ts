import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeligroPage } from './peligro.page';

const routes: Routes = [
  {
    path: '',
    component: PeligroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeligroPageRoutingModule {}
