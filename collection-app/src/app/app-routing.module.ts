import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {AuthorizationComponent} from "./pages/authorization/authorization.component";
import {AdminPageComponent} from "./pages/admin-page/admin-page.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'auth',component: AuthorizationComponent},
  { path: 'admin',component: AdminPageComponent},
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
