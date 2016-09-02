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
            forpage(1,$Element);
            var $li_a_click=$Element.find("ul.pagination li:not(:active) a");
             $li_a_click.on('click',function(){
                 forpage($(this).text(),$Element);
             });
        });
         function forpage(index_page,$div){
             $div.empty();
            $div.append("<ul class='pagination'></ul>");
            var $this_ul=$div.find(".pagination");
             $this_ul.append("<li><a href='#'>" + options.firstText + "</a></li>");
            for (var i = 0; i < options.total; i++) {
                if (index_page==i+1){
                     $this_ul.append("<li class='active'><a href='#'>" + (i + 1) + "<span class='sr-only'>(current)</span></a></li>");
                }else{
                 $this_ul.append("<li><a href='#'>" + (i + 1) + "</a></li>");
                }
            }
            $this_ul.append("<li><a href='#'>" + options.lastText + "</a></li>");
        }




    };
})(jQuery);
