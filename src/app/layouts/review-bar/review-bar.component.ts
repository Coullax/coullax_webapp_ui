import { Component, OnInit } from '@angular/core';
import Flickity from 'flickity';

@Component({
  selector: 'app-review-bar',
  templateUrl: './review-bar.component.html',
  styleUrls: ['./review-bar.component.scss']
})
export class ReviewBarComponent implements OnInit {

  reviews1:any = [];
  reviews2:any = [];
  ngOnInit(): void {
    this.reviews1 = [
      {
        name:'nikodejonghe77',
        profile:'assets/review_profile/Mark.svg',
        ratings: "5",
        feedback:'Very good communication and quality of work!'
      },

      {
        name:'cristianodev',
        profile:'assets/review_profile/Mark2.svg',
        ratings: "5",
        feedback:'A nice designer, he got the concept right away and he was able to give me multiple revisions until we got the concept we were looking for.'
      },

      {
        name:'jossiecotto444',
        profile:'assets/review_profile/Mark4.svg',
        ratings: "5",
        feedback:'The artist made sure I got to know the process. He approached to our communication in the best manner and was always taking my references in details. I will keep business with him because I feel confident working with people that have word, talent, high-end skills, and make it easy for first timers. I loved working with him for 4 days, everything was real easy and beautiful!'
      }
      ,

      {
        name:'msgeorgiarose',
        profile:'assets/review_profile/Mark5.svg',
        ratings: "5",
        feedback:'The output turned out great as coullax was willing to make necessary changes to meet our needs. Would work with them again.'
      }
      ,

      {
        name:'jamin89',
        profile:'assets/review_profile/Mark8.svg',
        ratings: "5",
        feedback:'Creating an AMAZING NFT Collection. Super prompt, great to work with...SUPERIOR results!!!'
      }
    ]

    this.reviews2 = [
      {
        name:'alextima10',
        profile:'assets/review_profile/Mark1.svg',
        ratings: "5",
        feedback:'Best experience I’ve had . Professional and smooth. Communication and understanding of my requests was impressive. Delivered a quality product.'
      },
      {
        name:'joeyaji',
        profile:'assets/review_profile/Mark1.svg',
        ratings: "5",
        feedback:'The Coullax team is very talented, creative and communicative. We had a very large project project of 8000 nfts and the team worked incredibly hard and created a very beautiful collection that will go on to sell out. We will be using them again for our next project. \n' +
          'I recommend them very highly. Thank you Coullax team! Excited to work together again in the future.'
      },
      {
        name:'zac18992',
        profile:'assets/review_profile/Mark6.svg',
        ratings: "5",
        feedback:'Coullax really went into detail and, although we had a lot of requests, fulfilled them all with great patience. Awesome designs!'
      },
      {
        name:'efrencreates',
        profile:'assets/review_profile/Mark7.svg',
        ratings: "5",
        feedback:'very knowledgeable and professional, best I could find!'
      },
      {
        name:'ryanmcgurl947',
        profile:'assets/review_profile/Mark9.svg',
        ratings: "5",
        feedback:'Creating an AMAZING NFT Collection. Super prompt, great to work with...SUPERIOR results!!!'
      },
    ];

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

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

}
