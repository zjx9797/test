
$(function () {
    var num=$.getParameter(location.search).id;
    console.log(num);
    
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getmoneyctrl',
        data: {},
        dataType: 'json',
        success: function (result) {
            console.log(result);

            var html = template('datails', result.result[num])
           
            $('.cu-content').html(html)
        }
    })
})

