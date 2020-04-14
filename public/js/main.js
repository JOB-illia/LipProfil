$(document).ready(function () {
    // $(document).mouseup(function (e) {
    //     var container = $(".header__form-search input");
    //     if (container.has(e.target).length === 0){
    //         container.hide();
    //     }
    // });
    $('.icon-search--click').on('click', function () {
        $(this).prev().children().toggleClass('header__form-search--open');
        $('.header__form-search').slideToggle();
    });

    $('.main-li a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('main-li--open');
        $(this).next().slideToggle();
    });


    $('.header__burger').on('click', function () {
        $(this).toggleClass('header__burger--open');
        $('.header__nav').slideToggle();
    });
    $('.product__filter-head').on('click', function () {
        $(this).toggleClass('product__filter-head--open');
        $(this).next().slideToggle();
    });
    $('a[href*="#yak"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
    $('.link-absolute-left a, .advantages__more, .product-items-default__btn-more, .production__text').hover(
        function () {
            $('.production__mini-solid').addClass('production__mini-solid--animation');
            $('.advantages__more').addClass('advantages--animation');
        },
        function () {
            $('.production__mini-solid').removeClass('production__mini-solid--animation');
            $('.advantages__more').removeClass('advantages--animation');
            $(this).removeClass('advantages--animation');

        }
    );
});
