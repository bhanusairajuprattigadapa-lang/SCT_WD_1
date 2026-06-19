const navbar = document.getElementById("navbar");

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  }

  else{

    navbar.classList.remove("scrolled");

  }

  revealCards();

});

/* MOBILE MENU */

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

/* SCROLL REVEAL ANIMATION */

const cards = document.querySelectorAll(".card");

function revealCards(){

  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom){

      card.classList.add("show");

    }

  });

}

revealCards();