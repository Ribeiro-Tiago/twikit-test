import { createReducer, on } from '@ngrx/store';
import { OnGoingTimer, TimerState } from 'src/app/typings';

import { TimerStore } from 'src/app/typings/store';
import {
  startTimer,
  stopTimer,
  resetTimers,
  sort,
} from '../actions/timer.action';

export const initialState: Readonly<TimerStore> = {
  timers: [],
  currentTimer: null,
  sortDesc: false,
};

export const timerReducer = createReducer(
  initialState,
  on(startTimer, (state) => ({
    ...state,
    currentTimer: { state: TimerState.ON_GOING, startAt: new Date() },
  })),

  on(stopTimer, ({ timers, currentTimer, sortDesc }) => {
    console.log(
      (currentTimer as OnGoingTimer).startAt.getTime(),
      new Date().getTime()
    );

    const newTimer = {
      startAt: (currentTimer as OnGoingTimer).startAt,
      endAt: new Date(),
      state: TimerState.DONE,
    };

    return {
      timers: sortDesc ? [newTimer, ...timers] : timers.concat(newTimer),
      currentTimer: null,
      sortDesc,
    };
  }),

  on(resetTimers, ({ sortDesc }) => ({
    timers: [],
    currentTimer: null,
    sortDesc,
  })),

  on(sort, ({ timers, sortDesc, currentTimer }) => {
    const sorted = [...timers].sort((a, b) => {
      if (sortDesc) {
        [b, a] = [a, b];
      }

      return a.startAt < b.startAt ? 1 : -1;
    });

    return {
      currentTimer,
      timers: sorted,
      sortDesc: !sortDesc,
    };
  })
);
