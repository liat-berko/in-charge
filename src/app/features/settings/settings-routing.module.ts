import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hosts',
    loadChildren: () =>
      import('./features/host-settings/host-settings.module').then(
        (m) => m.HostSettingsModule
      ),
    //canActivate: [ACLGuard],
    data: {
      guard: {
        ability: ['FIND_CUSTOMER_OPERATOR', 'DEPARTMENTS_FIND'],
        mode: 'allOf',
      },
    },
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./features/location-settings/location-settings.module').then(
        (m) => m.LocationSettingsModule
      ),
    //canActivate: [ACLGuard, AllowHostToControlGuard],
    data: {
      guard: {
        ability: ['FIND_HOST_DRIVER_TARIFF'],
        mode: 'allOf',
      },
    },
  },
  {
    path: '**',
    redirectTo: 'host',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
