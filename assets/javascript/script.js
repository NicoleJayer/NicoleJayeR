$("#aboutBox").hide();


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 500) {
    $('#aboutBox').show();
  }
});
