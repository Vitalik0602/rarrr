/* ==========================================
   REVIEWS SLIDER
========================================== */

const slides =
document.querySelectorAll(
".review-slide"
);

let currentSlide = 0;

function showSlide(index){

slides.forEach(slide => {

slide.classList.remove(
"active"
);

});

slides[index].classList.add(
"active"
);

}

const nextBtn =
document.getElementById(
"nextReview"
);

const prevBtn =
document.getElementById(
"prevReview"
);

if(nextBtn){

nextBtn.addEventListener(
"click",

() => {

currentSlide++;

if(
currentSlide >= slides.length
){

currentSlide = 0;

}

showSlide(currentSlide);

});

}

if(prevBtn){

prevBtn.addEventListener(
"click",

() => {

currentSlide--;

if(
currentSlide < 0
){

currentSlide =
slides.length - 1;

}

showSlide(currentSlide);

});

}

setInterval(() => {

if(slides.length){

currentSlide++;

if(
currentSlide >= slides.length
){

currentSlide = 0;

}

showSlide(currentSlide);

}

},5000);