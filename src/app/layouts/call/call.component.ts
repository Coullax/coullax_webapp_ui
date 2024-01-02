import { Component } from '@angular/core';
import {CalendlyComponent} from "../calendly/calendly.component";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent {
  constructor(public dialog: MatDialog) {

  }

  scheduleCall() {
    this.dialog.open(CalendlyComponent, {
      width:'600px',   // Set width to 600px
      height:'auto',
    });
  }
}
