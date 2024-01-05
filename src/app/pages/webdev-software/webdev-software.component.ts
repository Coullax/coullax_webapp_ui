import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import anime from 'animejs/lib/anime.es.js';
import gsap from  'gsap'

@Component({
  selector: 'app-webdev-software',
  templateUrl: './webdev-software.component.html',
  styleUrls: ['./webdev-software.component.scss']
})
export class WebdevSoftwareComponent implements OnInit , AfterViewInit{
  showNaveBar:boolean=true;
  constructor(public breakpointObserver: BreakpointObserver) {
  }
  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showNaveBar = true;
        } else {
          this.showNaveBar = false;
        }
      });



  }

  ngAfterViewInit() {
//     let code: any = {
//       targets: '#webdev-animation #Code *',
//       scaleX: [
//         { value: 0, duration: 0},
//         { value: 1, duration: 200 }
//       ],
//       easing: 'linear',
//       delay: anime.stagger(70) // increase delay by 100ms for each elements.
//     };
//
//     let tl = anime.timeline({
//       loop: true
//     });
//
// // code
//     tl.add(code);
//
// // window change
//     tl.add({
//       targets: '#webdev-animation #in-browser',
//       opacity: [
//         { value: 1, duration: 0 }
//       ],
//       scaleY: [
//         { value: 0, duration: 0 },
//         { value: 1, duration: 1000 }
//       ]
//     });
//
// // hero
//     tl.add({
//       targets: [
//         '#webdev-animation #in-browser #hero',
//         '#webdev-animation #in-browser #Logo',
//         '#webdev-animation #in-browser #menu',
//         '#webdev-animation #in-browser #h1'
//       ],
//       opacity: [
//         { value: 1, duration: 0 }
//       ],
//       scaleY: [
//         { value: 0, duration: 0 },
//         { value: 1, duration: 1000 }
//       ],
//       delay: anime.stagger(300)
//     });
//
// // body
//     tl.add({
//       targets: [
//         '#webdev-animation #in-browser #body_text *'
//       ],
//       opacity: [
//         { value: 1, duration: 0 }
//       ],
//       scaleX: [
//         { value: 0, duration: 0},
//         { value: 1, duration: 200 }
//       ],
//       easing: 'linear',
//       delay: anime.stagger(50) // increase delay by 100ms for each elements.
//     });
//
// // image
//     tl.add({
//       targets: '#webdev-animation #in-browser #image',
//       opacity: [
//         { value: 1, duration: 0 }
//       ],
//       scale: [
//         { value: 0, duration: 0 },
//         { value: 1, duration: 1000 }
//       ]
//     });

    let tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3
    })

    tl.fromTo('.js-code-line', {
      scaleX: 0,
      transformOrigin: 'left center'
    }, {
      scaleX: 1,
      transformOrigin: 'left center',
      duration: 0.15,
      stagger: 0.1
    })

    tl.from('.js-layout-frame', {
      y: '+=20',
      opacity: 0,
      duration: 0.3,
      ease: 'power1.out'
    })

    tl.from('.js-layout-els > *', {
      opacity: 0,
      duration: 0.3,
      stagger: 0.1
    })
  }
}
