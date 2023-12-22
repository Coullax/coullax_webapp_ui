import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ThemeService} from "../../_Services/theme/theme.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{


  isDarkMode:boolean;
  constructor(private themeService: ThemeService) {
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

}
