
$(window).scroll(function() { 
    let top = $(window).scrollTop(); 
    if(top >= 60) {
        $('header').addClass('secondary');
    }
    else if($('header').hasClass('secondary')){
        ($('header').removeClass('secondary'))
    } 

})

 

