$(function() {
    $.ajax({
        type:'get',
        data:{productid:$.getParameter(location.search).id},
        dataType:'json',
        url:'getproduct',
        success:function(result) {
            console.log(result);
            var html=template('getprodTemp',result);
            $('.listcon').html(html)
        }
    })
    $.ajax({
        url:'getproductcom',
        type:'get',
        data:{productid:$.getParameter(location.search).id},
        dataType:'json',
        success:function(result) {
            console.log(result);
            var html=template('pinglunTemp',result);
            $('.pinglun').html(html);
        }
    })
})