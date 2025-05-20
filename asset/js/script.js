
$(document).ready(function () {
    $('.my-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        pauseOnHover: true,

        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev first-slider-one"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next first-slider-two"><i class="fa fa-angle-right"></i></button>',


        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});



$(document).ready(function () {
    $('.last-slider-index-page').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 4000,
        autoplay: true,
        speed: 600,
        pauseOnHover: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class=" index-last-slider-one"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class=" index-last-slider-two"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
}
);



