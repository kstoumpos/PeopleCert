var main = function() {
    //toggle dropdown menu
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').toggle().animate({
            height : '250px'
        }, 1100)

    });


    $('.arrow-prev').click(function(){
        //previous slide variables
        var currentSlide = $('.active-slide');
        prevSlide = currentSlide.prev();

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if(prevSlide.length == 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }

        //apply variables to change back to prev slide
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');

        //make current dot go to prev dot
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });


    $('.arrow-next').click(function(){
        //next slide variables
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        //next dot variables
        var currentDot = $('.active-dot');
        var nextDot = $('.active-dot').next();

        if(nextSlide.length == 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        //moving to next slide
        currentSlide.fadeOut(200).removeClass('active-slide');
        nextSlide.fadeIn(1200).addClass('active-slide');

        //moving to next dot
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
}


$(document).ready(main);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}