let w = document.documentElement.clientWidth || window.innerWidth;

 if (w <= 680) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
 } else {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
 }

 












let slideIndex = 0;
 showSlides();
 
 function showSlides() {
     let i;
     let slides = document.getElementsByClassName('mySlides');
     
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     slideIndex++;
     if (slideIndex > slides.length) {
         slideIndex = 1
     }
     slides[slideIndex - 1].style.display = "block";
     setTimeout(showSlides, 4000);
    }

    let sliderIndex = 1;
showSlide(sliderIndex);

function plusSlides(n) {
  showSlide(sliderIndex += n);
}

function currentSlide(n) {
  showSlide(sliderIndex = n);
}

function showSlide(n) {
  let i;
  let slide = document.getElementsByClassName("mySlides");
  
  if (n > slide.length) {sliderIndex = 1}    
  if (n < 1) {sliderIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
 
  slide[sliderIndex-1].style.display = "block";  

}
