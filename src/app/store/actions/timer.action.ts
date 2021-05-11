import { createAction, props } from '@ngrx/store';

import { Timer } from 'src/app/typings';

export const startTimer = createAction(
  '[Timer] Start timer',
  props<{ timer: Timer }>()
);
