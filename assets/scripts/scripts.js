$(document).ready(function() {
    $('.card').on('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('mobile-touch');
    });
});
