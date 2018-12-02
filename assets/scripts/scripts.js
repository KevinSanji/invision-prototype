$(document).ready(function() {
    $('.hover').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('mobile-touch');
    });
});
