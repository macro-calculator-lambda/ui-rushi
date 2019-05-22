
$(window).scroll(function () {
    let top = $(window).scrollTop();
    if (top >= 60) {
        $('header').addClass('secondary');
    }
    else if ($('header').hasClass('secondary')) {
        ($('header').removeClass('secondary'))
    }

})


//  carousel

let carousel = document.querySelectorAll('.slider-carousel li');
carousel = Array.from(carousel)
console.log(carousel);

function switchCarousel() {
    // Hides all elements
    carousel.forEach(function (element, index) {
        element.classList.add('slider-content')
    });

    // Shows only 1
    const randomElementIndex = Math.floor(Math.random() * carousel.length);
    carousel[randomElementIndex].classList.remove('slider-content');
}

switchCarousel();

setInterval(function() {
    switchCarousel();
}, 1000 * 5);





