import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {NavbarComponent} from "./layouts/navbar/navbar.component";

const routes: Routes = [

  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'auth/login',
    component: LoginComponent
  },
  {
    path:'auth/register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
