import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Nullable, OnGoingTimer, Timer } from 'src/app/typings';
import { AppState } from 'src/app/typings/store';
import { currentTimer, timers } from 'src/app/store/selectors/timer.selector';

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.scss'],
})
export class TimerListComponent implements OnInit {
  timers$: Observable<Timer[]>;
  currentTimer$: Observable<Nullable<OnGoingTimer | Timer>>;

  constructor(private store: Store<AppState>) {
    this.timers$ = this.store.pipe(select(timers));
    this.currentTimer$ = this.store.pipe(select(currentTimer));
  }

  ngOnInit(): void {}
}
