import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lista1Component } from './lista1/lista1.component';
import { Lista2Component } from './lista2/lista2.component';

@NgModule({
  declarations: [
    AppComponent,
    Lista1Component,
    Lista2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
