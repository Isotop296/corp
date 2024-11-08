function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


  
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Kompletering, ändrade onclik till eventlisterner
document.addEventListener("DOMContentLoaded", function() {
  // Get references to the elements
  var prevButton = document.getElementById("prevButton");
  var nextButton = document.getElementById("nextButton");
  var dot1 = document.getElementById("dot1");
  var dot2 = document.getElementById("dot2");
  var dot3 = document.getElementById("dot3");

  // Add event listeners
  prevButton.addEventListener("click", function() {
    plusSlides(-1);
  });

  nextButton.addEventListener("click", function() {
    plusSlides(1);
  });

  dot1.addEventListener("click", function() {
    currentSlide(1);
  });

  dot2.addEventListener("click", function() {
    currentSlide(2);
  });

  dot3.addEventListener("click", function() {
    currentSlide(3);
  });
});

