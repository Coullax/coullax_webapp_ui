import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-brand-dev',
  templateUrl: './brand-dev.component.html',
  styleUrls: ['./brand-dev.component.scss']
})
export class BrandDevComponent implements OnInit{
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
