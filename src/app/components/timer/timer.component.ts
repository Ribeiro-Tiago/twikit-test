import { Component, Input, OnInit } from '@angular/core';

import { OnGoingTimer, Timer, TimerState } from 'src/app/typings';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  // ! because https://tutorial.tips/3-ways-to-fix-property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructorts/
  @Input() timer!: Timer | OnGoingTimer;

  label: string;
  color: string;
  icon: string;
  time: number;

  constructor() {
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
      this.time =
        (this.timer as Timer).endAt.getTime() - this.timer.startAt.getTime();
      return;
    }

    this.label = 'Stop';
    this.color = 'danger';
    this.icon = 'stop.svg';
    this.time = Date.now() - this.timer.startAt.getTime();
  }

  ngOnInit(): void {}
}
