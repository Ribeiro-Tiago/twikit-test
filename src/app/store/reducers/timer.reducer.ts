import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';

import { TimerState } from 'src/app/typings/store';
import { startTimer } from '../actions/timer.action';

export const initialState: Readonly<TimerState> = {
  timers: [],
  currentTimer: null,
};

export const timerReducer = createReducer(
  initialState,
  on(startTimer, (state, { timer }) => ({ ...state, currentTimer: timer }))
);
