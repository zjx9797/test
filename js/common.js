$(function(){
  mui('body').on('tap','a',function(e){
    e.preventDefault()   //阻止默认行为
    window.top.location.href = this.href;
  })

  // 基准路径
  const baseURL = 'http://193.112.55.79:9090/api/'
  $.ajaxSettings.beforeSend = function(xhr,obj){  //xhr 异步对象
    obj.url = baseURL + obj.url
  }
  $.ajaxSettings.complete = function () {
    $('body').removeClass('loadding')
  }

  $.extend($,{
    getPara:function(url){
      var obj = {}
      url = url.substring(1) 
      var arr = url.split('&') 
      for (var i = 0; i < arr.length; i++) {
        var temp = arr[i].split('=')
        obj[temp[0]] = temp[1] 
      }
      return obj;
    }
  })
})