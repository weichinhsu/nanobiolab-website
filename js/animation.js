$(document).ready(function () {
    var nthu = document.getElementById('nthu');
    var nthu_show = document.getElementById('wel-show');
    var nthu_enter = document.getElementById('wel-enter');
    $('<img/>').attr('src', '/img/welcome.jpg').on('load', function () {
        $(this).remove(); // prevent memory leaks as @benweet suggested
        nthu_show.style["display"] = 'block'
    });
    nthu.addEventListener('animationend', function () {
        console.log('動畫開始');
        nthu_show.style["display"] = 'none'
        nthu_enter.style["display"] = 'block'
        // nthu_text.style["animation"] = 'reveal 1s'
        // nthu_text.style.animationFillMode="forwards"
        // nthu_text_span.style["animation"] = 'slidein 1s'
        // nthu_text_span.style.animationFillMode="forwards"
    })

})