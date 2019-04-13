$(function () {
    var pageid = getQueryString('pageid') || 1;
    function init(pageid) {
        $.ajax({
            type: 'get',
            url: 'getmoneyctrl',
            data: {
                "pageid": pageid
            },
            dataType: 'json',
            success: function (result) {
                console.log(result);
                var html = template('PolicyTemp', result)
                $('.mmm_content>.mmm_list').html(html);
                var page = Math.ceil(result.totalCount / result.pagesize)
                console.log(page);
                for (var i = 0; i < page; i++) {
                    var url = "saveMoney.html?pageid=" + (i + 1);
                }
                if (pageid < 1) {
                    pageid =1
                } else if (pageid > page) {
                    pageid = page - 1;
                }
                var prevUrl = "saveMoney.html?pageid=" + (pageid - 1);
                var nextUrl = "saveMoney.html?pageid=" + (parseInt(pageid) + 1);
                $('.page-prev').attr("href", prevUrl);
                $('.page-next').attr("href", nextUrl);
                $('.page-page').text('第'+pageid+'页')
            }
        })
    }
    init(pageid)

    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
})