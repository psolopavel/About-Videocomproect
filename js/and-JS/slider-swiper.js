let wrapper = document.querySelector('.wrapper')
const PageSlider = new Swiper('.page', {
   wrapperClass: "page__wrapper",
   slideClass: 'page__screen',
   direction: 'vertical',
   slidesPerView: 'auto',

   parallax: true,

   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
   },
   mousewheel: {
      sensitivity: 1,
   },

   watchOverflow: true,

   speed: 800,

   observe: true,

   observeParents: true,

   observeSlideChildren: true,

   pagination: {
      el: '.page__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: "page__bullet",
      bulletActiveClass: "page__bullet_active"
   },
   scrollbar: {
      el: '.page__scroll',
      dragClass: "page__drag-scroll",
      draggable: true,
   },
   init: false,
   on: {
      init: function () {
         menuSlides();
         SetscrollType()
         wrapper.classList.add('_loaded');
      },
      slideChange: function () {
         MenuSliderRemove()
         menuLinks[PageSlider.realIndex].classList.add('_active')
      },
      resize: function () {
         SetscrollType()
      }
   },
});

let menuLinks = document.querySelectorAll('.header__link')
function menuSlides() {
   if (menuLinks.length) {
      menuLinks[PageSlider.realIndex].classList.add('_active')
      for (let index = 0; index < menuLinks.length; index++) {
         const menuLink = menuLinks[index];
         menuLink.addEventListener('click', e => {
            MenuSliderRemove()
            PageSlider.slideTo(index, 800)
            menuLink.classList.add('_active')
            e.preventDefault()
         })
      }
   }
}
function MenuSliderRemove() {
   let menuActive = document.querySelector('.header__link._active')
   if (menuActive) {
      menuActive.classList.remove('_active')
   }
}
function SetscrollType() {
   if (wrapper.classList.contains('_free')) {
      wrapper.classList.remove('_free');
      PageSlider.params.freeMode = false;
   }
   for (let index = 0; index < PageSlider.slides.length; index++) {
      const PageSlid = PageSlider.slides[index];
      const PageSlideContent = PageSlid.querySelector('.screen__content')
      if (PageSlideContent) {
         const PageContentHeight = PageSlideContent.offsetHeight;
         if (PageContentHeight > window.innerHeight) {
            wrapper.classList.add('_free');

            PageSlider.params.freeMode = {
               enabled: true,
               minimumVelocity: 0.02,
               momentum: true,
               momentumBounce: true,
               momentumBounceRatio: 1,
               momentumRatio: 1,
               momentumVelocityRatio: 1,
               sticky: false,
            }
            break;
         }
      }
   }
}
PageSlider.init();

const AboutSlider = new Swiper('.about-image__slider', {
   slidesPerView: 1,
   spaceBetween: 70,
   slidesPerView: 1,
   grabCursor: true,
   centeredSlides: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   speed: 1200,
})
const ProductSlider = new Swiper('.stupenka-image__slider', {
   slidesPerView: 1,
   spaceBetween: 30,
   grabCursor: true,
   centeredSlides: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   speed: 1200,
})