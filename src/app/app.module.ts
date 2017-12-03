import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SheetModule } from 'angular5-spreadsheet';
@NgModule({
  declarations: [
    AppComponent
  ], 
  imports: [
    BrowserModule,
    SheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
