// var width;
// $(window).ready(function(){
//      width = $(window).width();
// });

// $('a[href*=#]').click(function (e) {
//     e.preventDefault();

//     var id = $(this).attr('href');

//     if (width < 768) {
//         var scrollTo = $(id).offset().top - 0;
//     }
//     else
//     {
//         var scrollTo = $(id).offset().top - 79;
//     }

//     $('html,body').animate({
//         'scrollTop': scrollTo
//     }, 1000);
// });



// $(document).scroll(function () {
//     highlightSection();
// });

// function highlightSection() {
//     // Where's the scroll at?
//     var currentPosition = $(this).scrollTop();

//     // Remove highlights from all
//     //$('a[href*=#]').removeClass('active');

//     // Loop over each section
//     $('.parallax section').each(function () {
//         // Calculate the start and end position of the section
//         var sectionStart = $(this).offset().top ;
//         // alert(sectionStart);
//         var sectionEnd = sectionStart + $(this).height();

//         // If the current scroll lies between the start and the end of this section
//         if (currentPosition >= sectionStart  && currentPosition < sectionEnd) {
//             // Highlight the corresponding anchors
//             //$('a[href=#' + $(this).attr('id') + ']').addClass('active');
//         }
//     });
// };





// // Call on page load too!
// highlightSection();



$(function() {
    $(window).on('scroll',function(){
        var WindowTop = $(window).scrollTop();
        $('.section, .slidingWrap').each(function(i){
            if(WindowTop > $(this).offset().top - 79 && 
               WindowTop < $(this).offset().top + $(this).outerHeight(true)
              ){
                $('#menu li a, .subNavWrap a').removeClass('active');
               $('#menu li, .subNavWrap').eq(i).find('a').addClass('active');
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
      });