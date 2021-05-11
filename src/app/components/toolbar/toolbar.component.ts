import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Timer } from 'src/app/typings';
import { isTimerActive } from 'src/app/store/selectors/timer.selector';

import { AppState } from 'src/app/typings/store';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  isTimerActive$: Observable<Timer>;

  constructor(private store: Store<AppState>) {
    this.isTimerActive$ = this.store.pipe(select(isTimerActive));
  }
}
