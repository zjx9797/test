$(function () {
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    indicators: false //是否显示滚动条，默认为True
  });


  $.ajax({
    type: 'get',
    url: 'getcouponproduct',
    data: $.getParameter(location.search),
    dataType: 'json',
    success: function (result) {
      var html = template('couponListTemp', result)
      $('.coupon_list').html(html)


      $('.coupon_list .single_list').on('tap', function () {
        $('.shade').addClass('mui-backdrop')
        var imgSrc = $(this).find('img').attr('src')
        console.log(imgSrc);
        $('.coupon_banner').show()
        $('.coupon_banner img').attr('src', imgSrc)
        $('body').toggleClass('mui-backdrop')
      })
    }
  })

  $('.shade').on('tap', function () {
    $(this).removeClass('mui-backdrop')
    $('.coupon_banner').hide()
  })
})