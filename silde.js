$(window).scroll(function () { var scrollValue = $(document).scrollTop(); console.log(scrollValue); });


$(document).ready(function(){
    $(".history_text").click(function(){
        if($(".content_history").css("visibility")=="hidden") {
            window.scrollTo(0, 4350);
            $(".content_history").css("visibility", "visible");
            $(".content_history").fadeOut(0);
            $(".content_history").fadeIn("slow");
        }
        else{
            $(".content_history").fadeOut("slow");
            $('.content_history').delay(300).queue(function (next) { 
                $(this).css('visibility', 'hidden'); 
                next(); 
            });
        }
    });

    $(".awarded_text").click(function(){
        if($(".content_award").css("visibility")=="hidden") {
            window.scrollTo(0, 5300);
            $(".content_award").css("visibility", "visible");
            $(".content_award").fadeOut(0);
            $(".content_award").fadeIn("slow");
        }
        else{
            $(".content_award").fadeOut("slow");
            $('.content_award').delay(300).queue(function (next) { 
                $(this).css('visibility', 'hidden'); 
                next(); 
            });
        }
    });

    $(".education_text").click(function(){
        if($(".content_education").css("visibility")=="hidden") {
            window.scrollTo(0, 6250);
            $(".content_education").css("visibility", "visible");
            $(".content_education").fadeOut(0);
            $(".content_education").fadeIn("slow");
        }
        else{
            $(".content_education").fadeOut("slow");
            $('.content_education').delay(300).queue(function (next) { 
                $(this).css('visibility', 'hidden'); 
                next(); 
            });
        }
    });

});