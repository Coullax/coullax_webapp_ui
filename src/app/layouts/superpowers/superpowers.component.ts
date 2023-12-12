import { Component } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-superpowers',
  templateUrl: './superpowers.component.html',
  styleUrls: ['./superpowers.component.scss']
})
export class SuperpowersComponent {
  constructor() {
    AOS.init();
  }
}
