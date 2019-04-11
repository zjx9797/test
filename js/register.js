$(function(){
    //点击获取验证码事件
    $('.btn-yzm').on('tap',function(){
        var mobile=$('[name="mobile"]').val();  //获取输入的手机号
        var reg=/^1[3-9]\d{9}$/;                //正则表达式判断手机号格式
        if(!reg.test(mobile)) {
            mui.toast('手机号码格式错误')
            return;
        }else {
            $.ajax({                            //正确则发起请求返回验证号
                type:'post',
                url:'users/get_reg_code',
                data:{mobile},
                dataType:'json',
                success:function(result) {
                    // console.log(result);
                if(result.meta.status == 200){
                    $('[name="code"]').val(result.data);
                }
                }
            })
        }
    })
    $('.btn-zhuce').on('tap',function(){        //点击注册事件
        console.log($('form').serialize());
        if($('[name="pwd"]')==$('[name="pwd1"]')) {
            $.ajax({                                //发起请求传入输入数据
                type:'post',
                url:'users/reg',
                data:$('form').serialize(),
                dataType:'json',
                success:function(result) {
                    console.log(result);
                    if(result.meta.status==200) {
                        mui.toast('注册成功')
                        setTimeout(() => {
                            location.href='/index.html' //成功一秒后跳转主页面
                        }, 1000);
                    }
                }
            })
        }else {
            mui.toast('密码不一致');
        }
        
    })
})