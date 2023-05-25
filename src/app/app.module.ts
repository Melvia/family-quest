import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScrollPageComponent } from './scroll-page/scroll-page.component';
import { ScrollPageDirective } from './scroll-page.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollPageComponent,
    ScrollPageDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
