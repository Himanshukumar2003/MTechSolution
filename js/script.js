(function ($) {
  "use strict";

  var $window = $(window);

  // :: Sticky Active Code
  $window.on("scroll", function () {
    if ($(document).scrollTop() > 86) {
      $("#banner").addClass("shrink");
    } else {
      $("#banner").removeClass("shrink");
    }
  });

  // :: Preloader Active Code
  $window.on("load", function () {
    $("#preloader").fadeOut("1000", function () {
      $(this).remove();
    });
  });

  // :: Sticky Active Code
  $window.on("scroll", function () {
    if ($window.scrollTop() > 0) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }
  });

  // :: Carousel Active Code
  if ($.fn.owlCarousel) {
    $(".client_slides").owlCarousel({
      responsive: {
        0: {
          items: 1,
        },
        991: {
          items: 3,
        },
        767: {
          items: 1,
        },
      },
      loop: true,
      autoplay: true,
      smartSpeed: 700,
      dots: true,
    });

    var dot = $(".client_slides .owl-dot");
    dot.each(function () {
      var index = $(this).index() + 1;
      if (index < 10) {
        $(this).html("0").append(index);
      } else {
        $(this).html(index);
      }
    });
  }

  // :: Magnific-popup Video Active Code
  if ($.fn.magnificPopup) {
    $("#videobtn").magnificPopup({
      type: "iframe",
    });
    $(".gallery_img").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
      removalDelay: 300,
      mainClass: "mfp-fade",
      preloader: true,
    });
  }

  // :: ScrollUp Active Code
  if ($.fn.scrollUp) {
    $.scrollUp({
      scrollSpeed: 1500,
      scrollText: "Scroll Top",
    });
  }
  // :: Wow Active Code
  if ($window.width() > 767) {
    new WOW().init();
  }

  // :: Accordian Active Code
  (function () {
    var dd = $("dd");
    dd.filter(":nth-child(n+3)").hide();
    $("dl").on("click", "dt", function () {
      $(this).next().slideDown(500).siblings("dd").slideUp(500);
    });
  })();

  // :: niceScroll Active Code
  if ($.fn.niceScroll) {
    $(".timelineBody").niceScroll();
  }

  $("body").bind("cut copy paste", function (e) {
    e.preventDefault();
  });
  $("body").on("contextmenu", function (e) {
    return !1;
  });
  document.onkeydown = function (e) {
    if (
      e.ctrlKey &&
      (e.keyCode === 67 ||
        e.keyCode === 86 ||
        e.keyCode === 85 ||
        e.keyCode === 117)
    ) {
      alert("This is not allowed");
      return !1;
    } else {
      return !0;
    }
  };
  $(document).keydown(function (event) {
    if (event.keyCode == 123) {
      return !1;
    } else if (
      (event.ctrlKey && event.shiftKey && event.keyCode == 73) ||
      (event.ctrlKey && event.shiftKey && event.keyCode == 74)
    ) {
      return !1;
    }
  });
  var isCtrl = !1;
  (document.onkeyup = function (a) {
    17 == a.which && (isCtrl = !1);
  }),
    (document.onkeydown = function (a) {
      if (
        (17 == a.which && (isCtrl = !0),
        85 == a.which || (67 == a.which && 1 == isCtrl))
      )
        return !1;
    });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".dropdown-submenu .dropdown-toggle");

  elems.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var submenu = this.nextElementSibling;

      if (submenu.classList.contains("show")) {
        submenu.classList.remove("show");
      } else {
        const openSubmenus = document.querySelectorAll(
          ".dropdown-submenu-menu.show"
        );
        openSubmenus.forEach(function (openSubmenu) {
          openSubmenu.classList.remove("show");
        });

        submenu.classList.add("show");
      }
    });
  });
});

(function () {
  emailjs.init("FKxzo41akIFhNOg0p"); // Your User ID from EmailJS
})();

document
  .getElementById("main_contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    emailjs
      .send("service_5wiixn4", "template_57w16ge", {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("success_fail_info").innerHTML =
            '<p style="color:green;">Message sent successfully!</p>';
          document.getElementById("main_contact_form").reset();
        },
        function (error) {
          console.log("FAILED...", error);
          document.getElementById("success_fail_info").innerHTML =
            '<p style="color:red;">Message failed to send. Please try again later.</p>';
        }
      );
  });
