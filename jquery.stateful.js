/*
Developed by thambaru (thambaru.com) under MIT License.
*/

(function($) {
    var opts = new Object(),
        defaults = {
            text: "Loading...",
            delay: 3000,
            disabled: false
        };

    $.fn.stateful = function(options) {
        opts = $.extend(defaults, options);
        return this;
    };

    $('[data-loading-text]').click(function() {
        stateful($(this));
    });

    function stateful(loader) {
        var text = loader.attr('data-loading-text'),
            delay = loader.attr('data-loading-delay'),
            value = loader.html(),
            attrs = {
                text: text === '' ? '' : text,
                delay: typeof delay === 'undefined' || delay === '' ? 3000 : delay,
                value: value
            },
            options = {
                text: attrs.text === '' ? opts.text : attrs.text,
                delay: attrs.delay === '' ? opts.delay : attrs.delay,
                value: attrs.value
            };
        if (!options.disabled)
            changeStates(loader, options);
    }

    function changeStates(loader, options) {
        loader.attr('disabled', true).addClass('disabled').html(options.text).delay(options.delay).queue(function() {
            loader.attr('disabled', false).removeClass('disabled').html(options.value).dequeue();
        });
    }
}(jQuery));
