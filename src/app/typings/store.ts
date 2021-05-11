import { Timer, Nullable } from '.';

export interface TimerStore {
  timers: Timer[];
  currentTimer: Nullable<Timer>;
}

export interface AppState {
  timer: TimerStore;
}
