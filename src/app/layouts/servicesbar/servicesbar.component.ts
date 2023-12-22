import { Component } from '@angular/core';
import AOS from "aos";
import {Router} from "@angular/router";

@Component({
  selector: 'app-servicesbar',
  templateUrl: './servicesbar.component.html',
  styleUrls: ['./servicesbar.component.scss']
})
export class ServicesbarComponent {
  constructor(private router:Router) {
    AOS.init();
  }

  navigatePages(){
    this.router.navigate(["/app/blockchain-dev"]);
  }

}
