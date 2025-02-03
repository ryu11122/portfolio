$(document).ready(function(){
    $('p').click(function(){
    $('.box').addClass('on')
})
$('.x').click(function(){
    $('.box').removeClass('on')
})
$('.coffee').click(function(){
    $('.img').attr('src', 'webbanner/0924_3.jpg');
})
$('.bugger').click(function(){
    $('.img').attr('src', 'webbanner/0925_5.jpg');
})
$('.box>img').hover(function () {
    let idx = $(this).index()
    $('.text>div>a').eq(idx).addClass('on')
    $(this).removeClass('img1')
    $(this).removeClass('img2')
    $(this).addClass('on')
    $('.text>div').eq(idx).addClass('on')
})
})