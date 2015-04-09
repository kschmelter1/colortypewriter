$(document).ready(function(){

//Typewriter code

  var canvas = $("#canvas");
  var backspace = function() {
    $('#canvas div:last-child').remove();
  };

$(document).on("keydown", function (key) {
  //Prevent default backspace action & remove last pixel
    if (key.which === 8) {
        key.preventDefault();
        backspace();
  //Checks ranges of keys a-z, 0-9, & [];',./ then
  //appends corresponding class to a new pixel div
    } else if (key.which >= 65 && key.which <= 90 || key.which >= 48 && key.which <= 57 || key.which >= 186 && key.which <= 191 || key.which == 219 || key.which == 221 || key.which == 222) {
      canvas.append('<div class="pixel k-' + key.which + '" ></div>');
    } else if (key.which === 32) {
      key.preventDefault();
      canvas.append('<div class="pixel k-' + key.which + '" ></div>');
    } else {
      return;
    }
}); //end of key down function


  canvas.click(function(){
    $(this).empty();
  });

}); //end of code

  //Functions to highlight the typewriter keys when pressed
  //$(window).keydown(function(e) {
  //    key = (e.keyCode) ? e.keyCode : e.which;
  //    $('.key.k' + key).addClass('active');
  //  });

  //  $(window).keyup(function(e) {
  //    key = (e.keyCode) ? e.keyCode : e.which;
  //    $('.key.k' + key).removeClass('active');
  //  });

  //});
