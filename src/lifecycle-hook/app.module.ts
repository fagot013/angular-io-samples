import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PeekABooParentComponent} from './peek-a-boo-parent.component';
import { PeekABooComponent } from './peek-a-boo.component';
import { SpyParentComponent } from './spy.component';
import { FormsModule } from '@angular/forms';
import { SpyDirective } from './spy.directive';


@NgModule({
  declarations: [
    AppComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    SpyParentComponent,
    SpyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
