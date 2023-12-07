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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ProcessComponent,
    CallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
