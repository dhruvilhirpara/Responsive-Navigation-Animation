$('.navbar-expand-toggle').on('click', function() {
    $(this).toggleClass('open');
});
$(".navbar-expand-toggle , .close-menu-icon").on('click', function() {
    $(".app-container").toggleClass("expanded");
    $('body').toggleClass('body-toogle-menu');
    return false;
});

$('body').click(function(e) {
    var menu_contain = $(".side-menu");
    // if the target of the click isn't the container nor a descendant of the container
    if (!menu_contain.is(e.target) && menu_contain.has(e.target).length === 0) {
        $('body').removeClass("body-toogle-menu");
        $('.app-container').removeClass("expanded");
    }
});

$(".nav-header").click(function() {
    $(this).hide().slideUp(1500);
    $(".nav-header-close").show("slow").slideDown(1500);
    $(".menu-content").show("slow").slideDown("slow");
    $(".header").addClass("bgadd");
});
$(".nav-header-close").click(function() {
    $(this).hide().slideUp();
    $(".menu-content").hide("slow").slideUp("slow");
    $(".nav-header").show("slow").slideDown(1500);
    $(".header").removeClass("bgadd").delay(5000);
});
