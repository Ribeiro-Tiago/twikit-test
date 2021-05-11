import { Timer, Nullable } from '.';

export interface TimerState {
  timers: Timer[];
  currentTimer: Nullable<Timer>;
}

export interface AppState {
  timer: TimerState;
}
