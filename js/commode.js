var navbarCollapse = function() {
  if ($("#navCom").offset().top > 100) {
    $("#navCom").addClass("navbar-shrink");
  } else {
    $("#navCom").removeClass("navbar-shrink");
  }
};
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  var navitem = function() {
    if ($("#btn1, #btn2, #btn3, #btn4, #btn5").offset().top > 100) {
      $("#btn1, #btn2, #btn3, #btn4, #btn5").addClass("btn-shrink");
    } else {
      $("#btn1, #btn2,#btn3, #btn4, #btn5").removeClass("btn-shrink");
    }
  };
  navitem();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navitem);


/*------------------modal------------------------------------------------*/
var modal = document.getElementById('testModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('Prodimg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
/*-------------------------------------------------------------------*/
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#navCom'
  });

})(jQuery); // End of use strict


