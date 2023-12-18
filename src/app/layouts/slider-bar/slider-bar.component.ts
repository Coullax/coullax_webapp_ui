import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import GLightbox from 'glightbox';
@Component({
  selector: 'app-slider-bar',
  templateUrl: './slider-bar.component.html',
  styleUrls: ['./slider-bar.component.scss'],
})
export class SliderBarComponent implements OnInit {



  lightbox: any;

  constructor() { }

  ngOnInit(): void {
  }


  playVideo(url: any){
    debugger

    this.lightbox = GLightbox({
      'href': `${url}`,
      'type': 'video',
      'source': 'youtube',
      'width': 300,
      'autoplayvideo': true,
    }),
    this.lightbox.open();
    this.lightbox.on('open', ()=>{

    });
    this.lightbox.on('close', ()=>{
      this.lightbox.destroy();
    })
  }


  videoList = [
    {
      id: 'https://youtu.be/KLL6YRm5Dnc?si=Isai7TSvtRJn7Hsz'
    },
    {
      id: 'https://youtu.be/FCcj5_ReYMg?si=FpJeY8OsY3eSJRHf'
    },
    {
      id: 'http://www.youtube.com/watch?v=RgKAFK5djSk&ab_channel=WizKhalifaMusic'
    }
  ]


}
