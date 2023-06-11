import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "../home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "../about/about.component";
import {NotFoundComponent} from "../not-found/not-found.component";
import {MirrorComponent} from "../mirror/mirror.component";
import {CodeComponent} from "../code/code.component";
import {CodesearchComponent} from "../codesearch/codesearch.component";
import {UserFormComponent} from "../user-form/user-form.component";


const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'home', depth: 1}},
  {path: 'about', component: AboutComponent, data: {title: false, depth: 2}},
  {path: 'error', component: NotFoundComponent, data: {title: 'error', dept: 3}},
  {path: 'mirror', component: MirrorComponent, data: {title: 'mirror', dept: 4}},
  {path: 'code', component: CodesearchComponent, data: {title: 'code', dept: 5}},
  {path: 'user', component: UserFormComponent},
  {path: '**', redirectTo: '/error'}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
