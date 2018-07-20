$(document).ready( function() {
    $("#aboutBox").hide(); //hide your div initially
    var topOfOthDiv = $("#topOfOthDiv").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#aboutBox").show(); //reached the desired point -- show div
        }
    });
});
