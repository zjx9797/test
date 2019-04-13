$(function() {
    // console.log($.getParameter(location.search).categoryid);
    $.ajax({
        type:'get',
        data:{categoryid:$.getParameter(location.search).categoryid},
        dataType:'json',
        url:'getcategorybyid',
        success:function(result) {
            var pageid=1;
            var abhtml=template('fenleiTemp',result);
            $('.category-title').html(abhtml)
            init();
            var num;
            function init() {
                $.ajax({
                    type:'get',
                    url:'getproductlist',
                    data:{categoryid:$.getParameter(location.search).categoryid,pageid:pageid},
                    dataType:'json',
                    success:function(result) {
                        num=result.totalCount/result.pagesize;
                        var html=template('prodListTemp',result);
                        $('.product-list').html(html);
                    }
                })
            }
            sessionStorage.setItem('prodhref',location.href);
                $('.lastpage').on('tap',function() {
                    if(pageid>1) {
                        pageid--;
                        init();
                    }
                })
            if(pageid!=num) {
                $('.nextpage').on('tap',function() {
                    if(pageid<num) {
                        pageid++;
                        init();
                    }
                    
                })
            }
            
        }
    })
})