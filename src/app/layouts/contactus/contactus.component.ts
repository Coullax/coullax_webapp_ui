import { Component } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  constructor() {
    AOS.init();
  }
}
