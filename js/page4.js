$(document).ready(function(){
    $('p').click(function(){
    $('.box').addClass('on')
})
$('.x').click(function(){
    $('.box').removeClass('on')
})
$('.coffee').click(function(){
    $('.img').attr('src', '../webbanner/0924_3.jpg');
})
$('.bugger').click(function(){
    $('.img').attr('src', '../webbanner/0925_5.jpg');
})
})