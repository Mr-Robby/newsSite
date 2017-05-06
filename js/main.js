$(function() {
    $('.js-main-slider').owlCarousel({
        center: true,
        loop: true,
        dots: true,
        nav: true,
        autoplay: true,
        navText: ['<span class="icon-arr-left"></span> Раньше', 'Далее <span class="icon-arr-right"></span>'],
        responsive: {
            768: {
                items: 3
            },
            570: {
                items: 2,
                center: false,
                slideBy: 2
            },
            0: {
                items: 1,
                autoplay: false,
                nav: false
            }
        }
    });

    $('.js-news-slider').owlCarousel({
        items: 3,
        margin: 5,
        center: false,
        loop: true,
        dots: false,
        nav: true,
        autoplay: true,
        navText: ['<span class="icon-arr-left"></span> Раньше', 'Далее <span class="icon-arr-right"></span>'],
        responsive: {
            768: {
                items: 3
            },
            570: {
                items: 2,
                center: false,
                slideBy: 2
            },
            0: {
                items: 1
            }
        }
    });

    $('.js-opinions-slider').owlCarousel({
        items: 4,
        margin: 5,
        center: false,
        loop: true,
        dots: false,
        nav: true,
        autoplay: true,
        navText: ['<span class="icon-arr-left"></span> Раньше', 'Далее <span class="icon-arr-right"></span>'],
        responsive: {
            768: {
                items: 3
            },
            570: {
                items: 2,
                center: false,
                slideBy: 2
            },
            0: {
                items: 1
            }
        }
    });
});