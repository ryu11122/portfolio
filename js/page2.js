$(document).ready(function(){
    $('.muse').click(function(){
    $('.box').addClass('on')
})
$('.x').click(function(){
    $('.box').removeClass('on')
})

$('.box2>img').hover(function () {
    let idx = $(this).index()
    $('.text>div>a').eq(idx).addClass('on')
    $(this).removeClass('img1')
    $(this).removeClass('img2')
    $(this).addClass('on')
    $('.text>div').eq(idx).addClass('on')
})
})