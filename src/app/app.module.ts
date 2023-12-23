import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { CallComponent } from './layouts/call/call.component';
import {FooterComponent} from "./layouts/footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './layouts/banner/banner.component';
import {NgOptimizedImage} from "@angular/common";
import { ProcessComponent } from './layouts/process/process.component';
import {MatCardModule} from '@angular/material/card';
import { ServicesbarComponent } from './layouts/servicesbar/servicesbar.component';
import {ThemeModule} from "./_Services/theme/theme.module";
import {lightTheme} from "./_Services/theme/light-theme";
import {darkTheme} from "./_Services/theme/dark-theme";
import { SuperpowersComponent } from './layouts/superpowers/superpowers.component';
import {RedirectCardsComponent} from './layouts/redirect-cards/redirect-cards.component';
import { ContactusComponent } from './layouts/contactus/contactus.component';
import { SliderBarComponent } from './layouts/slider-bar/slider-bar.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {NgxSpinnerModule} from "ngx-spinner";
import { ReviewBarComponent } from './layouts/review-bar/review-bar.component';
import { GetThumbnailPipe } from './pipes/get-thumbnail.pipe';
import { BlockchaindevComponent } from './pages/blockchaindev/blockchaindev.component';
import { ArtModelComponent } from './pages/blockchaindev/art-model/art-model.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {BlockchaindevMobileComponent} from "./pages/blockchaindev/blockchaindev-mobile.component";
import {NavbarMobileComponent} from "./layouts/navbar/navbar-mobile.component";
import { SwiperModule } from 'swiper/angular';
import { SocialmediaComponent } from './pages/socialmedia/socialmedia.component';
import { UiuxComponent } from './pages/uiux/uiux.component';
import { NftComponent } from './pages/nft/nft.component';
import { BrandDevComponent } from './pages/brand-dev/brand-dev.component';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from "angularx-social-login";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ProcessComponent,
    ServicesbarComponent,
    ProcessComponent,
    CallComponent,
    SuperpowersComponent,
    RedirectCardsComponent,
    ContactusComponent,
    SliderBarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ReviewBarComponent,
    GetThumbnailPipe,
    BlockchaindevComponent,
    ArtModelComponent,
    BlockchaindevMobileComponent,
    NavbarMobileComponent,
    SocialmediaComponent,
    UiuxComponent,
    NftComponent,
    BrandDevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    MatCardModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    }),
    FormsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-atom' }),
    MatExpansionModule,
    SwiperModule,
    SocialLoginModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports:[NgxSpinnerModule],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              ""
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("")
          }
        ]
      } as SocialAuthServiceConfig
    }
  ]
})
export class AppModule { }
