$(function () {
    var titid=0;

    $('.tabs').on('tap', 'li', function () {
        $(this).attr("class", "active");
        $(this).siblings().attr('class', "")
        bcd();
        abc();
    })
    $.ajax({
        type: 'get',
        url: 'getbaicaijiatitle',
        data: {},
        dataType: 'json',
        success: function (result) {
            // console.log(result);
            var html = template('baicaititTemp', result)
            $('.tabs').html(html);
            abc();
        }
    })

    function bcd() {
        titid = $('.tabs').children('.active').children().data('titleid');
        console.log(titid);
    }

    function abc() {
        $.ajax({
            url: 'getbaicaijiaproduct',
            data: {
                titleid: titid
            },
            dataType: 'json',
            type: 'get',
            success: function (result) {
                console.log(result);
                var html = template('baicailistTemp', result)
                $('.bcj-list ul').html(html);
            }
        })
    }
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
})