$(function () {
    mui('body').on('tap', 'a', function (e) {
        e.preventDefault()
        window.top.location.href = this.href;
    });

    var baseURL = 'http://193.112.55.79:9090/api/';
    /**添加zepto拦截器：使每个ajax请求都经过beforeSend函数进行处理 */
    $.ajaxSettings.beforeSend = function (xhr, obj) {
        // $('body').addClass('loadding')
        /**拼接url */
        obj.url = baseURL + obj.url;
    }

    $.extend($, {
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