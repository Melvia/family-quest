import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RoutingModule} from "./routing/routing.module";
import {AboutComponent} from "./about/about.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CodeComponent } from './code/code.component';
import { MirrorComponent } from './mirror/mirror.component';
import {LightDirective} from "./directives/light.directive";
import { CodesearchComponent } from './codesearch/codesearch.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CodeComponent,
    MirrorComponent,
    LightDirective,
    CodesearchComponent

  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
