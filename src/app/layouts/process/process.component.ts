import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
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
