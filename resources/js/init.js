(function($){
    $(function(){

        $('.but-collapse').sideNav({
                edge: 'left', // Choose the horizontal origin
                activationWidth: 70,
                closeOnClick: true
            }
        );
        $('.button-collapse').sideNav({
                edge: 'left', // Choose the horizontal origin
                activationWidth: 70,
                closeOnClick: true
            }
        );

    }); // end of document ready
})(jQuery); // end of jQuery name space