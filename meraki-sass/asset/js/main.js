$(document).ready(function () {

  $(function () {
    var navMain = $(".navbar-collapse");

    navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse("hide");
    });
  });
  
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });
});

// Custom JavaScript
var header = document.getElementById("MyDiv");
var btns = header.getElementsByClassName("filter-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
