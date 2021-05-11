import { createReducer, on } from '@ngrx/store';
import { OnGoingTimer, TimerState } from 'src/app/typings';

import { TimerStore } from 'src/app/typings/store';
import { startTimer, stopTimer } from '../actions/timer.action';

export const initialState: Readonly<TimerStore> = {
  timers: [],
  currentTimer: null,
};

export const timerReducer = createReducer(
  initialState,
  on(startTimer, (state) => ({
    ...state,
    currentTimer: { state: TimerState.ON_GOING, startAt: new Date() },
  })),
  on(stopTimer, ({ timers, currentTimer }) => {
    return {
      timers: timers.concat({
        startAt: (currentTimer as OnGoingTimer).startAt,
        endAt: new Date(),
        state: TimerState.DONE,
      }),
      currentTimer: null,
    };
  })
);
