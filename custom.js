
$(window).scroll(function(){
    if ($(window).scrollTop() > 120){
            $("#sticky").addClass('fixed');
    }
    else {
         $("#sticky").removeClass('fixed');
    }
});









// MENU

var FX=function(t,e){return e(".menu-button").click(function(){e(".mobile_primary").toggle({direction:"left"}),e(".menu-button").toggleClass("open"),e(".mainnav .pull--right").toggleClass("open")}),e(".mobile_primary .menu-item-has-children").append('<span class="sub-menu--button"></span>'),e(".sub-menu--button").each(function(){e(this).click(function(){e(this).toggleClass("open"),e(this).prev().slideToggle()})})}(FX||{},jQuery);











