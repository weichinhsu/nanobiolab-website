$(document).ready(function () {
    var nthu_enter = document.getElementById('wel-enter');
    $('<img/>').attr('src', 'img/intro.png').on('load', function () {
        $(this).remove(); 
        nthu_enter.style["display"] = 'block'
    });
})