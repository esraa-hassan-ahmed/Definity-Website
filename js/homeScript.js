
$(document).ready(function(){
    
    /**************************** Animate SVG when scroll to the div ****************************/
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        var os = $('.sec4').offset().top;
        if(scroll >= os - 400){
            $('.circle-chart-background').addClass('circle-chart-active');
        }
    });

    /**************************** Mixitup plugin for animated filter ****************************/
    var mixer = mixitup('.portfoliolist');
    var mixer = mixitup('.portfoliolist', {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });
});