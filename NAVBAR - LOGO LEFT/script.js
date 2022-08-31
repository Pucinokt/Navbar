// En Scroll function der gør at når du scroller over 50px akitiveres og tilføjes "affix" classen med sort baggrund.
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});
// Burgermenu trigger når den klikkes aktiveres listen og henter id'et "mainListDiv" med et lille fadein.
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});