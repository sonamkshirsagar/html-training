alert('Click "ok" to enter')
$(document).ready(function(){
    $('.bronco,.truck,.mustang').click(function(){
    $('.show-bronco,.show-truck,.show-mustang').hide() 
    if($(this).hasClass('.truck, .mustung')){
        $('.show-truck').slideToggle();
    }
    else if($(this).hasClass('mustang')){
        $('.show-mustang').slideToggle();
    }
    else{
        $('.show-bronco').slideToggle();
    }
    })
})