import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HostSettingsState } from './host-settings.model';
import { hostSettingsFeatureKey } from './host-settings.reducer';

const hostSettingsSelector = createFeatureSelector<HostSettingsState>(
  hostSettingsFeatureKey
);

export const navigationView = createSelector(
  hostSettingsSelector,
  (state) => state.navigationView
);
