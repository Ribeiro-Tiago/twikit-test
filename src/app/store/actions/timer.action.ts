import { createAction } from '@ngrx/store';

export const startTimer = createAction('[Timer] Start timer');

export const stopTimer = createAction('[Timer] End timer');

export const resetTimers = createAction('[Timer] Reset timers');

export const sort = createAction('[Timer] Sort timers');
