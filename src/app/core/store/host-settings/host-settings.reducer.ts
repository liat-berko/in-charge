import { createReducer, on } from '@ngrx/store';
import { HostSettingsState } from './host-settings.model';
import * as hostSettingsActions from './host-settings.actions';

export const hostSettingsFeatureKey = 'HostSettings';

export const initialState: HostSettingsState = {
  navigationView: [0],
};

export const hostSettingsReducer = createReducer<HostSettingsState>(
  initialState,
  on(hostSettingsActions.addViewNavigation, (state, { payload }) => {
    return {
      ...state,
      navigationView: [...state.navigationView, payload.level],
    };
  }),
  on(hostSettingsActions.updateViewNavigation, (state, { payload }) => {
    const newNavigation: number[] = [...state.navigationView];
    newNavigation.pop();
    newNavigation.push(payload.level);
    return {
      ...state,
      navigationView: [...newNavigation],
    };
  }),
  on(hostSettingsActions.deleteViewNavigation, (state, { payload }) => {
    const newNavigation: number[] = [...state.navigationView];
    newNavigation.forEach((element, index) => {
      if (element > payload.level) newNavigation.splice(index, 1);
    });
    return {
      ...state,
      navigationView: [...newNavigation],
    };
  })
);
