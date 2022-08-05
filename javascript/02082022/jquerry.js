$(document).ready(function(){
    $('.show-job').click(function() {
        $('.job').slideToggle();
        $(this).toggleclass('active');
    })
})