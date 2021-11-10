import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SourceComponent } from './components/source/source.component';

import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ExampleState } from './store/example.state';

@NgModule({
  declarations: [AppComponent, SourceComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([ExampleState], {
      developmentMode: true,
      selectorOptions: {
        // These Selector Settings are recommended in preparation for NGXS v4
        suppressErrors: false,
        injectContainerState: false,
      },
    }),
    NgxsReduxDevtoolsPluginModule.forRoot( {name: 'NGXS example store'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
