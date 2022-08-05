$(document).ready(function {
    $('.list').click(function(){
        var currentuser = $(this).html().toLowerCase();
        $('.details').css({height:'0',width:'0', backgroundcolor:'brown',color:'white'})
        $('.'+currentUser).animate({height:'400px',width: '400px'}, 4000, function(){

        })
    })
})