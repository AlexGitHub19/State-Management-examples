import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SourceComponent } from './components/source/source.component';
import { exampleReducer } from './store/example.reducers';
import { Consumer1Component } from './components/consumer1/consumer1.component';
import { Consumer2Component } from './components/consumer2/consumer2.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    SourceComponent,
    Consumer1Component,
    Consumer2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ example: exampleReducer }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx base example store',
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
