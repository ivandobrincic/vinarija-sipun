document.getElementById('carouselExampleIndicators').addEventListener('slide.bs.carousel', function(e) {
  document.querySelectorAll('.carousel-thumb').forEach(t => t.classList.remove('active-thumb'));
  document.querySelectorAll('.carousel-thumb')[e.to].classList.add('active-thumb');
});