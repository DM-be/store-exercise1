import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CountReducer } from "./store/count.reducer";
import { CounterComponent } from "./counter/counter.component";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(
      {
        countState: CountReducer
      },
      {}
    ),
     StoreDevtoolsModule.instrument(),
  ],
  declarations: [AppComponent, HelloComponent, CounterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
