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
    regionsMap()

});

function regionsMap() {

    function _init() {
        _loadMap();
        _setEvents();
    }

    function _loadMap() {
        $.getJSON('js/map.json', function(data) {
            var jsonMap = data["map"] || null;

            if(jsonMap) {
                _setMap(jsonMap.replace(/&quot;/g, '"'));
            }
        });
    }

    function _setMap(map) {
        if($('.js-load-svg').length && map) {
            $('.js-load-svg').html(map);
        }
    }

    function _setEvents() {
        $('.regions-map').on('mouseenter', '.svg-map-path', function() {
            $('.regions-menu-list').find('.regions-menu__item').removeClass('active');
            $('.regions-menu-list').find('.regions-menu__item[data-region="'+ $(this).attr('id') +'"]').addClass('active');
        });

        $('.regions-map').on('mouseleave', '.svg-map-path', function() {
            $('.regions-menu-list').find('.regions-menu__item').removeClass('active');
        });

        $('.regions-map').on('click', '.svg-map-path', function() {
            window.location.href = $('.regions-menu-list').find('.regions-menu__item[data-region="'+ $(this).attr('id') +'"]').attr('href');
        });

        $('.regions-menu-list a').hover(function() {
            $('#menu-map').find('#' + $(this).attr('data-region') + '').addClass('active');
        },
        function() {
            $('#menu-map').find('#' + $(this).attr('data-region') + '').removeClass('active');
        });
    }

    return _init()
}