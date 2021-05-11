import { createSelector } from '@ngrx/store';

import { AppState, TimerStore } from 'src/app/typings/store';

export const isTimerActive = createSelector(
  (state: AppState) => state.timer,
  (timer: TimerStore) => !!timer.currentTimer
);

export const currentTimer = createSelector(
  (state: AppState) => state.timer,
  (timer: TimerStore) => timer.currentTimer
);

export const timers = createSelector(
  (state: AppState) => state.timer,
  (timer: TimerStore) => timer.timers
);
