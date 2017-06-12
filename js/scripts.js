(function () {

    // mobile nav
    $('.mobile-btn').on('click', function() {
        $('.main-nav ul').toggleClass('active');
    });

    // twitter activation 
    $('.twit-toggle').on('click', function() {
        $(this).toggleClass('active');
        $('.fa-plus').toggleClass('fa-minus');
        $('.twitter').toggleClass('extend');
        $('.twitter-posts').toggleClass('dropdown');
    });

    // slickjs carousel starter
    $('.envoy-hero').slick({
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                }
            }
        ]
    });

    // add font awesome classes
    $('.envoy-hero .slick-prev').html("<i class='fa fa-angle-left'></i>");
    $('.envoy-hero .slick-next').html("<i class='fa fa-angle-right'></i>");

})();