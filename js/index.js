<script>
const rotateButton = document.querySelector('.rotate-button');
rotateButton.addEventListener('mouseover', () => {
  rotateButton.style.transform = 'rotate(25deg)';
});

rotateButton.addEventListener('mouseout', () => {
  rotateButton.style.transform = 'rotate(0)';
});
$(document).ready(function() {
// Event listener for the "Work" link
$("nav ul li:nth-child(1) a").on("click", function(event) {
    event.preventDefault();
      // Scroll to the "work" section
      $('html, body').animate({
        scrollTop: $("#work").offset().top
      }, 800);
    });
  
    // Event listener for the "About Me" link
    $("nav ul li:nth-child(2) a").on("click", function(event) {
      event.preventDefault();
      // Scroll to the "about" section
      $('html, body').animate({
        scrollTop: $("#about").offset().top
      }, 800);
    });
  
    // Event listener for the "Contact" link
    $("nav ul li:nth-child(4) a").on("click", function(event) {
      event.preventDefault();
      // Scroll to the "contact" section
      $('html, body').animate({
        scrollTop: $("#contact").offset().top
      }, 800);
    });
  });
  </script>
  