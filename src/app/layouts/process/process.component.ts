import { Component } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],

})
export class ProcessComponent {
  constructor() {
    AOS.init();
  }
}
