import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ThemeService} from "../../_Services/theme/theme.service";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{

  showNaveBar:boolean = true;
  showsun:boolean = true;

  isDarkMode:boolean;
  constructor(private themeService: ThemeService,public breakpointObserver: BreakpointObserver, private router: Router) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
    if(this.isDarkMode){
      this.showsun = false;
    }else{
      this.showsun = true;
    }
  }
  toggle() {
    const active = this.themeService.isDarkMode() ;
    this.isDarkMode = !this.isDarkMode;
    if (!active) {
      this.themeService.setTheme('dark');
      document.body.setAttribute('data-theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      this.showsun = false;
    } else {
      this.themeService.setTheme('light');
      document.body.setAttribute('data-theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      this.showsun = true;
    }



  }
  ngOnInit(){
    this.breakpointObserver
      .observe(['(min-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showNaveBar = true;
        } else {
          this.showNaveBar = false;
        }
      });
  }

  updateThemes(theme:any){
      if (theme.value === 'dark') {
        this.themeService.setTheme('dark');
        document.body.setAttribute('data-theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else if (theme.value === 'auto'){
        if (window.matchMedia('(prefers-color-scheme: dark)').matches){
          this.themeService.setTheme('dark');
          document.body.setAttribute('data-theme', 'auto');
          document.documentElement.setAttribute('data-theme', 'auto');
        }
      } else {
        this.themeService.setTheme('light');
        document.body.setAttribute('data-theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
      }
  }
  getNavbarStyles() {
    if (this.router.url === '/app/blockchain-dev') {
      return 'theme-switch__container_blockchain';
    } else if (this.router.url === '/route2') {
      return 'background-color: green;';
    } else if (this.router.url === '/route3') {
      return 'background-color: red;';
    }

    return 'theme-switch__container';
  }
}
