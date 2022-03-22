/* Menu on mobile */ 

const menuButton = document.querySelector('.menu-mobile-button');
const menuContent = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item')

const mobileMenu = () => {
  menuButton.classList.toggle('btn-active')
  menuContent.classList.toggle('menu-active')
  menuItems.forEach(item => {
    item.classList.toggle('item-active')
  })
}
/* Hiding menu after click one of elements */ 
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileMenu();
  })
})

/* Showing answers in about coop section  */

const items = document.querySelectorAll('.dropdown-item');

items.forEach((e) => e.addEventListener("click", () => {
    if(e.classList.contains("active")){
        e.classList.remove("active")
    } else{
        items.forEach((e) => e.classList.remove("active"));
        e.classList.add("active");
    }   
}));

/* Showing contact section at offer page */

const contactSectionToShow = document.querySelector(".contact-wrapper");

function showContactButton() {
    contactSectionToShow.classList.add('active');
    
}

/* Animated go up button which appears on the right bottom side */

var tl = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

tl.from("#goUp-button", 1, { right: "-9vmax" });

const scene = new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  triggerHook: "onLeave",
  duration: "10%",
})
  .setTween(tl)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
}