import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { IncrementCounterAction } from '../store/count.action';
import { CountState } from '../store/count.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  public count$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.count$ = this.store.select(state =>  state.countState.count);
  }

  public dispatchIncrement(): void {
    this.store.dispatch(new IncrementCounterAction());
  }

  // dispatch decrement action

  // dispatch reset action

  // challenge: implement an action that sets the counter to a certain value


}