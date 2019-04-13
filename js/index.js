$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 
    });
    // 首页菜单栏api
    $.ajax({
        type:'get',
        url:'getindexmenu',
        dataType:'json',
        success:function(result){
            console.log(result);
            let html = template('menuTemp',result);
            $('.menu ul').html(html)
        }
    })
    // 首页的折扣列表中的数据api
    $.ajax({
        type:'get',
        url:'getmoneyctrl',
        dataType:'json',
        success:function(result){
            console.log(result);
            let html = template('detailsTemp',result);
            $('.details ul').html(html)
        }
    })
})