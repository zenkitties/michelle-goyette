$(document).ready(function(){
    $('#open-contact').on('click', function(){
        $('.contact-form').fadeIn('fast').animate({
            top: "120px"    
        }, 1000);
    });
    
    $('#contact-close').on('click',function(){
        console.log('im being pressed');
       $('.contact-form').fadeOut('fast').animate({
           top: "-560px"
       }, 200);
    });
});