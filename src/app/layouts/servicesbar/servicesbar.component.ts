import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-servicesbar',
  templateUrl: './servicesbar.component.html',
  styleUrls: ['./servicesbar.component.scss']
})
export class ServicesbarComponent {
  constructor() {
    AOS.init();
  }

}
