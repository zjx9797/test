$(function () {
    getMoneyProduct()
    function getMoneyProduct() {
        $.ajax({
            type: 'get',
            url: 'getmoneyctrlproduct',
            data:$.getParameter(location.search),
            dataType:'json',
            success: function (result) {
                console.log(result);
                var html = template('moneyProductTmp', result)
                $('.mmm_content').html(html)
            }
        })
    }

    
})