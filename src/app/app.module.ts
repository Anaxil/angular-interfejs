import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StaticCardComponent } from './ui/static-card/static-card.component';
import { DynamicCardComponent } from './ui/dynamic-card/dynamic-card.component';


@NgModule({
  declarations: [
    AppComponent,
    StaticCardComponent,
    DynamicCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
