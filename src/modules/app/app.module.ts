import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainer } from './containers/app/app.container';

@NgModule({
  declarations: [
    AppContainer
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
