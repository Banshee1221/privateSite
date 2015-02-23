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

    }); // end of document ready
})(jQuery); // end of jQuery name space

jQuery(function($) {
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
});
