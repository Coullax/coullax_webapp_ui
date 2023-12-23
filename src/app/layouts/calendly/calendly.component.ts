import {Component, Inject, OnInit} from '@angular/core';


@Component({
  selector: 'app-calendly',
  templateUrl: './calendly.component.html',
  styleUrls: ['./calendly.component.scss'],

})
export class CalendlyComponent implements OnInit{
  url ='https://calendly.com/ushansan99/30min'
  constructor() {}
  ngOnInit() {
    window.Calendly.initInlineWidget({
      url: this.url,
      parentElement: document.querySelector('.calendly-inline-widget')
    });
  }

}
