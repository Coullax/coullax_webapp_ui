import { Component } from '@angular/core';
import {ThemeService} from "../../_Services/theme/theme.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isDarkMode:boolean;
  constructor(private themeService: ThemeService) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }
  toggle() {
    const active = this.themeService.isDarkMode() ;
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

}