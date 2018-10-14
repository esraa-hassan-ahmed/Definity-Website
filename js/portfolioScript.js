
$(document).ready(function(){
    
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