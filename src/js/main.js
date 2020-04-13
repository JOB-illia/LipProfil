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
    })
});
