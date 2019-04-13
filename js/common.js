$(function () {

  // 默认情况 下，mui不响应click单击事件，这是它的默认行为
  // 我们解决方式就是重新为所有A绑定tap
  mui('body').on('tap', 'a', function (e) {
    e.preventDefault()
    window.top.location.href = this.href;
  });

  // 扩展zepot 方法 $.extend
  $.extend($, {
    // 获取?后的值方法
    getParameter: function () {
      let obj = {};
      let url = location.search.substring(1); // cid=12.....
      // 在 &处 打断 url
      var arr = url.split('&') // 返回一个数组 ["cid=12"]
      // 二次拆分 并把拆分出来的数据传入到 obj 这个对象中
      for (let i = 0; i < arr.length; i++) {
        obj[arr[i].split('=')[0]] = arr[i].split('=')[1]
      }
      return obj
    },
    
  })

  const baseURL = 'http://193.112.55.79:9090/api/';
  // 添加zepto拦截器：它的作用是可以让每个ajax请求都经过这个函数进行处理
  $.ajaxSettings.beforeSend = function (xhr, obj) {
    // 在这边我们想拼接url
    obj.url = baseURL + obj.url
    
  }
  $.ajaxSettings.complete = function () {
    // 在这边我们想拼接url
    // console.log(456)
  }
})