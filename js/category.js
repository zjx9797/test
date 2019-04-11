$(function () {
    $.ajax({
        type: 'get',
        url: 'getcategorytitle',
        dataType: 'json',
        success: function (result) {
            var html = template('catetitleTemp', result)
            $('.mmm_content').html(html);
            $('.catatitle').on('tap', function () {
                var that=this;
                data = $(that).parent().children('.mmm_titlecontent').data('titleid');
                console.log(data);
                $.ajax({
                    type: 'get',
                    url: 'getcategory',
                    data: {
                        titleid: data
                    },
                    dataType: 'json',
                    success: function (result) {
                        console.log(result);
                        var html = template('titleidTemp', result);
                        $(that).parent().children('.mmm_titlecontent').html(html);
                    }
                })
            })
        }
    })
})