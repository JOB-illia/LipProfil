$(document).ready(function () {
    $('.header__row-burger').on('click', function () {
        $(this).toggleClass('header__row-burger--open');
        $('.header__nav').slideToggle();
    });
    let videoURL = $('.video__container iframe').attr('src');
    $('.play').on('click', function () {
        let addedURL = '?rel=0&showinfo=0&autoplay=1';
        let allURL = videoURL + addedURL;
        $('.video__container iframe').attr('src', allURL);
        $('.video__container').addClass('video__container--clickPlayStart');
        $('.play, .video__bg').css('display', 'none');
    });
    $(window).width(function(){
        if ($(window).width() > 979){
            $('.main-menu__li').hover(function () {
                $('.main-menu__a').next().css('display', 'none');
                $(this).children('.main-menu__a').next().css('display', 'block');
            }, function () {
                $('.main-menu > li > a').next().css('display', 'none');
            });
            $('.main-menu__child > li > a').hover(function () {
                $('.main-menu__child > li > a').next().css('display', 'none');
                $('.main-menu__child > li > a').css('color', '#000');
                $(this).next().css('display', 'block');
                $(this).css('color', '#FF7007');

            });
        } else {
            console.log('Окно меньше 979');
        }
    });

    $('.mobile-plus-hidden').click(function () {
       $(this).toggleClass('mobile-plus-hidden--open');
       $(this).parent().next().slideToggle();
    });
    $('.modal-cause--click').on('click', function (e) {
        e.preventDefault();
        $('.modal-cause__open').slideToggle().css('display', 'flex');
    });
    $('.modal-cause__close').on('click', function () {
        $('.modal-cause__open').slideToggle();
    });
    $('.header__lang-head').on('click', function () {
        $(this).toggleClass('header__lang-head--open');
        $(this).next().slideToggle();
    })
});
