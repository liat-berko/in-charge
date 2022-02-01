import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

//const DASHBOARD_WIDGETS = [];

const COMPONENTS = [DashboardComponent];

//const COMPONENTS_NOROUNT = [...DASHBOARD_WIDGETS];

@NgModule({
  imports: [DashboardRoutingModule],
  declarations: [...COMPONENTS],
  //entryComponents: [...COMPONENTS_NOROUNT]
})
export class DashboardModule {}
