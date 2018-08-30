$("#aboutBox").hide();
$("#skillsBox").hide();


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 500) {
    $('#aboutBox').show();
  }

  if (y > 1000) {
    $('#skillsBox').show();
  }
  
});
