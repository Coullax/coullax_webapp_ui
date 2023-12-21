import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemeService} from "../../_Services/theme/theme.service";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import AOS from "aos";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-blockchaindev-mobile',
  templateUrl: './blockchaindev-mobile.component.html',
  styleUrls: ['./blockchaindev-mobile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlockchaindevMobileComponent implements OnInit{
  isDarkMode:boolean;
  constructor(private themeService: ThemeService) {
    AOS.init();
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }
  ngOnInit(){
  }
}
