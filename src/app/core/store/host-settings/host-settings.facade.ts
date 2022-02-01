import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as hostSettingsSelectors from './host-settings.selectors';
import * as hostSettingsActions from './host-settings.actions';
import { HostSettingsState } from './host-settings.model';

@Injectable()
export class HostSettingsFacade {
  constructor(private store: Store<HostSettingsState>) {}

  navigationView$ = this.store.pipe(
    select(hostSettingsSelectors.navigationView)
  );

  addView = (payload: number): void =>
    this.dispatch(
      hostSettingsActions.addViewNavigation({ payload: { level: payload } })
    );

  changeView = (payload: number): void =>
    this.dispatch(
      hostSettingsActions.updateViewNavigation({ payload: { level: payload } })
    );

  deleteView = (payload: number): void =>
    this.dispatch(
      hostSettingsActions.deleteViewNavigation({ payload: { level: payload } })
    );

  private dispatch = (action: any) => this.store.dispatch(action);
}
