var swiperGall = false;
var swiperGallDom = document.querySelector('.swiperGall');
var swiperWrapperDom = swiperGallDom.querySelector('.gallery__grid');
var swiperSlideDom = swiperGallDom.querySelectorAll('.gg_wrap');
var swiperAction = function () {
	if (window.innerWidth < 768 && !swiperGall) {
		swiperGallDom.classList.add('swiper');
		swiperWrapperDom.classList.add('swiper-wrapper');
		swiperWrapperDom.classList.remove('gallery__grid');
		swiperSlideDom.forEach(el => {
			el.classList.add('swiper-slide');	
		});

		swiperGall = new Swiper('.swiper', {
			loop: true,
			slidesPerView: '2',
			spaceBetween: 2,
			slidesPerGroup: 2,
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	} else if (window.innerWidth > 767 && swiperGall) {
		swiperGall.destroy(true, true);
		swiperGall = false;
		swiperGallDom.classList.remove('swiper');
		swiperWrapperDom.classList.remove('swiper-wrapper');
		swiperWrapperDom.classList.add('gallery__grid');
	}
};
swiperAction();

// Window resize
var resizeTimer;

window.addEventListener('resize', function() {

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
  
    swiperAction();
       
  }, 250);

});



