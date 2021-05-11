import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Timer } from 'src/app/typings';
import { AppState } from 'src/app/typings/store';
import { timers } from 'src/app/store/selectors/timer.selector';

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.scss'],
})
export class TimerListComponent implements OnInit {
  timers$: Observable<Timer[]>;

  constructor(private store: Store<AppState>) {
    this.timers$ = this.store.pipe(select(timers));
  }

  ngOnInit(): void {}
}
