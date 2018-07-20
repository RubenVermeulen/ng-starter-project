import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainer } from './containers/app/app.container';
import { HelloComponent } from './components/hello/hello.component';

@NgModule({
  declarations: [
    AppContainer,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
