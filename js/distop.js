$(function () {
  // 产品排行页面渲染
  $.ajax({
    type: 'get',
    url: 'getbrand',
    data: $.getParameter(),
    dataType: 'json',
    success: function (result) {
      console.log(result);
      
      let html = template('listTemp', result);
      $('.list ul').html(html);
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
      });
    }
  })
  // 产品销量排行
  // 获取参数
  var id = 0;
  
  $.ajax({
    type: 'get',
    url: 'getbrandproductlist',
    data: $.getParameter(),
    dataType: 'json',
    success: function (result) {
      let html = template('topTemp', result);
      
      $('.top_list ul').html(html);
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
      });
      var ids = $('.top_list li').data('id')
      // 需求点击评论 获取当前产品id 用于下方的评论去 发送请求
      $('.details_name p:nth-of-type(3)').on('tap', function () {
        id = $(this).data('id');
        let img = $(this).parent('.details_name').prev().children()[0];
        let text = $(this).prev().prev().text();
        
        discuss(id,img,text)
      })
    }
  })
  // 产品评论获取数据
  function discuss(ids,img,text) {
    $.ajax({
      type: 'get',
      url: 'getproductcom',
      data: {
        productid: ids
      },
      dataType: 'json',
      success: function (result) {
        let html = template('discussTemp', result);
        $('.discuss ul').html(html);
        $('.discuss .details_img').append(img);
        $('.discuss .details_name p:nth-of-type(1)').text(text)
        mui('.mui-scroll-wrapper').scroll({
          deceleration: 0.0005
        });
      }
    })
  }

})