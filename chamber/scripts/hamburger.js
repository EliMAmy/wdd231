//NAVIGATION :STORE THE SELECTED ELEMENTS THAT WE ARE GOING TO USE
const navbutton = document.querySelector("#nav-button");

const navBar = document.querySelector('#nav-bar');
//Toggle the show class off and on
navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("show");
    navBar.classList.toggle('show');
})


