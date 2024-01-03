import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ThemeService} from "../../_Services/theme/theme.service";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-blockchaindev',
  templateUrl: './blockchaindev.component.html',
  styleUrls: ['./blockchaindev.component.scss'],
})
export class BlockchaindevComponent implements OnInit{
  showNaveBar:boolean=true;
  constructor(public breakpointObserver: BreakpointObserver) {
  }
  ngOnInit() {
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
}
