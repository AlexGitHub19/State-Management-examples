import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SourceComponent } from './components/source/source.component';
import { exampleReducer } from './store/example.reducers';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ExampleEffects } from './store/example.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    SourceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ example: exampleReducer }),
    EffectsModule.forRoot([ExampleEffects]),
    StoreDevtoolsModule.instrument({
      name: 'NgRx example with effect store',
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
