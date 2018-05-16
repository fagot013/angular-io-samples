import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PeekABooParentComponent} from './peek-a-boo-parent.component';
import { PeekABooComponent } from './peek-a-boo.component';


@NgModule({
  declarations: [
    AppComponent,
    PeekABooParentComponent,
    PeekABooComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
