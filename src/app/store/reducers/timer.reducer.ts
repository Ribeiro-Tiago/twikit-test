import { createReducer, on } from '@ngrx/store';

import { TimerStore } from 'src/app/typings/store';
import { startTimer } from '../actions/timer.action';

export const initialState: Readonly<TimerStore> = {
  timers: [],
  currentTimer: null,
};

export const timerReducer = createReducer(
  initialState,
  on(startTimer, (state, { timer }) => ({ ...state, currentTimer: timer }))
);
