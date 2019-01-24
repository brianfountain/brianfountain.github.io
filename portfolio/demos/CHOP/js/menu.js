$(function() { 
    
    mb = $('#header .menu-button');
    o = false;
    
    //$('body').append("<div class='menu-cover menu-hidden'></div>");
    
    mb.click(function(evt) {
        evt.preventDefault();
        if (mb.hasClass('selected')) {
            mb.removeClass('selected');
            $(".items").toggle();
        } else {
            mb.addClass('selected');
            $(".items").toggle();
        }
        
        //*if (o == false){$('.menu-cover').removeClass('menu-hidden').addClass('menu-shown');} else { }        
    });
    
    $(".topic, .subtopic").click(function(evt) {
        evt.preventDefault();
        mb.removeClass('selected');
        $(".items").toggle();
        var trgt = $(this).attr('href');
        toggleScrollPosition($(trgt).offset().top + 20);
    });
    
    function toggleScrollPosition(anc){
       $('body, html').animate({scrollTop:anc,easing:'swing'}, 1500);
    }
    
    /*$('.menu-cover').click(function(evt) {evt.preventDefault(); close();});
    function viewport() {return $(window).innerWidth();}
    function close() {$('.menu-cover').removeClass('menu-shown').addClass('menu-hidden');}*/
    
    
    /* -- Scroll up functionality -- */
    var doc = 0;
    var pos = $(window).scrollTop();
    
    toggleScrollUp(pos);
    
    $(window).scroll(function() {
        toggleScrollUp($(window).scrollTop()) 
    }); 
    
    function toggleScrollUp(coord, percent) {
        doc = $(document).height()
        var pos = coord/doc;
        var perc = Math.round(pos*100)/100;
            
        //if (perc > 0.25){ 
        if ($(window).scrollTop() > 1200){ 
            $('.scroll-up').removeClass('hide').addClass('show');   
        } else {
            $('.scroll-up').removeClass('show').addClass('hide');
        }
    }
    
    $('.scroll-up').click(function(e) {
        toggleScrollPosition(0)
    });
    
    
    
});  