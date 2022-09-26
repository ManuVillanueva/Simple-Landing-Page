
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Function that hides the menu icon and displays the nav list.
menuBtn.addEventListener("click" , ()=> {
    navLinks.classList.toggle("mobile-menu")
});