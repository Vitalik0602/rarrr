const filterButtons =
document.querySelectorAll(".program-btn");

const cards =
document.querySelectorAll(".program-card");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

filterButtons.forEach(btn =>
btn.classList.remove("active")
);

button.classList.add("active");

const filter =
button.dataset.filter;

cards.forEach(card => {

if(
filter === "all" ||
card.classList.contains(filter)
){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

});

});