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


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $("#aboutBox").show();
    $('.scrollspy').scrollSpy();
  });
