$(function(){
    //处理mui屏蔽a标签的链接
    mui('body').on('tap', 'a', function (e) {
        e.preventDefault()
        window.top.location.href = this.href;
    });
    //定义基本链接
    const baseurl='http://193.112.55.79:9090/api/';
    //请求前做的事情
    $.ajaxSettings.beforeSend=function(xhr,obj) {
        // $('body').addClass('loadding');
        //拼接链接
        obj.url=baseurl+obj.url;
        //判断是否进入私人页面
        if(obj.url.indexOf('/my/') != -1){
            //通过请求头将token传给服务器
            xhr.setRequestHeader('Authorization',sessionStorage.getItem('pyg_token'))
        }
    }
    //请求后做的事情
    $.ajaxSettings.complate=function() {
        // $('body').removeClass('loadding');
    }
    $.extend($,{
        getParameter: function (url) {
            var obj = {}
            // location.search:url中?及?后面的内容
            url = url.substring(1) //cid=5&name=jack
            // 先按&拆分
            var arr = url.split('&') //['cid=5','name=jack']
            // 遍历进行第二次拆分
            for (var i = 0; i < arr.length; i++) {
                var temp = arr[i].split('=') //['cid',5]
                obj[temp[0]] = temp[1] // obj['cid'] = 5
            }
            return obj
        }
    });
})