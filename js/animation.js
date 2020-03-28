$(document).ready(function () {
    // var nthu = document.getElementById('nthu');
    // var nthu_show = document.getElementById('wel-show');
    var nthu_enter = document.getElementById('wel-enter');
    $('<img/>').attr('src', 'img/intro.png').on('load', function () {
        $(this).remove(); 
        nthu_enter.style["display"] = 'block'
    });
    // nthu.addEventListener('animationend', function () {
    //     console.log('動畫開始');
    //     nthu_show.style["display"] = 'none'
    //     nthu_enter.style["display"] = 'block'
    // })

})