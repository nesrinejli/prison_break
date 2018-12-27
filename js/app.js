(function($) {
   //Carousel Avis Accueil
   $('.container-avis').slick({
    fade: true,
   });
   //Fin Carousel Avis Accueil

   //Animation Block perso casting
   $('.block-prota .titre-block, .container-perso .block-perso').each(function(i) {
      var $li = $(this);
      setTimeout(function() {
          $li.addClass('anim');
      }, i * 500); // delay 500 ms
   });
   //Fin Animation Block perso casting
})(jQuery);