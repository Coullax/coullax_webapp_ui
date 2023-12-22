import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-slider-bar',
  templateUrl: './slider-bar.component.html',
  styleUrls: ['./slider-bar.component.scss'],
})
export class SliderBarComponent implements OnInit, AfterViewInit {
  swiperConfig: any = {
    slidesPerView:1,
    spaceBetween:30,
    breakpoints: {
      900: {
        slidesPerView:2,
      }
    },
    navigation:true,
    loop:true,
    autoplay:{delay: 1000,disableOnInteraction: false},
  }
  @ViewChild('swiper', { static: false }) swiperEl!: ElementRef;

  lightbox: any;
  swiper: Swiper | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.initSwiper();
  }

  // initSwiper(): void {
  //   this.swiper = new Swiper(this.swiperEl.nativeElement, {
  //     slidesPerView: 'auto',
  //     spaceBetween: 1,
  //     breakpoints: {
  //       640: {
  //         slidesPerView: 2,
  //       },
  //       1024: {
  //         slidesPerView: 3,
  //       },
  //       1920: {
  //         slidesPerView: 2,
  //       },
  //     },
  //   });
  // }

  playVideo(url: any) {
    debugger;

    this.lightbox = GLightbox({
      'href': `${url}`,
      'type': 'video',
      'source': 'youtube',
      'width': 300,
      'autoplayvideo': true,
    });
    this.lightbox.open();
    this.lightbox.on('open', () => {

    });
    this.lightbox.on('close', () => {
      this.lightbox.destroy();
    });
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
  ];
}
