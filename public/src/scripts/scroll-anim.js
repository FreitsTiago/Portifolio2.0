// Debounce do Lodash
debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Função da animação
(function () {
    var anim_top = $('.animation-top'),
        anim_left = $('.animation-left'),
        anim_right = $('.animation-right'),
        anim_fix = $('.animation-fix'),
        progress = $('.rUln88GN'),
        animationClass = 'anime',
        offset = $(window).height() * 3 / 4;

    var bars = [{ name: 'bar-1', value: '35' },
    { name: 'bar-2', value: '52' },
    { name: 'bar-3', value: '36' },
    { name: 'bar-4', value: '57' },
    { name: 'bar-5', value: '68' }];

    function animeScroll() {
        var documentTop = $(document).scrollTop();
        anim_top.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
        anim_left.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
        anim_right.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
        anim_fix.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
        if (progress.hasClass('anime')) {
            setTimeout(function () {
                for (bar of bars) {
                    $('.' + bar.name).css('width', bar.value + '%');
                    $('.' + bar.name).text(bar.value + '%');
                }
            }, 100)

        } else {
            for (bar of bars) {
                $('.' + bar.name).css('width', 0 + '%');
                $('.' + bar.name).text('');
            }
        }
    }

    animeScroll();

    $(document).scroll(debounce(function () {
        animeScroll();
    }, 50));
})();