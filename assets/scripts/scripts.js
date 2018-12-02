$(document).ready(function() {
    $('.card').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('mobile-touch');
    });
});
