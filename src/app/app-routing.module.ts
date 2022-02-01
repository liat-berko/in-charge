import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/components/dashboard.component';

const routes: Routes = [
  // {
  //   path: '/',
  //   redirectTo: 'dashboard',
  // },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
  // {
  //   path: 'vehicledriver',
  //   loadChildren: () =>
  //     import('./features/vehicle-drivers/vehicle-drivers.module').then(
  //       (m) => m.VehicleDriversModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
