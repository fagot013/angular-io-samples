import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { SizerComponent } from './sizer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, HeroDetailComponent, SizerComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
