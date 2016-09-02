(function ($) {
    $.fn.pages = function (opts) {
        var defaults = {
            total: 20,
            firstText: '第一页',
            lastText: '最后一页'
        };
        var options = $.extend(defaults, opts)
        return this.each(function () {
            $(this).append("<ul class='pagination'></ul>");
            var $Element = $(this).find(".pagination");
            $Element.append("<li><a href='#'>" + options.firstText + "</a></li>");
            for (var i = 0; i < options.total; i++) {
                $Element.append("<li><a href='#'>" + (i + 1) + "</a></li>")
            }
            $Element.append("<li><a href='#'>" + options.lastText + "</a></li>");

        });
    };
})(jQuery);
