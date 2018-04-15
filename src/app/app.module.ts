import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ParallaxModule} from "ngx-parallax";


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	ParallaxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
