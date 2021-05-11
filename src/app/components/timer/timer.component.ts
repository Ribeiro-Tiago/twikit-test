import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Nullable, OnGoingTimer, Timer, TimerState } from 'src/app/typings';
import { AppState } from 'src/app/typings/store';
import { startTimer, stopTimer } from 'src/app/store/actions/timer.action';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnChanges, OnDestroy {
  @Input() timer: Nullable<Timer | OnGoingTimer> = null;

  label: string = '';
  color: string = '';
  icon: string = '';
  time: number = 0;
  isDone: boolean = false;

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
    this.isDone = false;

    if (!this.timer) {
      this.label = 'Start';
      this.color = 'success';
      this.icon = 'play.svg';
      this.time = 0;
      return;
    }

    if (this.timer.state === TimerState.DONE) {
      this.label = 'Done';
      this.color = 'default';
      this.icon = 'check.svg';
      this.isDone = true;
      this.time =
        (this.timer as Timer).endAt.getTime() - this.timer.startAt.getTime();
      return;
    }

    this.label = 'Stop';
    this.color = 'danger';
    this.icon = 'stop.svg';
    this.time = Date.now() - this.timer.startAt.getTime();

    this.timerInterval = setInterval(() => {
      this.time = Date.now() - (this.timer as OnGoingTimer).startAt.getTime();
    }, 1000);
  }

  ngOnChanges() {
    this.setupButton();
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }
}
