$(document).ready(function () {

    $('.box>img').hover(function () {
        let idx = $(this).index()
        $('.text>div>a').eq(idx).addClass('on')
        $(this).addClass('on')
        $('.text>div').eq(idx).addClass('on')
    })

    $('.bubble>img').hover(function () {
        $(this).addClass('on')
    })
    $('.click').click(function () {
        $('.bubble>img').addClass('on')
    })

    $('.stop').click(function () {
        $('.shoote').addClass('on')
        $('.shoote>img').addClass('on')
    })

    $('.start').click(function () {
        $('.shoote').removeClass('on')
        $('.shoote>img').removeClass('on')
    })

    $('.mod').click(function () {

        $('html').toggleClass('on')
        $('.mod').toggleClass('on')

    })

    $('.press>b').click(function (){
        $('html').toggleClass('press')
        $('.press').addClass('on')
    })
    var audio = new Audio('audio/coin.mp3')
    
$('.box>img').hover(function(){
    audio.play();
})

    setInterval(function () {

        function randomN(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const ran = randomN(1, 7);




        if (ran == 1) {
            $("header").css({ "cursor": "url(img/tet.png)25 26, auto" });
        }
        if (ran == 2) {
            $("header").css({ "cursor": "url(img/tet2.png)25 40, auto" });
        }
        if (ran == 3) {
            $("header").css({ "cursor": "url(img/tet3.png)25 39, auto" });
        }
        if (ran == 4) {
            $("header").css({ "cursor": "url(img/tet4.png)25 39, auto" });
        }
        if (ran == 5) {
            $("header").css({ "cursor": "url(img/tet5.png)25 39, auto" });
        }
        if (ran == 6) {
            $("header").css({ "cursor": "url(img/tet6.png)12.5 53.5, auto" });
        }
        if (ran == 7) {
            $("header").css({ "cursor": "url(img/tet7.png)25 39, auto" });
        }
    }, 1000)


    setInterval(function () {

        function randomN2(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const ran2 = randomN2(1, 4);

        if (ran2 == 1) {
            $(".introduce").css({ "cursor": "url('img/i6.png')16 16, auto" });
            $("#shoo").css({ "cursor": "url('img/i6.png')16 16, auto" });
            $(".shoote>img").attr({"src": "img/i2.png"})
            
        }
        if (ran2 == 2) {
            $(".introduce").css({ "cursor": "url('img/i7.png')16 16, auto" });
            $("#shoo").css({ "cursor": "url('img/i7.png')16 16, auto" });
            $(".shoote>img").attr({"src": "img/i3.png"})
        }
        if (ran2 == 3) {
            $(".introduce").css({ "cursor": "url('img/i8.png')16 16, auto" });
            $("#shoo").css({ "cursor": "url('img/i8.png')16 16, auto" });
            $(".shoote>img").attr({"src": "img/i4.png"})
        }
        if (ran2 == 4) {
            $(".introduce").css({ "cursor": "url('img/i9.png')16 16, auto" });
            $("#shoo").css({ "cursor": "url('img/i9.png')16 16, auto" });
            $(".shoote>img").attr({"src": "img/i5.png"})
        }
    }, 1000)
})

