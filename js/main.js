$(function(){
    $('.slider').slick({
        dots: true,
        fade: true,
        arrows: false,
        autoplay: 3000
      });

      
    /* Fixed Header */

    // let header = $('#header');
    // let intro = $('#intro');
    // let introH = intro.innerHeight();
    // let scrollPos = $(window).scrollTop();
    // let nav = $('#nav');
    // let navToggle = $('#navToggle');

    // checkScroll(scrollPos,introH);

    // $(window).on('scroll resize', function() {
    //    introH = intro.innerHeight();
    //    scrollPos = $(this).scrollTop();
       
    //    checkScroll(scrollPos,introH);
    // });

    // function checkScroll(scrollPos,introH) {
    //    if( scrollPos > introH ) {
    //        header.addClass('fixed');
    //    }  else {
    //        header.removeClass('fixed');
    //    }
    // }



    $('[data-scroll]').on('click', function (event) {
      event.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      $('menu').removeClass('active');

      console.log(elementOffset);

      $('html, body').animate({
          scrollTop: elementOffset - 70
      }, 700);
  });


  /* Nav Toggle */

  $('.burger').on('click', function() {
    $('.menu').addClass('active');
  }); 
  $('.close-btn').on('click', function() {
    $('.menu').removeClass('active');
  }); 


      $(window).scroll(function() {    // this will work when your window scrolled.
       var height = $(window).scrollTop();  //getting the scrolling height of window
       if(height  > 900) {
         $(".header").css({"position": "fixed"});
         $(".header-content").css({"opacity": "0"});
         $(".header-top").css({"background-color": "rgba(0, 0, 0, 0.200)"});
       } else{
         $(".header").css({"position": "absolute"});
         $(".header-content").css({"opacity": "1"});
         $(".header-top").css({"background-color": "rgba(255, 255, 255, 0)"});
       }
     });

    /*AOS Instance */
    AOS.init();
});