$(document).ready(function () {
  $(".first-button").on("click", function () {
    $(".animated-icon1").toggleClass("open");
  });

  $(".animated-icon1").on("click", function () {
    $(".menu").removeClass("open");
  });


  $(".animated-icon1").on("click", function () {
    $(".menu").removeClass("open");
  });

  $(".menu a").on("click", function () {
    $(".menu").removeClass("menu");
  });

  function hideMenu() {
    let menuOpen = document.querySelector(".navbar-toggler").checked;

    if ((menuOpen = true)) {
      document.querySelector(".navbar-toggler").checked = false;
    }
  }
  window.addEventListener("scroll", hideMenu);

  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //$('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //$(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");

  $(function () {
    var navMain = $(".navbar-collapse");

    navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse("hide");
    });
  });
});

$(document).ready(function () {});

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

AOS.init();