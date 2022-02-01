import { createAction } from '@ngrx/store';
import { payload } from '../utils/payload.util';

// export const createModuleViews = createAction(
//   '[App] createModuleViews)',
//   payload<{ views: ModuleViews }>()
// );
export const addViewNavigation = createAction(
  '[App] addViewNavigation)',
  payload<{ level: number }>()
);

export const updateViewNavigation = createAction(
  '[App] updateViewNavigation)',
  payload<{ level: number }>()
);

export const deleteViewNavigation = createAction(
  '[App] deleteViewNavigation)',
  payload<{ level: number }>()
);
