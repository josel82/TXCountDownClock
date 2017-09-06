import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { CounterService } from "app/shared/counter.service";


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    CurrentTimeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
