document.addEventListener('DOMContentLoaded', function() {
  var index = 0;
  var slides = document.querySelectorAll('.lun');
  var totalSlides = slides.length;
  function showSlide() {
    slides.forEach(function(slide) {
      slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
    index = (index + 1) % totalSlides;
  }
  var slideInterval = setInterval(showSlide, 3000);
    document.querySelector('.prev').addEventListener('click', function() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
  });
  document.querySelector('.next').addEventListener('click', function() {
    index = (index + 1) % totalSlides;
    showSlide();
  });
});
window.onload=function(){
  alert("你好，欢迎来到比奇堡！！！")
}