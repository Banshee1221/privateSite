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
        if ($('#test2').hasClass('sideAnimIn')){
            $("#test2").addClass('sideAnimOut');
            $("#test2").removeClass('sideAnimIn');
        } else {
            $("#test2").removeClass('sideAnimOut');
            $("#test2").addClass('sideAnimIn');
        }
    });
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
