import { Component, OnInit } from '@angular/core';
import Flickity from 'flickity';

@Component({
  selector: 'app-review-bar',
  templateUrl: './review-bar.component.html',
  styleUrls: ['./review-bar.component.scss']
})
export class ReviewBarComponent implements OnInit {

  ngOnInit(): void {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", 'true');

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          (duplicatedItem as Element).setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }

    let tickerSpeed = 1;
    let flickity = null;
    let isPaused = false;

    const update = () => {
      if (isPaused) return;
      if (flickity.slides) {
        flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
        flickity.selectedIndex = flickity.dragEndRestingSelect();
        flickity.updateSelectedSlide();
        flickity.settle(flickity.x);
      }
      window.requestAnimationFrame(update);
    };

    const pause = () => {
      isPaused = true;
    };

    const play = () => {
      if (isPaused) {
        isPaused = false;
        window.requestAnimationFrame(update);
      }
    };

    const slideshowEl = document.querySelector('.js-slideshow');
    addAnimation(); // Add animation initially

    flickity = new Flickity(slideshowEl, {
      autoPlay: false,
      prevNextButtons: false,
      pageDots: false,
      draggable: true, // Set the draggable option to true or false as needed
      wrapAround: true,
      selectedAttraction: 0.015,
      friction: 0.25
    });

    // Rest of your code, event listeners, etc.

    flickity.on('dragStart', () => {
      isPaused = true;
    });
  }

}
