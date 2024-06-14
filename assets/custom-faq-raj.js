// FAQs Jquery Start
$(document).ready(function(){
    $('.accordion-head').click(function(){
    $(this).parent().find('.accordion-body').slideToggle();
    $('.accordion-head').not(this).parent().find('.accordion-body').slideUp();

    $(this).toggleClass('arrowAccordion');
    $('.accordion-head').not(this).removeClass('arrowAccordion');  
    });
    });
// FAQs Jquery End