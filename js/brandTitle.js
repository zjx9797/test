$(function () {
  // 品牌页面数据请求
  $.ajax({
    type: 'get',
    url: 'getbrandtitle',
    dataType: 'json',
    success: function (result) {
      console.log(result);
      let html = template('brandTemp', result)
      $('.ranking ul').html(html)
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
      });
    }
  })
})