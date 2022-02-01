import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationSettingsHeaderComponent } from './components/location-settings-header/location-settings-header.component';
import { LocationSettingsTabComponent } from './components/location-settings-tab/location-settings-tab.component';
import { LocationSettingsComponent } from './components/location-settings.component';

const routes: Routes = [
  {
    path: '',
    component: LocationSettingsComponent,
  },
];

const COMPONENTS = [
  LocationSettingsComponent,
  LocationSettingsHeaderComponent,
  LocationSettingsTabComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationSettingsModule {}
