import { createSelector } from '@ngrx/store';
import { AppState } from './app.model';

export const appState = (state: AppState) => state;

export const views = createSelector(appState, (state) => state.view);
