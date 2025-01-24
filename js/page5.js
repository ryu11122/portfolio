$(document).ready(function(){
    $('p').click(function(){
    $('.box').addClass('on')
})
$('.x').click(function(){
    $('.box').removeClass('on')
})
$('.snug').click(function(){
    $('.img').attr('src', '../sangse/2.jpg');
})
$('.rame').click(function(){
    $('.img').attr('src', '../sangse/3.jpg');
})
$('.beat').click(function(){
    $('.img').attr('src', '../sangse/1.jpg');
})
})