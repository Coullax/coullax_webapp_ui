import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show(undefined, {
      type: 'ball-scale-multiple',
      fullScreen: true,
    });

    setTimeout(() => {
      this.spinner.hide().then(r => {});
    }, 2000);
  }
}
