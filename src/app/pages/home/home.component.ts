import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  isModalOpen = false;

 openModal() {
   this.isModalOpen = true;
 }

 closeModal() {
   this.isModalOpen = false;
 }
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
   // let audio = new Audio()
   //  audio.src = '../assets/music.mp3';
   // audio.load();
   //  audio.play();
    this.spinner.show(undefined, {
      type: 'ball-scale-multiple',
      fullScreen: true,
    });

    setTimeout(() => {
      this.spinner.hide().then(r => {});
    }, 2000);
  }
}
