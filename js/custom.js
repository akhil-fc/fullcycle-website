$(function() {	
	// parallax animation
	    $(window).on('scroll',function(){
	        var WindowTop = $(window).scrollTop();
	        $('.section').each(function(i){
	            if(WindowTop > $(this).offset().top - 350 && 
	               WindowTop < $(this).offset().top + $(this).outerHeight(true)
	              ){
	               $('#menu li a, .subNavWrap li a').removeClass('active');
	               $('#menu li, .subNavWrap li').eq(i).find('a').addClass('active');
	            }
	        });
	        $('.slidingWrap').each(function(i){
	            if(WindowTop > $(this).offset().top - 125 && 
	               WindowTop < $(this).offset().top + $(this).outerHeight(true)
	              ){
	               $('.subNavWrap li a').removeClass('active');
	               $('.subNavWrap li').eq(i).find('a').addClass('active');
	            }
	        });       
	        
	        
	    });
	    $('#menu a[href*=#]:not([href=#]), .slideToViewJobs, .carrersStoryInnerWrapper a').click(function() {
	    	// alert('home page');
	     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	       var target = $(this.hash);
	       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	       if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 79
	        }, 1000);
	        return false;
	       }
	     }
	    }); 

	    $('.subNavWrap li a[href*=#]:not([href=#])').click(function() {
	     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	       var target = $(this.hash);
	       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	       if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 120
	        }, 1000);
	        return false;
	       }
	     }
	    }); 
	    $('a[href*=#]:not([href=#]).arrowDownIcon').click(function() {
	     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	       var target = $(this.hash);
	       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	       if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 130
	        }, 1000);
	        return false;
	       }

	     }
	    }); 
	    // end
	    // banner translate effect
	    	$(function(){
              $('.allBannerSection, .polandImageWrap, .cst-ContactTop, #slide1').each(function() {
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
                  else{                  	
                  	$(this).css('opacity', '1');
                  }
                 });
                 $('.cst-ContactTop').each(function(){
                  var off = $(this).data('orig-offset');
                  if (scrollTop >= off) {
                    var translate =  (scrollTop - off) / $(window).height() * 100;
                    var opacity = 1 - (1.8*scrollTop / 1000);                    
                    $(this).parent().find('.cst-ContactMain ').css({transform: 'translate3d(0,' + -translate*2 +'px,0)'});
                    $(this).find('.cst-Contact-bg').css('opacity', opacity); 
                  }                
                 });
              });
            });        
	    // end       
            
		        // animation header menu mobile					
					$(".toggleIcon").click(function() {					   
					    $('body').toggleClass('overflow-hidden');
					    $('header').toggleClass('bg-white-click');
					    // $('header').removeClass(' ');

					    $(this).toggleClass('goRight');
					    $('.rightNavLinks, .contactUsBtn').toggleClass('show');			    
					    $('.rightNavLinks ul').toggleClass('animated-nav animatedFadeInUp cstmfadeInUp');
					});
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
		        // owl carosel animation from left
		        	$(".fulldelicatedMemberWrap .owl-nav button").click(function(){
			            $(".owl-item .sliderContentWrap ").removeClass('animation-left ');
			            $(".owl-item.active .sliderContentWrap ").addClass('animation-left ');
          			});
		        // end


        $(window).on('scroll',function(){
                if ($(window).width() > 991) {
                var sticky = $('header'),
                scroll = $(window).scrollTop();
               
                      if (scroll >= 40) { 
                        sticky.addClass('fixed'); }
                      else { 
                       sticky.removeClass('fixed');

                    }
                }
                else {
                   
                }
            });
      });