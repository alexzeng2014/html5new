;
(function ($, window, document, undefined) {
        var page_view = function (ele, opt) {
            this.$element = ele, this.defaults = {
                'total': 20,
                'firstText': '第一页',
                'lastText': '最后一页'
            }, this.options = $.extend({}, this.defaults, opt)
        }


        page_view.prototype = {
            _init: function () {
                this._onChage(1);
            },
            _onChage: function (index_page) {
                var $chage=this;
                this.$element.empty();
                this.$element.append("<ul class='pagination'></ul>");
            var $this_ul = this.$element.find(".pagination");
            var intbegin,intend;
            if (this.options.total<10){
                intbegin=0;
                intend=this.options.total;
            }
            else {
                if (index_page<5){
                    intbegin=0;
                intend=9;
                }else if(index_page>this.options.total-4){
                     intbegin=this.options.total-9;
                intend=this.options.total;
                }else{
                    intbegin=index_page-5;
                intend=parseInt(index_page) +4;

                }
            }
            $this_ul.append("<li><a href='#' value='1'>" + this.options.firstText + "</a></li>");
            for (var i = intbegin; i < intend; i++) {
                if (index_page == i + 1) {
                    $this_ul.append("<li class='active'><a href='#'>" + (i + 1) + "<span class='sr-only'>(current)</span></a></li>");
                } else {
                    $this_ul.append("<li><a href='#' value='" + (i + 1) + "'>" + (i + 1) + "</a></li>");
                }
            }
            $this_ul.append("<li><a href='#' value='" + this.options.total + "'>" + this.options.lastText + "</a></li>");
            $this_ulliclick = $this_ul.find("li:not(.active) a");
            $this_ulliclick.on('click', function () {
                var id = $(this).attr("value");
                $chage._onChage(id);

            });
            }
    }

        $.fn.pageViews = function (options) {
            //创建Beautifier的实体
            var pageviews = new page_view(this, options);
            //调用其方法
            return pageviews._init();
        }
})(jQuery, window, document);
