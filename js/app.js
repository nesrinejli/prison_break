(function($) {
   //Carousel Avis Accueil
   $('.container-avis').slick({
    fade: true,
   });
   //Fin Carousel Avis Accueil

   //Animation page d'accueil
   var y = $(this).scrollTop();
   if (y < 420) {
      $('.block-intro h1, .block-synopsis').each(function(i) {
         var $li = $(this);
         setTimeout(function() {
             $li.addClass('anim');
         }, i * 500); // delay 500 ms
      });
   }
   if (y > 200) {
      setInterval(function() { $('.block-freres .block-one').addClass('anim') }, 0);
      setInterval(function() { $('.block-intro h1, .block-synopsis').addClass('anim') }, 0);
   }
   if (y > 590) {
      setInterval(function() { $('.block-freres .block-two').addClass('anim') }, 0);
      setInterval(function() { $('.block-intro h1, .block-synopsis').addClass('anim') }, 0);
   }
   $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 200) {
         setInterval(function() { $('.block-freres .block-one').addClass('anim') }, 0);
         setInterval(function() { $('.block-intro h1, .block-synopsis').addClass('anim') }, 0);
      }
      if (y > 590) {
          setInterval(function() { $('.block-freres .block-two').addClass('anim') }, 0);
          setInterval(function() { $('.block-intro h1, .block-synopsis').addClass('anim') }, 0);
      }
  });
   //Fin Animation page d'accueil

   //Animation Block perso casting
   $('.block-prota .titre-block, .container-perso .block-perso').each(function(i) {
      var $li = $(this);
      setTimeout(function() {
          $li.addClass('anim');
      }, i * 500); // delay 500 ms
   });
   //Fin Animation Block perso casting
})(jQuery);