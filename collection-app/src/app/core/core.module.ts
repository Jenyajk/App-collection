import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../components/header/header.component";
import {MainComponent} from "../pages/main/main.component";
import {UyModule} from "./uy.module";
import {NotFoundComponent} from "../pages/not-found/not-found.component";
import {LastAddedComponent} from "../components/last-added/last-added.component";
import {SearchComponent} from "../components/search/search.component";
import {AuthorizationComponent} from "../pages/authorization/authorization.component";
import {TranslateModule} from "@ngx-translate/core";
import {AdminPageComponent} from "../pages/admin-page/admin-page.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    NotFoundComponent,
    LastAddedComponent,
    SearchComponent,
    AuthorizationComponent,
    AdminPageComponent
  ],
  exports: [
    MainComponent,
    NotFoundComponent,
    LastAddedComponent,
    SearchComponent,
    AuthorizationComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    UyModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
