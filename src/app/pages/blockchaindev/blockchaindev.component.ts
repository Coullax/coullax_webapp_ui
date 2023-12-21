import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemeService} from "../../_Services/theme/theme.service";
import AOS from "aos";

@Component({
  selector: 'app-blockchaindev',
  templateUrl: './blockchaindev.component.html',
  styleUrls: ['./blockchaindev.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlockchaindevComponent implements OnInit{
  constructor() {
    AOS.init();
  }
  ngOnInit() {

  }
}
