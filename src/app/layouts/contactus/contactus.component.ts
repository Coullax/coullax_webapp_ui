import {Component, HostListener} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {CalendlyComponent} from "../calendly/calendly.component";
import * as $ from 'jquery';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent {

  a: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    var oTop = document.getElementById('counter').offsetTop - window.innerHeight;
    if (this.a === 0 && window.pageYOffset > oTop) {
      document.querySelectorAll('.counter-value').forEach((el: HTMLElement) => {
        var $this = el;
        var countTo = parseInt($this.getAttribute('data-count'));
        $({
          countNum: parseInt($this.textContent)
        }).animate({
          countNum: countTo
        }, {
          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.textContent = Math.floor(this.countNum).toString();
          },
          complete: function() {
            $this.textContent = this.countNum.toString();
          }
        });
      });
      this.a = 1;
    }
  }

  constructor(public dialog: MatDialog) {

  }


  url ='https://calendly.com/ushansan99/30min'
  // sheduleCall(){
  //   window.Calendly.initInlineWidget({
  //     url: this.url,
  //     parentElement: document.querySelector('.calendly-inline-widget')
  //   });
  // }
  scheduleCall() {
    this.dialog.open(CalendlyComponent, {
      width:'600px',   // Set width to 600px
      height:'auto',
    });
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
export {};
declare global {
  interface Window {
    Calendly: any;
  }
}
