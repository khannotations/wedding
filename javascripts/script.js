$(document).ready(function() {
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
    /* Check the location of each desired element */
    $('.fade-in-scroll').each( function(i){
      var topObject = $(this).position().top + 100;
      var bottomWindow = $(window).scrollTop() + $(window).height();
      
      /* If the object is completely visible in the window, fade it it */
      if(bottomWindow > topObject) {
        $(this).animate({ 'opacity':'1' }, 2000);
      }
    });
  });

  $(window).scroll();
});