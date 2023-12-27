import { Component } from '@angular/core';
import AOS from "aos";
import {MatDialog} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {CalendlyComponent} from "../calendly/calendly.component";
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent {
  constructor(public dialog: MatDialog) {
    AOS.init();
  }


  url ='https://calendly.com/ushansan99/30min'
  // sheduleCall(){
  //   window.Calendly.initInlineWidget({
  //     url: this.url,
  //     parentElement: document.querySelector('.calendly-inline-widget')
  //   });
  // }
  scheduleCall() {
    this.dialog.open(CalendlyComponent, {
      width:'600px',   // Set width to 600px
      height:'auto',
    });
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
export {};
declare global {
  interface Window {
    Calendly: any;
  }
}
