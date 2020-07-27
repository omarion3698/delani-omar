$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown('1700').hide('1200');
    $("#development").show('1700');
  });
  $("#development").click(function(){
    $("#development").slideUp('1700');
    $("#development-image").slideDown('1700');
  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideDown('1700').hide('1200');
    $("#design").show('1700');
  });
  $("#design").click(function(){
    $("#design").slideUp('1700');
    $("#design-image").slideDown('1700');
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideDown('1700').hide('1200');
    $("#product").show('1700');
  });
  $("#product").click(function(){
    $("#product").slideUp('1700');
    $("#product-image").slideDown('1700');
  });
});

$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });
});
$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});
$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });
  $("#work6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });
  $("#work7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
  $("#work8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
});

//UI logic//

$(document).ready(function(){
  $("form#form34A").submit(function(event){
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    if ($("input#MERGE1").val() && $("input#MERGE0").val()){
      alert (name + ", we have received your message. Thank you for contacting us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    event.preventDefault(event);
  });
});