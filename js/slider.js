let prevArrow = document.getElementById('prevArrow')
let nextArrow = document.getElementById('nextArrow')

$('.feature-items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: prevArrow,
  nextArrow: nextArrow,
  autoplay: true,
  autoplaySpeed: 1500,
});