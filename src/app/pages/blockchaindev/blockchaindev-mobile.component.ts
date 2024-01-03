import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemeService} from "../../_Services/theme/theme.service";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-blockchaindev-mobile',
  templateUrl: './blockchaindev-mobile.component.html',
  styleUrls: ['./blockchaindev-mobile.component.scss'],
})
export class BlockchaindevMobileComponent implements OnInit{
  isDarkMode:boolean;
  showNaveBar:boolean = false;
  constructor(private themeService: ThemeService,public breakpointObserver: BreakpointObserver) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
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
}
