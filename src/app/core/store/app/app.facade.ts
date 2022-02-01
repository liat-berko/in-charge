import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from './app.model';
import * as appSelectors from './app.selectors';
import * as appActions from './app.actions';
import { payload } from '../utils/payload.util';

@Injectable()
export class AppFacade {
  constructor(private store: Store<AppState>) {}

  appViews$ = this.store.pipe(select(appSelectors.views));

  addView = (payload: number): void =>
    this.dispatch(
      appActions.addViewNavigation({ payload: { level: payload } })
    );

  private dispatch = (action: any) => this.store.dispatch(action);
}
