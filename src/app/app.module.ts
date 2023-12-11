import { NgModule } from '@angular/core';
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
    SliderBarComponent
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
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
