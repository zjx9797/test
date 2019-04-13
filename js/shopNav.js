$(function() {
    $.ajax({
        type:'get',
        url:'getsitenav',
        data:{},
        dataType:'json',
        success:function(result) {
            console.log(result);
            var html=template('navlistTemp',result);
            $('.navlist').html(html);
        }
    })
})