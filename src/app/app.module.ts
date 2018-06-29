import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Module, Test2Module } from '@turtlebody/angular';
// import {  } from '@turtlebody/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Test1Module,
    Test2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
