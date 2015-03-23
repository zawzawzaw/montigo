// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(document).ready(function(){
   
    var $window = $(window); //You forgot this line in the above example

    $window.load(function() {
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
    });

    $('section.parallax').each(function(){
        
        var $bgobj = $(this);
        
        $('.parallax').scroll(function() {
            // moving first bg position  

            console.log('scrolling p2');

            // if($bgobj.index() == 1) {
                var yPos = -($window.scrollTop() / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';
                console.log(coords)

                // Move the background
                $bgobj.css({ backgroundPosition: coords });
            // }
        });
                
    });

    // creating html 5 element for IE 
    document.createElement("section");

    // adding background to header after first scroll
    var scrolled = false;
    $(window).on('scroll resize', function() {

        // detect first scroll
        var scrollPos = $(window).scrollTop();       

        if( ( scrollPos != 0 ) ) {
            console.log('scrolling')
            if(scrolled==false) {
                scrolled = true;             
               $('#main-header').toggleClass('header-bg');
               $('.cta-book').toggleClass('header-bg');
               $('.booking-form').toggleClass('header-bg');
            } 
        } else if( ( scrollPos === 0 ) && (scrolled == true) ) {
            scrolled = false;
            console.log('scrolled')
            $('#main-header').toggleClass('header-bg');
            $('.cta-book').toggleClass('header-bg');
            $('.booking-form').toggleClass('header-bg');
        }
    }); 

    /// for parallax content

    ///// parallex 1
    $('.content-1').waypoint(function(direction) {
        if(direction==="up") {
            $('.parallax-1').find('.first-text').animate({ top : '0', opacity: '1'}, 300)
            $('.parallax-1').find('.second-text').animate({ bottom : '0', opacity: '1'}, 300)
        }else {
            $('.parallax-1').find('.first-text').animate({ top : '-75', opacity: '0.5'}, 300)
            $('.parallax-1').find('.second-text').animate({ bottom : '-75', opacity: '0.5'}, 300)
        }
    }, {offset: "95%"});

    $('.content-1').waypoint(function(direction) {
        if(direction==="up") {
            $('.parallax-1').find('.first-text').animate({ top : '-75', opacity: '0.5'}, 300)
            $('.parallax-1').find('.second-text').animate({ bottom : '-75', opacity: '0.5'}, 300)
        }else {
            $('.parallax-1').find('.first-text').animate({ top : '-150', opacity: '0'}, 300)
            $('.parallax-1').find('.second-text').animate({ bottom : '-150', opacity: '0'}, 300)
        }
    }, {offset: "80%"});

    // parallex 2
    $('.content-1').waypoint(function(direction){
        if(direction==="up") {
            $('.parallax-2').find('.first-text').animate({ left : '-450', opacity: '0'}, 500)
            $('.parallax-2').find('.second-text').animate({ right : '-450', opacity: '0'}, 500)
        }else {
            console.log('down');
            $('.parallax-2').find('.first-text').animate({ left : '-20', opacity: '1', display: 'block' }, 500)
            $('.parallax-2').find('.second-text').animate({ right : '0', opacity: '1', display: 'block' }, 500)
        }
    }, {offset: "-20%"});

    $('.content-2').waypoint(function(direction) {        
        if(direction==="up") {
            $('.parallax-2').find('.first-text').animate({ left : '-20', opacity: 'toggle'}, 500)
            $('.parallax-2').find('.second-text').animate({ right : '0', opacity: 'toggle'}, 500)
        }else {
            $('.parallax-2').find('.first-text').animate({ left : '-450', opacity: 'toggle'}, 500)
            $('.parallax-2').find('.second-text').animate({ right : '-450', opacity: 'toggle'}, 500)
        }
    }, {offset: "75%"});  

    ///// parallex 3
    $('.content-2').waypoint(function(direction){
        if(direction==="up") {
            $('.parallax-3').find('.first-text').animate({ left : '-450', opacity: '0'}, 500)
            $('.parallax-3').find('.second-text').animate({ right : '-450', opacity: '0'}, 500)
        }else {
            console.log('down');
            $('.parallax-3').find('.first-text').animate({ left : '-25', opacity: '1', display: 'block' }, 500)
            $('.parallax-3').find('.second-text').animate({ right : '0', opacity: '1', display: 'block' }, 500)
        }
    }, {offset: "-75%"});

    $('.content-3').waypoint(function(direction) {
        if(direction==="up") {
            $('.parallax-3').find('.first-text').animate({ left : '-25', opacity: 'toggle'}, 500)
            $('.parallax-3').find('.second-text').animate({ right : '0', opacity: 'toggle'}, 500)
        }else {
            $('.parallax-3').find('.first-text').animate({ left : '-450', opacity: 'toggle'}, 500)
            $('.parallax-3').find('.second-text').animate({ right : '-450', opacity: 'toggle'}, 500)
        }
    }, {offset: "75%"});  

    $('.final-content').waypoint(function(direction) {
        if(direction==="up") {
            $('.final-content').find('.first-text').animate({ top : '-450', opacity: '0'}, 800)
            $('.final-content').find('.second-text').animate({ bottom : '-450', opacity: '0'}, 800)
        }else {
            $('.final-content').find('.first-text').animate({ top : '0', opacity: '1'}, 800)
            $('.final-content').find('.second-text').animate({ bottom : '0', opacity: '1'}, 800)
        }
    }, {offset: "90%"});  

    ///// for normal content
    $('.content-1').waypoint(function(direction) {
        if(direction==="up") {        
            $('.content-1').find('.first-text').animate({ top: '120', opacity: '0'}, 800);
            $('.content-1').find('.second-text').animate({ top: '60', opacity: '0'}, 800);
        }else {
            $('.content-1').find('.first-text').animate({ top: '0', opacity: '1'}, 800);
            $('.content-1').find('.second-text').animate({ top: '0', opacity: '1'}, 800);
        }
    }, {offset: "60%"});  

    $('.content-2').waypoint(function(direction) {
        if(direction==="up") {        
            $('.content-2').find('.first-text').animate({ top: '120', opacity: '0'}, 800);
            $('.content-2').find('.second-text').animate({ top: '60', opacity: '0'}, 800);
        }else {
            $('.content-2').find('.first-text').animate({ top: '0', opacity: '1'}, 800);
            $('.content-2').find('.second-text').animate({ top: '0', opacity: '1'}, 800);
        }
    }, {offset: "60%"});   

    $('.content-2').waypoint(function(direction) {
        console.log("1%");
        if(direction==="up") {        
            $('.content-2').find('.third-text').animate({ top: '120', opacity: '0'}, 800);
            $('.content-2').find('.fourth-text').animate({ top: '60', opacity: '0'}, 800);
        }else {
            $('.content-2').find('.third-text').animate({ top: '0', opacity: '1'}, 800);
            $('.content-2').find('.fourth-text').animate({ top: '0', opacity: '1'}, 800);
        }
    }, {offset: "1%"});

    ///// room parallax 1
    $('.room-content-1').waypoint(function(direction) {
        if(direction==="up") {
            $('.room-parallax-1').find('.first-text').animate({ top : '0', opacity: '1'}, 300)
            $('.room-parallax-1').find('.second-text').animate({ bottom : '0', opacity: '1'}, 300)
        }else {
            $('.room-parallax-1').find('.first-text').animate({ top : '-75', opacity: '0.5'}, 300)
            $('.room-parallax-1').find('.second-text').animate({ bottom : '-75', opacity: '0.5'}, 300)
        }
    }, {offset: "95%"});

    $('.room-content-1').waypoint(function(direction) {
        if(direction==="up") {
            $('.room-parallax-1').find('.first-text').animate({ top : '-75', opacity: '0.5'}, 300)
            $('.room-parallax-1').find('.second-text').animate({ bottom : '-75', opacity: '0.5'}, 300)
        }else {
            $('.room-parallax-1').find('.first-text').animate({ top : '-150', opacity: '0'}, 300)
            $('.room-parallax-1').find('.second-text').animate({ bottom : '-150', opacity: '0'}, 300)
        }
    }, {offset: "80%"});

    $('.room-content-1').waypoint(function(direction) {
        if(direction==="up") {        
            // $('.room-content-1').find('.first-text').animate({ top: '120', opacity: '0'}, 800);
            // $('.room-content-1').find('.second-text').animate({ top: '60', opacity: '0'}, 800);            
            animation.stop_animation();
        }else {
            // $('.room-content-1').find('.first-text').animate({ top: '0', opacity: '1'}, 800);
            // $('.room-content-1').find('.second-text').animate({ top: '0', opacity: '1'}, 800);
            animation.start_animation();
        }
    }, {offset: "60%"});  


    /// room booking slides in/out
    var slider_width = $('.booking').width();//get width automaticly

    slider_width -= 8;

    console.log(slider_width)

    $('.cta-book').click(function() {
        console.log($('.booking').css("margin-right"))
        if($('.booking').css("margin-right") == "-8px" && !$('.booking').is(':animated'))
        {
            console.log('hide')
            $('.booking').animate({ "margin-right": '-='+slider_width });
        }
        else
        {
            console.log('show')

            if(!$('.booking').is(':animated'))//perevent double click to double margin
            {
                $('.booking').animate({ "margin-right": '+='+slider_width });                
            }
        }
    });

    ///// hover pulse effect on home page's last content map test

    /*$('.circle-1').hover(function(e){
        $('.outline-1').addClass('pulsate');
    }, function() {
        $('.outline-1').removeClass( "pulsate" );
    });

    $('.outline-1').hover(function(e){
        $(this).addClass('pulsate');
    }, function() {
        $(this).removeClass( "pulsate" );
    });*/
    

    ///// main bg background changer test

    /*function getRandom(min, max) {
        if (min > max) {
            return -1;
        }

        if (min == max) {
            return min;
        }

        var r;
        r = Math.random();

        return min + parseInt(r * (max - min + 1));
    }

    change background
    function changeBG()
    {
        setTimeout( function () {
            changeBG();
        }, 5000);

        var images = new Array('../images/content/slider-1.png','../images/content/slider-2.jpg');

        console.log(images[getRandom(0, images.length - 1)]);

        $('.parallax-1').css("background-image", "url("+ images[getRandom(0, images.length - 1)] +")");
    }

    changeBG();*/

    // scroller
    $("html").niceScroll({cursorcolor:"#575961", autohidemode: false, cursorwidth: 8});

    // main bg slider
    $('.parallax-1').bgswitcher({
        images: ['images/content/slider-1.png','images/content/slider-1.png'],
        effect: "drop",
        interval: 8000
    });    

    // content slider 
    $('.carousel').carousel({
        interval: false
    });


    // scroll to
    $('.scroll-to-content').on('click', function(e){
        e.preventDefault();
        var currentId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(currentId).offset().top - 125
        }, 800);
    });

    // $(window).bind( 'hashchange', function(e) { 
    //     e.preventDefault();
    //     var anchor = document.location.hash;
    //     if( anchor === '#hilltop' || anchor == '#hillside' || anchor == '#spa' || anchor == '#seaview' ) {
    //         $('html, body').animate({
    //             scrollTop: $(anchor).offset().top - 75
    //         },  800);
    //     }
    // });

    $(window).hashchange( function(e){
        // Alerts every time the hash changes!
        e.preventDefault();
        var anchor = location.hash;
        if( anchor === '#hilltop' || anchor == '#hillside' || anchor == '#spa' || anchor == '#seaview' ) {
            $('html, body').animate({
                scrollTop: $(anchor).offset().top - 125
            },  800);
        }
    });

});