import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Timer } from 'src/app/typings';
import { AppState } from 'src/app/typings/store';

export const isTimerActive = createSelector(
  (state: any) => state.timer.currentTimer,
  (timer: Timer) => !!timer
);
