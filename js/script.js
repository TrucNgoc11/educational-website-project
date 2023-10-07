const header = document.querySelector("header");
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
}); 
registerLink.addEventListener("click", ()=> {
    wrapper.classList.add("active");
});
loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove("active");
});
btnPopup.addEventListener("click", ()=> {
    wrapper.classList.add("active-popup");
});
iconClose.addEventListener("click", ()=> {
    wrapper.classList.remove("active-popup");
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector("#.navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
}