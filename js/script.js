$(" #menu-line").addClass('white-icon');
$(document).ready(function(){
    
    /***************************   Preloader ******************************/
    $(window).on("load", function() {
        $('.preloader').fadeOut(1000);
    });
    /****************************** Scroll To Top **********************************/
    $('#return-to-top').click(function() {      
        $('body,html').animate({
            scrollTop : 0                     
        }, 1000);
    });

    /****************************** Open and close the menu **********************************/
    $("#menu-icon").click(function(){
         $("#main-menu").css("left","0px");
         function showMenu(){
             $("#main-menu").css("clip-path","polygon(0 0,100% 0,100% 100%,0% 100%)");
             $("#menu-icon").animate({opacity:'0'},100);
         }
         setTimeout(showMenu,100);
    });   
     $("#close-icon").click(function(){
        $("#main-menu").css("clip-path","polygon(0 0,0% 0,100% 100%,0% 100%)");
        function hideMenu(){
                $("#main-menu").css("left","-300px");
                $("#menu-icon").animate({opacity:'1'},300);
        }
         setTimeout(hideMenu,300);
         
         function originalLayout(){
             $("#main-menu").css("-webkit-clip-path","polygon(0 0,100% 0,0% 100%,0% 100%)");
         }
         setTimeout(originalLayout,400);
     });
    
      /****************************** Change BG of the nav **********************************/
     $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 100){
            $(".BG-nav").addClass('white');
            $(".logo").css('background-color','black');
            $(".logo-head").addClass('white-head');
            $(" #menu-line").removeClass('white-icon').addClass('black-icon');
        }
        else{
        $(".BG-nav").removeClass('white');
        $(".logo").css('background-color','white');
            $(".logo-head").removeClass('white-head');
            $(" #menu-line").removeClass('black-icon').addClass('white-icon');
        }
     });

    /****************************** Change BG color of the list  **********************************/
    $('ul li').click(function() {
        $('ul li').removeClass('active');
        $(this).closest('li').addClass('active');
    });

    /****************************** Btn show the map and show the info **********************************/
    $('.show-map').click(function() {
        $('.content').addClass('content-btn');
        $('.show-info').addClass('show-info-btn');
        $('.map-position').removeClass('map-content');
    });
    $('.show-info').click(function() {
        $('.content').removeClass('content-btn');
        $('.show-info').removeClass('show-info-btn');
        $('.map-position').addClass('map-content');
    });

    /************************* Remove the msg when write in form input **************************/
    $( "input" ).keydown(function() {
        $(this).next().html("")
    });

    /****************************** Counter Plugin **********************************/
     $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    /****************************** Popup Plugin **********************************/
    $('.popup').magnificPopup({
        delegate: 'a', 
        type: 'image'
      });

    /****************************** Animate when scroll **********************************/
      AOS.init();

    /****************************** Brand Slider  **********************************/
    $('.brand-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            { 
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            { 
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }          
        ]
    });
 });

 /****************************** Form Validation **********************************/
function checkFn() {
    var emailInput = document.getElementById("email");
    var nameInput = document.getElementById("name");   
    var msgInput = document.getElementById("message");
    if (!emailInput.checkValidity()) {
        document.getElementById("resultEmail").innerHTML = "Email is required";
    } 
    else{
        var emailText = emailInput.value;
         console.log(emailText);
         symbole = emailText.indexOf("@");
         dot = emailText.lastIndexOf(".");
         console.log( dot - symbole);
         if (symbole == -1 || ( dot - symbole < 2 )) 
         {
            document.getElementById("resultEmail").innerHTML = "Enter correct Email";
            return false;
         }
         else{
            document.getElementById("resultEmail").innerHTML = "";
            return true;
         }
    }
    if (!nameInput.checkValidity()) {
        document.getElementById("resultName").innerHTML = "Name is required";
    }
    else{
        document.getElementById("resultName").innerHTML = "";
    }
    if (!msgInput.checkValidity()) {
        document.getElementById("resultMsg").innerHTML = "Message is required";
    }
    else{
        document.getElementById("resultMsg").innerHTML = "";
    }
} 