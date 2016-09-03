(function ($) {
    $.fn.pages = function (opts) {
        var defaults = {
            total: 20,
            firstText: '第一页',
            lastText: '最后一页'
        };
        var options = $.extend(defaults, opts);
        return this.each(function () {
            var $Element = $(this);
            forpage(1, $Element);
        });


        function forpage(index_page, $div) {
            $div.empty();
            $div.append("<ul class='pagination'></ul>");
            var $this_ul = $div.find(".pagination");
            var intbegin,intend;
            if (options.total<10){
                intbegin=0;
                intend=options.total;
            }
            else if(index_page<6 && options.total>=10){
                 intbegin=0;
                intend=options.total-10;
            }
            else if (index_page>options.total-10  && options.total>=10){
                intbegin=options.total-10;
                 intend=options.total-1;
            }else{
                intbegin=index_page-5;
                intend=index_page+3;
            }
            $this_ul.append("<li><a href='#' value='1'>" + options.firstText + "</a></li>");
            for (var i = intbegin; i < intend; i++) {
                if (index_page == i + 1) {
                    $this_ul.append("<li class='active'><a href='#'>" + (i + 1) + "<span class='sr-only'>(current)</span></a></li>");
                } else {
                    $this_ul.append("<li><a href='#' value='" + (i + 1) + "'>" + (i + 1) + "</a></li>");
                }
            }
            $this_ul.append("<li><a href='#' value='" + options.total + "'>" + options.lastText + "</a></li>");
            $this_ulliclick = $this_ul.find("li:not(.active) a");
            $this_ulliclick.on('click', function () {
                var id = $(this).attr("value");
                forpage(id, $div);
            });
        }
    };
})(jQuery);
