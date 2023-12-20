import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemeService} from "../../_Services/theme/theme.service";

@Component({
  selector: 'app-blockchaindev-mobile',
  templateUrl: './blockchaindev-mobile.component.html',
  styleUrls: ['./blockchaindev-mobile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlockchaindevMobileComponent implements OnInit{
  isDarkMode:boolean;
  constructor(private themeService: ThemeService) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }
  ngOnInit(){
  }
}
