import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-uiux',
  templateUrl: './uiux.component.html',
  styleUrls: ['./uiux.component.scss']
})
export class UiuxComponent implements OnInit{
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
