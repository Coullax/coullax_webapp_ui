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
      id: 'https://www.youtube.com/embed/Rn_xxo6ba4k?showinfo=0&enablejsapi=1&origin=http://localhost:9000'
    },
    {
      id: 'http://www.youtube.com/watch?v=wytv3C6o4AE&ab_channel=CotneusProd.'
    },
    {
      id: 'http://www.youtube.com/watch?v=RgKAFK5djSk&ab_channel=WizKhalifaMusic'
    }
  ]


}