$(function() {
	
	// parallax animation
	    $(window).on('scroll',function(){
	        var WindowTop = $(window).scrollTop();
	        $('.section, .slidingWrap').each(function(i){
	            if(WindowTop > $(this).offset().top - 79 && 
	               WindowTop < $(this).offset().top + $(this).outerHeight(true)
	              ){
	               $('#menu li a, .subNavWrap li a').removeClass('active');
	               $('#menu li, .subNavWrap li').eq(i).find('a').addClass('active');
	            }
	        });
	        $('.slidingWrap').each(function(i){
	            if(WindowTop > $(this).offset().top - 79 && 
	               WindowTop < $(this).offset().top + $(this).outerHeight(true)
	              ){
	               $('.subNavWrap li a').removeClass('active');
	               $('.subNavWrap li').eq(i).find('a').addClass('active');
	            }
	        });
	    });
	    $('a[href*=#]:not([href=#])').click(function() {
	     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	       var target = $(this.hash);
	       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	       if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	       }
	     }
	    }); 
	    // end
	    // banner translate effect
	    	$(function(){
              $('.allBannerSection, .polandImageWrap').each(function() {
                var off = $(this).offset().top
                $(this).data('orig-offset', off);
              });
              $(window).scroll(function(){
                var scrollTop = $(window).scrollTop();

                 $('.allBannerSection, .polandImageWrap').each(function(){
                  var off = $(this).data('orig-offset');                
                   
                  if (scrollTop >= off) {
                    var translate =  (scrollTop - off) / $(window).height() * 100;
                    var opacity = 1 - (3*scrollTop / 1000);
                    // console.log(opacity);
                    $(this).css({transform: 'translateY(' + translate +'px)'});
                    $(this).css('opacity', opacity);
                  }
                 });
              });
            });        
	    // end

        // animation header menu mobile
			$("#menu a").click(function() {
			    $("#menu a").removeClass("active");
			    $(this).addClass("active");
			});
			$(".toggleIcon").click(function() {
			    $('.contactUsBtn').toggleClass('show');
			    $('body').toggleClass('overflow-hidden');
			    $('.rightNavLinks').toggleClass('show');
			    $(this).toggleClass('goRight');
			    $('.rightNavLinks ul').toggleClass('fadeInUp');
			});
        // end
       
          
		// owl carosle initialising function
			 var owl = $('.owl-carousel');
		        owl.owlCarousel({
		            margin: 0,
		            loop: false,
		            animateOut: 'fadeOut',
		            responsive: {
		                0: {
		                    items: 1
		                },
		                600: {
		                    items: 1
		                },
		                1000: {
		                    items: 1
		                }
		            }
		        })

		        // for about us page
		        	var owl = $('.empoweringCompaniesWrap .owl-carousel');
		                owl.owlCarousel({
		                    margin: 0,
		                    loop: false,
		                    animateOut: 'fadeOut',

		                    responsive: {
		                        0: {
		                            items: 1
		                        },
		                        600: {
		                            items: 1
		                        },
		                        1000: {
		                            items: 1
		                        }
		                    }
		               	})
		        // end
		        // custom accordion 
		        	 $(".singleFaqQuestions > a").click(function(){                     
	                    $(this).toggleClass("showAnswer");                    
	                    $(this).parent().find(".singleFaqAnswer").toggleClass("show");
                	});
		        // end
		        // add box shadow to header
		        	$(window).scroll(function() {    
		                var scroll = $(window).scrollTop();                 
		                    if (scroll >= 100) {
		                        $(".boxShadowOnScroll").css("box-shadow", "0 2px 4px rgba(0,0,0,.03)");
		                    }
		                    else{
		                        $(".boxShadowOnScroll").css("box-shadow", "0 0px 0px rgba(0,0,0,.03)");
		                    }
		            }); 
		        // end

      });