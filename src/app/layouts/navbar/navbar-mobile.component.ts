import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ThemeService} from "../../_Services/theme/theme.service";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarMobileComponent implements OnInit{

  showNaveBar:boolean = false;
  isDarkMode:boolean;
  constructor(private themeService: ThemeService,public breakpointObserver: BreakpointObserver) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }
  toggle() {
    const active = this.themeService.isDarkMode() ;
    this.isDarkMode = !this.isDarkMode;
    if (!active) {
      this.themeService.setTheme('dark');
      document.body.setAttribute('data-theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      this.themeService.setTheme('light');
      document.body.setAttribute('data-theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
    }


  }
  ngOnInit(){
    this.breakpointObserver
      .observe(['(min-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showNaveBar = false;
        } else {
          this.showNaveBar = true;
        }
      });
  }

  // updateThemes(theme:any){
  //   if (theme.value === 'dark') {
  //     this.themeService.setTheme('dark');
  //     document.body.setAttribute('data-theme', 'dark');
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //   } else if (theme.value === 'auto'){
  //     if (window.matchMedia('(prefers-color-scheme: dark)').matches){
  //       this.themeService.setTheme('dark');
  //       document.body.setAttribute('data-theme', 'auto');
  //       document.documentElement.setAttribute('data-theme', 'auto');
  //     }
  //   } else {
  //     this.themeService.setTheme('light');
  //     document.body.setAttribute('data-theme', 'light');
  //     document.documentElement.setAttribute('data-theme', 'light');
  //   }
  // }

}
