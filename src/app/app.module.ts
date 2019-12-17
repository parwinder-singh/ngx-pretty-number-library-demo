import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PrettyNumberModule} from "ngx-pretty-number";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PrettyNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
