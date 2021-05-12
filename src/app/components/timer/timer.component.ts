import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Nullable, OnGoingTimer, Timer, TimerState } from 'src/app/typings';
import { AppState } from 'src/app/typings/store';
import { startTimer, stopTimer } from 'src/app/store/actions/timer.action';

const BUTTON_CONFIGURATIONS = {
  start: {
    label: 'Start',
    color: 'success',
    icon: 'play.svg',
    isDone: false,
  },
  onGoing: {
    label: 'Stop',
    color: 'danger',
    icon: 'stop.svg',
    isDone: false,
  },
  done: {
    label: 'Done',
    color: 'default',
    icon: 'check.svg',
    isDone: true,
  },
  init: {
    label: '',
    color: '',
    icon: '',
    isDone: false,
  },
};

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnChanges, OnDestroy {
  @Input() timer: Nullable<Timer | OnGoingTimer> = null;

  buttonConfig = BUTTON_CONFIGURATIONS.init;
  time: number = 0;
  timerInterval: any = null;

  constructor(private store: Store<AppState>) {
    this.setupButton();
  }

  onButtonClick() {
    if (!this.timer) {
      return this.store.dispatch(startTimer());
    }

    if (this.timer.state === TimerState.ON_GOING) {
      clearInterval(this.timerInterval);
      this.store.dispatch(stopTimer());
    }
  }

  setupButton() {
    if (!this.timer) {
      this.buttonConfig = BUTTON_CONFIGURATIONS.start;
      this.time = 0;
      return;
    }

    if (this.timer.state === TimerState.DONE) {
      this.buttonConfig = BUTTON_CONFIGURATIONS.done;
      this.time = this.getTimeLapsed();
      return;
    }

    this.buttonConfig = BUTTON_CONFIGURATIONS.onGoing;
    this.time = this.getTimeLapsed();

    this.timerInterval = setInterval(
      () => (this.time = this.getTimeLapsed()),
      1000
    );
  }

  ngOnChanges() {
    this.setupButton();
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  getTimeLapsed() {
    return (
      ((this.timer as Timer).endAt || new Date()).getTime() -
      (this.timer as Timer).startAt.getTime()
    );
  }
}
