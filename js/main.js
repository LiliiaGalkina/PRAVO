'use strict'

   $(document).ready(function(){
		$('.slidercustom').slick({
			infinite: false,
			slidesToShow: 2,
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 1
					}
				}
			]
      });
      
   $('.slidercustom').on('afterChange', function (event, slick, currentSlide) {
    
   if(currentSlide === 3) {
      $('.slick-next').addClass('hidden');
   } else {
      $('.slick-next').removeClass('hidden');
   }

   if(currentSlide === 0) {
      $('.slick-prev').addClass('hidden');
   } else {
      $('.slick-prev').removeClass('hidden');
   }  
    })
	})


   

/*------------------------------------------------------------------*/

let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');

burger.addEventListener('click', func);

function func() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
}

/*----------------------------------------------------------------------*/


