$(document).ready(function(){
    $('p').click(function(){
    $('.box').addClass('on')
})
$('.x').click(function(){
    $('.box').removeClass('on')
})
$('.snug').click(function(){
    $('.img').attr('src', 'sangse/2.jpg');
})
$('.rame').click(function(){
    $('.img').attr('src', 'sangse/3.jpg');
})
$('.beat').click(function(){
    $('.img').attr('src', 'sangse/1.jpg');
})

$('.box2>img').hover(function () {
    let idx = $(this).index()
    $('.text>div>p').eq(idx).addClass('on')
    $(this).removeClass('img1')
    $(this).removeClass('img2')
    $(this).removeClass('img3')
    $(this).addClass('on')
    $('.text>div').eq(idx).addClass('on')
})
})