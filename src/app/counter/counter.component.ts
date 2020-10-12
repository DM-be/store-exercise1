import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../store/app.state";
import {
  DecrementCounterAction,
  IncrementCounterAction,
  ResetCounterAction
} from "../store/count.action";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  public count$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.count$ = this.store.select(state => state.countState.count);
  }

  public dispatchIncrement(): void {
    this.store.dispatch(new IncrementCounterAction());
  }

  // dispatch decrement action

  public dispatchDecrement(): void {
    this.store.dispatch(new DecrementCounterAction());
  }

  // dispatch reset action

  public resetCounter(): void {
    this.store.dispatch(new ResetCounterAction());
  }
}
