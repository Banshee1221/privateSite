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

    }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});