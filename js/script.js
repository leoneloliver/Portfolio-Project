$( document ).ready(function() {
  
  
  $('.project-item').each(function(i){
    if(i >= 6){
		  $(this).addClass('isHide');
		  $('#load-more').removeClass('isHide');
	  }
  });
  
  $('#load-more').on('click',function(){
    $(this).fadeOut();
    $('.project-item').fadeIn(3000);
   
  })
  
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  // menu mobile
  $(".icon-menu").on('click', function(){
     $('.mobi-menu').addClass("show-menu");
  });
  $(".mobi-menu li a, .close-menu").on('click', function(){
      $('.mobi-menu').removeClass("show-menu");
  });
  
  // parallax
  $('.banner').each(function(){
    var $obj = $(this);
    $(window).scroll(function() {
       var yPos = -($(window).scrollTop() / 3); 
  			var bgpos = '50% '+ (yPos - 320) + 'px';
  			$obj.css('background-position', bgpos );
      
        if($(window).scrollTop() > 60){
          $('.strip').addClass('strip--opacity');
        }else{
          $('.strip').removeClass('strip--opacity');
        }
      
    });
  });
});
