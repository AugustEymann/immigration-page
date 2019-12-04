// Loads Header and Navbar
$('.app').prepend(ejs.rr('components/head.ejs', {page: 'Home'}))
$('.app').prepend(ejs.rr('components/navbar.ejs', {page: 'home'}))

//Load Page Header
//$('.app').append(ejs.rr('components/header.ejs', {title: 'Immigrants', subtitle: 'Background'}))
//Loads Page Data
$('.app').append(ejs.rr('views/home.ejs'))
//Load Footer Last
$('.app').append(ejs.rr('components/footer.ejs'));


var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].styles.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
