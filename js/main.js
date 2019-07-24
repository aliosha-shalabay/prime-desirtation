$("input[type='number']").inputSpinner();
jQuery(document).ready(function () {
    if ($(document).width() < 768)
        $(".slider").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }],
        });
    // $(".slider2").slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // });
    $('.show-more').on("click", function (e) {
        e.preventDefault();
        $(".b3-section11").fadeIn();
        $(".b3-section12").fadeIn();
        $(".hide-more").css('display', 'block');
        $('.show-more').hide();
    })
    $('.hide-more').on("click", function (e) {
        e.preventDefault();
        $(".b3-section11").fadeOut();
        $(".b3-section12").fadeOut();
        $(".show-more").css('display', 'block');
        $('.hide-more').hide();

        var top = $('.show-more').offset().top;
        console.log(top);
        $('body,html').animate({scrollTop: top - 300}, 1500);
    })
});
