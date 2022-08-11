import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WordComponent} from './word.component'
import {AlertModule} from "ngx-bootstrap/alert";
import {FooterComponent} from "./footer.component";

@NgModule({
  declarations: [
    FooterComponent,
    AppComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
