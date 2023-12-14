import { Component } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent {
  constructor() {
    AOS.init();
  }
}
