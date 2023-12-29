import {Component, OnInit} from '@angular/core';
import AOS from "aos";

declare var window: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})


export class BannerComponent implements OnInit{
  constructor() {
    AOS.init();
  }
  ngOnInit(): void {
  }


}
