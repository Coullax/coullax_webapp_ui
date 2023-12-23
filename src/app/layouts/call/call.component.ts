import { Component } from '@angular/core';
import AOS from "aos";
import {CalendlyComponent} from "../calendly/calendly.component";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent {
  constructor(public dialog: MatDialog) {
    AOS.init();
  }

  scheduleCall() {
    this.dialog.open(CalendlyComponent, {
      width:'600px',   // Set width to 600px
      height:'auto',
    });
  }
}
