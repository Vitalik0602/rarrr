/* ==========================================
   gallery.js
========================================== */

const filterButtons =
document.querySelectorAll(
".gallery-btn"
);

const galleryItems =
document.querySelectorAll(
".gallery-item"
);

filterButtons.forEach(button => {

button.addEventListener(
"click",

() => {

filterButtons.forEach(btn => {

btn.classList.remove("active");

});

button.classList.add("active");

const filter =
button.dataset.filter;

galleryItems.forEach(item => {

if(
filter === "all" ||
item.classList.contains(filter)
){

item.style.display =
"block";

}else{

item.style.display =
"none";

}

});

});

});

/* ==========================
   LIGHTBOX
========================== */

const images =
document.querySelectorAll(
".gallery-item img"
);

const lightbox =
document.querySelector(
".lightbox"
);

const lightboxImage =
document.querySelector(
".lightbox img"
);

const closeButton =
document.querySelector(
".lightbox-close"
);

images.forEach(image => {

image.addEventListener(
"click",

() => {

lightbox.classList.add(
"show"
);

lightboxImage.src =
image.src;

});

});

if(closeButton){

closeButton.addEventListener(
"click",

() => {

lightbox.classList.remove(
"show"
);

});

}

if(lightbox){

lightbox.addEventListener(
"click",

e => {

if(
e.target === lightbox
){

lightbox.classList.remove(
"show"
);

}

});

}
