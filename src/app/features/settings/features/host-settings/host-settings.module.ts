import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostSettingsEffects } from 'src/app/core/store/host-settings/host-settings.effect';
import {
  hostSettingsFeatureKey,
  hostSettingsReducer,
} from 'src/app/core/store/host-settings/host-settings.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { HostSettingsHeaderComponent } from './components/host-settings-header/host-settings-header.component';
import { HostSettingsComponent } from './components/host-settings.component';
import { HostsDetailsViewComponent } from './components/views/hosts-details-view/hosts-details-view.component';
import { HostsListViewComponent } from './components/views/hosts-list-view/hosts-list-view.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HostSettingsFacade } from 'src/app/core/store/host-settings/host-settings.facade';
import { AddHostViewComponent } from './components/views/add-host-view/add-host-view.component';

const routes: Routes = [
  {
    path: '',
    component: HostSettingsComponent,
  },
];
const COMPONENTS = [HostSettingsComponent, HostSettingsHeaderComponent];
const ENTRY_COMPONENTS = [
  HostsListViewComponent,
  HostsDetailsViewComponent,
  AddHostViewComponent,
];

@NgModule({
  declarations: [...COMPONENTS, ...ENTRY_COMPONENTS],
  imports: [
    StoreModule.forFeature(hostSettingsFeatureKey, hostSettingsReducer),
    EffectsModule.forFeature([HostSettingsEffects]),

    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ],
  exports: [RouterModule],
  entryComponents: [ENTRY_COMPONENTS],
  providers: [HostSettingsFacade],
})
export class HostSettingsModule {} //HostSettingsHeaderComponent just for component factory test - should be remoced by view
