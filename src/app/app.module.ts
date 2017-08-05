import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

import { TimeService } from './shared/time.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
