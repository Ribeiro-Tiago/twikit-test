import { Timer, Nullable, OnGoingTimer } from '.';

export interface TimerStore {
  timers: Timer[];
  currentTimer: Nullable<OnGoingTimer>;
}

export interface AppState {
  timer: TimerStore;
}
