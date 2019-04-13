$(function(){
  $.ajax({
    type:'get',
    url: 'getcoupon',
    dataType:'json',
    success:function(result){
      var html = template('couponTemp',result)
      $('.coupon_title').html(html)
      console.log(result)
    }
  })
})