$(document).ready(function(){

$('#myCarouselSlides').carousel({ interval: 3000, cycle: true });
$('myCarousel').carousel({interval: 2000, cycle: true});
console.log("ready");
//W3 The Company Smooth Scrolling
// Add smooth scrolling to all links in navbar + footer link
$(".navbarSpy li a ,#myCarousel a,#myCarouselSlides a,#getintouch a").on('click', function(event) {

 // Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  },  function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
  } // End if
});
//Smooth Scrolling W3 Ends

});

//Prevent Default Spy Behaviour From anchor and do normal location.href
$('.navbarSpy li a, .navbar a,.footerNoSpy a').click(function(event) {
if(($(this).attr('href'))==='/'||($(this).attr('href'))==='/signup'||($(this).attr('href'))==='/login'){
  event.preventDefault();
  location.href=($(this).attr('href'));
}
});

// ===== Scroll to Top ====
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});
//Scroll-to-top Ends

// function toggl(x) {
//   var ele=document.getElementById(x);
//   ele.classList.toggle('hide');
// }
// function openOnlytoggl(x)
//  {
//    var ele=document.getElementById(x);
//    ele.classList.remove('hide');
// }
// function closeToggl(x) {
//   var ele=document.getElementById(x);
//   ele.classList.add('hide');
// }

/**
 * FOOTER JS Begins
 */
function myMap() {
    var mapCanvas = document.getElementById("googleMap");
    var myCenter = new google.maps.LatLng(28.553961,77.2668736,);
    var mapOptions = {center: myCenter, zoom: 15};
    var map = new google.maps.Map(mapCanvas,mapOptions);
    var marker = new google.maps.Marker({
      position: myCenter,
      animation: google.maps.Animation.DROP
    });
    marker.setMap(map);
  }

  function onSubmit(token) {
    console.log('onSubmit called')
    document.getElementById("CommentForm").submit();
  }
  function onSubmit2(token){
    console.log('onSubmit2 called')
    console.log(document.getElementById('gform-modal-submit-btn'));
    document.getElementById('gform-modal-submit-btn').click();
  }

  function onSubmit3(token){
    console.log('onSubmit3 called');
    document.getElementById("RequestQuoteForm").submit();
  }
