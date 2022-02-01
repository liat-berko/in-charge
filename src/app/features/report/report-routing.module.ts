import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //  component: ReportComponent,
    data: {
      showBreadCrumb: true,
      breadCrumbI18n: 'breadcrumbs.reports.reports-list',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
