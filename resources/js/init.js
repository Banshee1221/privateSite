(function($){
    $(function(){

        $('.button-collapse').sideNav({
                edge: 'right', // Choose the horizontal origin
                activationWidth: 70
            }
        );

    }); // end of document ready
})(jQuery); // end of jQuery name space

var radius = 200;
var fields = $('.field'), container = $('#container'), width = container.width(), height = container.height();
var angle = 0, step = (2*Math.PI) / fields.length;
fields.each(function() {
    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
    var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
    if(window.console) {
        console.log($(this).text(), x, y);
    }
    $(this).css({
        left: x + 'px',
        top: y + 'px'
    });
    angle += step;
});