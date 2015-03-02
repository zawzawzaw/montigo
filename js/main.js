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
   
    // $('a.login').fancybox({
    //     padding: 50,
    //     width: 300,
    //     height: 300,
    //     autoDimensions: false,
    //     closeBtn : false 
    // });

    // $('.account-details').find('.save-btn').on('click', function(e){
    //     $('.account-details').slideToggle('slow');
    //     $('.account-details-saved').slideToggle('slow');
    // });

    // $('.account-details-saved').find('.edit').on('click', function(e){
    //     $('.account-details-saved').slideToggle('slow');
    //     $('.account-details').slideToggle('slow');
    // });

    // $('.scroll-to-content').on('click', function(e){
    //     e.preventDefault();
    //     var currentId = $(this).attr('href');
    //     $('html, body').animate({
    //         scrollTop: $(currentId).offset().top - 110
    //     }, 800);
    // });

    // $('.cart-breadcrumb a').click(function (e) {
    //   e.preventDefault()
    //   $('.cart-breadcrumb a').removeClass('active');
    //   $(this).addClass('active');      
    // });

    // $('.load-more').on('click', function(e){
    //     e.preventDefault();

    //     var $loadmore = $(this);
    //     var link = $loadmore.attr('href');
    //     $(link).slideToggle('slow', function(){
    //         if($(link).css('display') !== 'none')
    //             $loadmore.find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    //         else
    //             $loadmore.find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    //     });
    // });    

    var $window = $(window); //You forgot this line in the above example

    $('section.parallax').each(function(){
        var $bgobj = $(this); // assigning the object

        if($(this).index() > 0) {
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';
                // Move the background


                $bgobj.css({ backgroundPosition: coords });
            });
        }
        
    });

    document.createElement("section");

});