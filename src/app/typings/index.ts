export type Nullable<T> = T | null;

export enum TimerState {
  ON_GOING = 'on_going',
  DONE = 'done',
}

export type OnGoingTimer = Omit<Timer, 'endAt'>;

export interface Timer {
  state: TimerState;
  startAt: Date;
  endAt: Date;
}
