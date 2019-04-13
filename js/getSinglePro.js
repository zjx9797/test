$(function () {
  // 店铺
  $.ajax({
    type: 'get',
    url: 'getgsshop',
    dataType: 'json',
    success: function (result) {
      var html = template('storeTemp', result)
      $('.sp_store').html(html)
    }
  })

  // 区域
  $.ajax({
    type: 'get',
    url: 'getgsshoparea',
    dataType: 'json',
    success: function (result) {
      var html = template('areaTemp', result)
      $('.sp_area').html(html)
    }
  })

  // 点击选择店铺
  var shopid
  $('.filter .shop').on('tap', function () {
    $('.sp_store').show()
    $('.sp_store').on('tap', 'li', function () {
      $(this).addClass('active').siblings().removeClass('active')
      var shopA = $(this).children('a')
      var txt = shopA.text()
      shopid = shopA.data('shopid')
      // console.log(shopid);
      $('.shop .txt').text(txt)
      $('.sp_store').hide()

      getProList({
        shopid,
        areaid
      })
    })
  })



  // 点击选择区域
  var areaid
  $('.filter .area').on('tap', function () {
    $('.sp_area').show()
    $('.sp_area').on('tap', 'li', function () {
      $(this).addClass('active').siblings().removeClass('active')
      var areaA = $(this).children('a')
      var txt2 = areaA.text().slice(0, 2)
      areaid = areaA.data('areaid')
      $('.area .txt').text(txt2)
      $('.sp_area').hide()
      // console.log(areaid)

      getProList({
        shopid,
        areaid
      })
    })
  })

  getProList({})

  function getProList({
    shopid,
    areaid
  }) {
    var obj = {
      'shopid': shopid || 0,
      'areaid': areaid || 0
    }
    $.ajax({
      type: 'get',
      url: 'getgsproduct',
      data: obj,
      dataType: 'json',
      success: function (result) {
        // console.log(result)
        var html = template('proListTemp', result)
        $('.singleProList').html(html)

         mui('.mui-scroll-wrapper').scroll({
           deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
           indicators: false //是否显示滚动条，默认为True
         });
      }
    })
  }

})