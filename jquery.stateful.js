/*
Developed by thambaru (thambaru.com) under MIT License.
*/

(function($) {
    var globalOptions = new Object(),
        options = new Object(),
        defaults = {
            text: "Loading...",
            delay: 3000,
            disabled: false
        };

    $.fn.stateful = function(options) {
        globalOptions = $.extend(defaults, options);
        return this;
    };

    $.fn.statefulReset = function() {
        stop(this);
        return this;
    };

    $('[data-loading-text]').click(function() {
        initiate($(this));
    });

    function initiate(loader) {
        var text = loader.attr('data-loading-text'),
            delay = loader.attr('data-loading-delay'),
            value = loader.html(),
            attrs = {
                text: text === '' ? '' : text,
                delay: typeof delay === 'undefined' || delay === '' ? 3000 : delay,
                value: value
            };
        options = {
            text: attrs.text === '' ? globalOptions.text : attrs.text,
            delay: attrs.delay === '' ? globalOptions.delay : attrs.delay,
            value: attrs.value
        };
        if (!options.disabled)
            stateful(loader, options);
    }

    function stateful(loader, options) {
        loader.attr('disabled', true).addClass('disabled').html(options.text).delay(options.delay).queue(function() {
            reset(loader, options)
            loader.dequeue();
        });
    }

    function stop(loader) {
        reset($(loader.selector), options);
    }

    function reset(loader, options) {
        loader.attr('disabled', false).removeClass('disabled').html(options.value);
    }

}(jQuery));
