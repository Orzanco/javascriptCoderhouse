function function_Dark_mode() {
    if ($('input[type="checkbox"]').prop("checked") == false) {

      $("body").css('background-color', 'white');
      $("body").css('color', 'black');


    } else {
      $("body").css('background-color', 'black');
      $("body").css('color', 'white');

    }

  }