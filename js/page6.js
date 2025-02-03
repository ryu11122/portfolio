$(document).ready(function(){
    $('p').click(function(){
    $('.box').addClass('on')
})
$('.x').click(function(){
    $('.box').removeClass('on')
})
$('.box2>img').hover(function () {
    let idx = $(this).index()
    $('.text>div>p').eq(idx).addClass('on')
    $(this).removeClass('img1')
    $(this).addClass('on')
    $('.text>div').eq(idx).addClass('on')
})
})