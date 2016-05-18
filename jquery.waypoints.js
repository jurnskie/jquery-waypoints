/**
 * Waypoints v1.0 - Add css classes on given waypoints
 * http://github.com/jurnskie/jquery-waypoints
 */

(function ( $ ) {


    $.fn.is_on_screen = function(){
       var win = $(window);
       var viewport = {
           top : win.scrollTop(),
           left : win.scrollLeft()
       };
       viewport.right = viewport.left + win.width();
       viewport.bottom = viewport.top + win.height();

       var bounds = this.offset();
       bounds.right = bounds.left + this.outerWidth();
       bounds.bottom = bounds.top + this.outerHeight();

       return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
   };



    $.fn.waypoints = function ( options ){
      
       var elements = $(this),
           win = $(window),
           ww = win.width(),
           settings = $.extend({
                scrollTopOffset         : 25,
                addedClass     : 'animate',
                menuClass      : null,
                activeOnWidth  : 700
           }, options),
          scrollTop = (settings.menuClass === null) ? 
                win.scrollTop() + $('.' + settings.menuClass).outerHeight() + settings.scrollTopOffset : win.scrollTop()  + settings.scrollTopOffset;

       win.scroll(function(e){
         if(ww > settings.activeOnWidth){
            return elements.each(function(){
                 el = $(this);
                 sec = el.attr('data-section');

                 if(el.attr('data-waypoint')){
                  waypoint = el.data('waypoint');
                  elOffsetTop = $('.'+waypoint).offset().top;

                  (elOffsetTop <= scrollTop) ? $(this).addClass(settings.addedClass) : $(this).removeClass(settings.addedClass);

                 }else{
                   
                  ($('.' + sec).is_on_screen() ) ? $(this).addClass(settings.addedClass) : $(this).removeClass(settings.addedClass);

                 }

             });
          }
      });  
         
    };
 
}( jQuery ));


