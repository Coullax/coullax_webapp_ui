import { Component } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-redirect-cards',
  templateUrl: './redirect-cards.component.html',
  styleUrls: ['./redirect-cards.component.scss']
})
export class RedirectCardsComponent {
  constructor() {
    AOS.init();
  }
}
