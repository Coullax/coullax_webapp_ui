import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-webdev-software',
  templateUrl: './webdev-software.component.html',
  styleUrls: ['./webdev-software.component.scss']
})
export class WebdevSoftwareComponent implements OnInit{
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
