import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: StationListComponent,
  //   data: {
  //     showBreadCrumb: true,
  //     breadCrumbI18n: 'breadcrumbs.chargers.chargers-list'
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StationRoutingModule {}
