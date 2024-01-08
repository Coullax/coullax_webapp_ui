import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {NavbarComponent} from "./layouts/navbar/navbar.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {BlockchaindevComponent} from "./pages/blockchaindev/blockchaindev.component";
import { SocialmediaComponent } from './pages/socialmedia/socialmedia.component';
import { NftComponent } from './pages/nft/nft.component';
import {UiuxComponent} from "./pages/uiux/uiux.component";
import {BrandDevComponent} from "./pages/brand-dev/brand-dev.component";
import {WebdevSoftwareComponent} from "./pages/webdev-software/webdev-software.component";
import {PrivacyComponent} from "./pages/about/privacy/privacy.component";
import {TermsComponent} from "./pages/about/terms/terms.component";
import {AboutComponent} from "./pages/about/about.component";
import {AiComponent} from "./pages/ai/ai.component";

const routes: Routes = [

  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'home/about',
    component: AboutComponent
  },
  {
    path:'home/terms&condition',
    component: TermsComponent
  },
  {
    path:'home/privacypolicy',
    component: PrivacyComponent
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
    path:'personal/dashboard',
    component: DashboardComponent
  },
  {
    path:'app/blockchain-dev',
    component: BlockchaindevComponent
  },
  {
    path:'app/socialmedia',
    component: SocialmediaComponent
  },
  {
    path:'app/nft',
    component: NftComponent
  },
  {
    path:'app/uiux',
    component: UiuxComponent
  },
  {
    path:'app/branddev',
    component: BrandDevComponent
  },
  {
    path:'app/web-softwared-dev',
    component: WebdevSoftwareComponent
  },
  {
    path:'app/ai',
    component: AiComponent
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
