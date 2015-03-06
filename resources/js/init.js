(function($){
    $(function(){

        $('.but-collapse').sideNav({
                edge: 'left', // Choose the horizontal origin
                menuWidth: 240,
                activationWidth: 70,
                closeOnClick: true
            }
        );
        $('.button-collapse').sideNav({
                edge: 'left', // Choose the horizontal origin
                menuWidth: 240,
                activationWidth: 70,
                closeOnClick: true
            }
        );

        if ($('nav').length) {
            $('.toc-wrapper').pushpin({ top: $('.nav-wrapper').offset().top });
        }
        else {
            $('.toc-wrapper').pushpin({ top: 0 });
        }

        $(document).ready(function(){
            $('.collapsible').collapsible({
                accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
            });
        });

        $(document).ready(function(){
            $('.scrollspy').scrollSpy();
        });

        $(document).ready(function(){
            $('.parallax').parallax();
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('#but').click(function(){
        if ($('.socialMedia').hasClass('sideAnimIn')){
            $(".socialMedia").addClass('sideAnimOut');
            $(".socialMedia").removeClass('sideAnimIn');
            $("#but").addClass('sideAnimUp');
            $("#but").removeClass('sideAnimDown');
        } else {
            $(".socialMedia").removeClass('sideAnimOut');
            $(".socialMedia").addClass('sideAnimIn');
            $("#but").addClass('sideAnimDown');
            $("#but").removeClass('sideAnimUp');
        }
    });
});

$(window).resize(function() {
    var wi = $(window).width();
    var hi = $(window).height();
    if (wi < 400){
        $("#but").removeClass('sideAnimUp');
        $(".socialMedia").removeClass('sideAnimOut');
        $(".socialMedia").addClass('hideStuff');
        $("#but").addClass('hideStuff');
    }
    else {
        $(".socialMedia").removeClass('hideStuff');
        $("#but").removeClass('hideStuff');
    }
});

/* jQuery(function($) {
    function fixDiv() {
        var $cache = $('#toc');
        if ($(window).scrollTop() < 64)
            $cache.css({
                'position': 'fixed',
                'top': '64px'
            });
        else
            $cache.css({
                'position': 'fixed',
                'top': '0px'
            });
    }
    $(window).scroll(fixDiv);
    fixDiv();
}); */
