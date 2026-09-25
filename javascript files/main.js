window.onload = function() {
    var typed = new Typed(".typing-text", {
        strings: ["I'm Ahmed ragab|", "I'm a Designer|", "I'm a Developer|", "I'm a Freelancer|"],
        typeSpeed: 300,
        backSpeed: 100,
        backDelay: 2000,
        loop: true,
    

    });
};

$(document).ready(function(){
    $('.nav-links a').on('click', function() {
        var target = $(this).attr('href');
        $('.nav-links a').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500); 
    });
});

$(document).ready(function(){
    $('.btn-hire ').on('click', function() {
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500); 
    });
});


$(document).ready(function(){
    $('.back-to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0 
        }, 1500); 
    });
});


$(document).ready(function(){
    $('.scrol-btn a').on('click', function() {
        var target = $(this).attr('href');
        $(".nav-links a").removeClass('active');
        $(".nav-links a[href='" + target + "']").addClass('active');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500); 
    });
});


$(document).ready(function() {
    $('.portfolio-filter li').click(function() {
        $('.portfolio-filter li').removeClass('active');
        $(this).addClass('active');

        var cate = $(this).attr('data-filter');

        if (cate == 'all') {
            $('.portfolio-item').fadeIn(400);
        } else {
            $('.portfolio-item').hide();
            $( '.' + cate).fadeIn(400);
        }
    });
});

$(document).ready(function() {

    let Index = 0;
    let images; 

    $(".portfolio-item img").click(function() {
        images = $(".portfolio-item:visible img");

        Index = images.index(this); 
        
        $(".slider-overlay").fadeIn().css("display", "flex");
        update();
    });
     
    $("#next").click(function(e) {
        images = $(".portfolio-item:visible img");
        Index = (Index + 1) % images.length; 
        update();
    });

    $("#prev").click(function(e) {
        images = $(".portfolio-item:visible img");
        Index = (Index - 1 + images.length) % images.length;
        update();
    });

    $(".slider-overlay").click(function(e) {
        if (e.target === this) {
            $(this).fadeOut();
        }
    });

    function update() {
        let newSrc = images.eq(Index).attr("src");
        $("#main-img").stop().fadeOut(150, function() {
            $(this).attr("src", newSrc).fadeIn(200);
        });
    }

});


$(document).ready(function() {
    $(".dot").click(function() {
        let index = $(this).index();
        $(".dot").removeClass("active");
        $(this).addClass("active");
        $(".testimonial-group").removeClass("active").hide();
        $(".testimonial-group").eq(index).fadeIn(600).addClass("active").css("display", "flex") ;
    });

});



