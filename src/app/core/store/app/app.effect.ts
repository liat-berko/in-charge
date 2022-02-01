import { Injectable } from '@angular/core';
import {
  act,
  Actions,
  createEffect,
  ofType,
  OnInitEffects,
} from '@ngrx/effects';
import { Action, select } from '@ngrx/store';
import * as appActions from './app.actions';
import { concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppEffects {
  //implements OnInitEffects {
  constructor(private readonly actions$: Actions) {}

  //   initialDataLoading = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(appActions.initialDataRequest),
  //       act({
  //         project: () =>
  //           this.appService.initialDataApi().pipe(
  //             concatMap(({ data }: any) => [
  //               appActions.initialDataRequestSuccess({ payload: { appState: data } }),
  //               appActions.menuDataRequest({
  //                 payload: { isStationOwner: data.loggedInUser?.businessModelDto?.isStationOwner }
  //               })
  //             ])
  //           ),
  //         error: () => appActions.initialDataRequestFailed({ payload: { error: new Error('initial loading data failed') } })
  //       })
  //     )
  //   );

  //   ngrxOnInitEffects(): Action {
  //     return appActions.initialDataRequest();
  //   }
}
