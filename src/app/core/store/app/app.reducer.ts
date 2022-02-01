import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';
import { AppState } from './app.model';

export const initialState: AppState = {
  view: {},
};

export const appReducer = createReducer<AppState>(
  initialState
  // on(appActions.addViewNavigation, (state, { payload }) => {
  //   return {
  //     ...state,
  //     view: {
  //       ...state.view,
  //       navigationView: [...state.view?.navigationView, payload.level],
  //     },
  //   };
  // }),
  // on(appActions.updateViewNavigation, (state, { payload }) => {
  //   return {
  //     ...state,
  //     view: {
  //       ...state.view,
  //       navigationView: [payload.level],
  //     },
  //   };
  // }),
  // on(appActions.deleteViewNavigation, (state, { payload }) => {
  //   const newNavigation: number[] = [...state.view?.navigationView];
  //   newNavigation.forEach((element, index) => {
  //     if (element > payload.level) newNavigation.splice(index, 1);
  //   });
  //   return {
  //     ...state,
  //     view: {
  //       ...state.view,
  //       navigationView: [...newNavigation],
  //     },
  //   };
  // })
);
