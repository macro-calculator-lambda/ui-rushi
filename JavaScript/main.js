// jQuery(document).ready(function () {
//     'use strict';
//     $('#slider-carousel').carouFredSel({
//         responsive: true,
//         width: '100%;',
//         circular: true, 
//         scroll: {
//             items: 1, 
//             easing: 'linear',
//             duration: 500,
//             pauseOnHover: true
//         },
//         auto: true,
//         items: {
//             visible: {
//                 min: 1,
//                 max: 1,
//             },
//             height: 'variable'
//         },
//         pagination: {
//             container: '.sliderpager',
//             pageAnchorbuilder: false 
//         }
        
//     })



$(window).scroll(function() { 
    let top = $(window).scrollTop(); 
    if(top >= 60) {
        $('header').addClass('secondary');
    }
    else if($('header').hasClass('secondary')){
        ($('header').removeClass('secondary'))
    } 

})

 

