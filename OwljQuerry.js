$('.owl-carousel').owlCarousel({
       items:1,
       loop:true,
       center:true,
       margin:10,
       URLhashListener:true,
       autoplayHoverPause:true,
       startPosition: 'URLHash'
   });

       jQuery(function($) {
   	        $(window).scroll(function(){
   	            if($(this).scrollTop()>1){
   	                $('.menu-main').addClass('fixed');
   	            }
   	            else if ($(this).scrollTop()<1){
   	                $('.menu-main').removeClass('fixed');
   	            }
   	        });
   	    });
