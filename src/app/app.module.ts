import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { timerReducer } from './store/reducers/timer.reducer';
import { environment } from 'src/environments/environment';
import { TimerComponent } from './components/timer/timer.component';
import { TimerListComponent } from './components/timer-list/timer-list.component';
import { TimePipe } from './pipes/time/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ToolbarComponent,
    TimerComponent,
    TimerListComponent,
    TimePipe,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ timer: timerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
