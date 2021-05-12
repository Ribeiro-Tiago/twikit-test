import { Timer, Nullable, OnGoingTimer } from '.';

export interface TimerStore {
  timers: Timer[];
  currentTimer: Nullable<OnGoingTimer>;
  sortDesc: boolean;
}

export interface AppState {
  timer: TimerStore;
}
